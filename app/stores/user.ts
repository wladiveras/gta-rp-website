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
        setCurrentGuild() {
            const config = useRuntimeConfig()

            console.log('Server ID:', config.public.DISCORD_SERVER_ID)
            console.log('Available guilds:', this.guilds)

            const guild = this.guilds
                .filter((guild) => guild.id === config.public.DISCORD_SERVER_ID)
                .pop()

            if (guild && guild !== this.currentGuild) {
                this.currentGuild = guild
            }

            this.checkIfUserIsInServer()

            console.log('Current Guild:', this.currentGuild)
        },
        checkIfUserIsInServer() {
            // @ts-expect-error - Check if user is in server
            if (!this.currentGuild?.name) {
                const toast = useToast()

                toast.add({
                    title: 'Entre no Servidor',
                    description: 'Você não está mais no servidor.',
                    color: 'error'
                })
                setTimeout(() => {
                    this.signOut()
                }, 5000)
            }
        },
        async authenticateWithDiscord() {
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
                setTimeout(() => {
                    this.setCurrentGuild()
                }, 2000)
            }
        },

        async signOut() {
            const { error } = await useSupabaseClient().auth.signOut()

            if (error) throw error

            this.$reset()
            await navigateTo('/')
        }
    }
})
