export const useUserStore = defineStore('user', {
    state: () => ({
        id: '',
        name: '',
        discord: '',
        email: '',
        avatar: '',
        guilds: []
    }),
    getters: {
        isLoggedIn: (state) => {
            return Boolean(state.id) && state.id !== ''
        },
        getCurrentGuild: (state) =>
            state.guilds
                .filter(
                    (guild) =>
                        guild.id === useRuntimeConfig().public.DISCORD_SERVER_ID
                )
                .pop()
    },
    actions: {
        extractUserIdFromImageUrl(imageUrl: string): string {
            if (!imageUrl) return ''
            const parts = imageUrl.split('/')
            if (parts.length < 5) return ''
            return parts[4]
        },
        async loginWithDiscord() {
            const supabase = useSupabaseClient()

            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'discord',
                options: {
                    scopes: 'identify email guilds',
                    redirectTo: `${useRuntimeConfig().public.PROJECT_URL}/callback`
                }
            })
            if (error) console.log(error)
        },

        async fetchUser() {
            const user = useSupabaseUser()

            if (!user.value) {
                console.log('User not found')
                return
            }

            this.id = user.value.user_metadata.provider_id
            this.name = user.value.user_metadata.custom_claims.global_name
            this.discord = user.value.user_metadata.full_name
            this.email = user.value.user_metadata.email
            this.avatar = user.value.user_metadata.avatar_url
        },

        async fetchUserGuilds() {
            const supabase = useSupabaseClient()

            const { data, error } = await supabase.auth.getSession()

            if (error || !data) {
                console.log('Error fetching session or session not found')
                return
            }

            const accessToken = data.session.provider_token

            const response = await fetch(
                'https://discord.com/api/v10/users/@me/guilds',
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            )

            if (!response.ok) {
                console.error(
                    'Failed to fetch Discord guilds:',
                    response.statusText
                )
                return
            }

            const guilds = await response.json()

            this.guilds = guilds
        }
    }
})
