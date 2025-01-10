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
        async setCurrentGuild() {
            this.currentGuild = this.guilds
                .filter(
                    (guild) =>
                        guild.id === useRuntimeConfig().public.DISCORD_SERVER_ID
                )
                .pop()

            await this.checkIfUserIsInServer()
        },
        async checkIfUserIsInServer() {
            if (!this.currentGuild) {
                this.signOut()
            }
        },
        async authenticateWithDiscord() {
            const { error } = await useSupabaseClient().auth.signInWithOAuth({
                provider: 'discord',
                options: {
                    scopes: 'identify email guilds',
                    redirectTo: `${useRuntimeConfig().public.PROJECT_URL}/callback`
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
            await this.setCurrentGuild()
        },

        async signOut() {
            const { error } = await useSupabaseClient().auth.signOut()

            if (error) throw error

            this.$reset()
            await navigateTo('/')
        }
    }
})
