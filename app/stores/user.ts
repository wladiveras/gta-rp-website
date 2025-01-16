import { LazyModalDiscord } from '#components'

export const useUserStore = defineStore('user', {
    state: () => ({
        id: '',
        name: '',
        discord: '',
        email: '',
        avatar: '',
        guilds: [],
        currentGuild: {}
    }),

    getters: {
        isLoggedIn(): boolean {
            return Boolean(this.id)
        }
    },

    actions: {
        async isConnected(type: string) {
            if (!this.isLoggedIn) {
                const modal = useModal()

                modal.open(LazyModalDiscord, {
                    description:
                        'Oops, antes entre no nosso discord para prosseguir!'
                })
                return
            }

            const config = useRuntimeConfig()

            if (type === 'store') {
                return navigateTo('/store')
            }

            if (type === 'connect') {
                return navigateTo(config.public.connect, { external: true })
            }
        },
        async setCurrentGuild() {
            await nextTick()
            const config = useRuntimeConfig()

            const guild = this.guilds
                .filter((guild) => guild.id === config.public.DISCORD_SERVER_ID)
                .pop()

            if (guild && guild !== this.currentGuild) {
                this.currentGuild = guild
            }

            await this.checkIfUserIsInServer()
        },
        async checkIfUserIsInServer() {
            // @ts-expect-error - this.currentGuild is not defined
            if (!this.currentGuild?.name) {
                await this.signOut()
            }
        },
        async authenticateWithDiscord() {
            await nextTick()
            const config = useRuntimeConfig()

            const { error } = await useSupabaseClient().auth.signInWithOAuth({
                provider: 'discord',
                options: {
                    scopes: 'identify email guilds',
                    redirectTo: `${config.public.PROJECT_URL}/callback`
                }
            })

            if (error)
                throw createError({
                    statusCode: 401,
                    message: 'Discord falhou na conexão.'
                })
        },

        async fetchUserProfile() {
            const user = useSupabaseUser()

            if (!user.value) {
                throw createError({
                    statusCode: 404,
                    message: 'User not found'
                })
            }

            const { user_metadata } = user.value

            this.id = user_metadata.provider_id
            this.name = user_metadata.custom_claims.global_name
            this.discord = user_metadata.full_name
            this.email = user_metadata.email
            this.avatar = user_metadata.avatar_url
        },

        async fetchDiscordGuilds() {
            const { data, error } = await useSupabaseClient().auth.getSession()

            if (error || !data?.session?.provider_token) {
                throw createError({
                    statusCode: 401,
                    message: 'Invalid session'
                })
            }

            const response = await fetch(
                'https://discord.com/api/v10/users/@me/guilds',
                {
                    headers: {
                        Authorization: `Bearer ${data.session.provider_token}`
                    }
                }
            )

            if (!response.ok) {
                throw createError({
                    statusCode: response.status,
                    message: 'Failed to fetch Discord guilds'
                })
            }

            this.guilds = await response.json()

            if (this.guilds) {
                setTimeout(async () => {
                    await this.setCurrentGuild()
                }, 1000)
            }
        },

        async signOut() {
            const toast = useToast()
            const { error } = await useSupabaseClient().auth.signOut()

            if (error) throw error

            toast.add({
                title: 'Desconectado !',
                icon: 'i-heroicons-x-mark-20-solid',
                description: 'Sua conta foi desconectada do sistema.',
                color: 'success'
            })

            this.$reset()

            setTimeout(async () => {
                await navigateTo('/')
            }, 5000)
        }
    }
})
