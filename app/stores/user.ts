export const useUserStore = defineStore('user', {
    state: () => ({
        id: '',
        user: '',
        name: '',
        email: '',
        avatar: '',
        guilds: [],
        currentGuild: []
    }),
    getters: {
        getCurrentGuild: (state) =>
            state.guilds.filter(
                (guild) =>
                    guild.id === useRuntimeConfig().public.DISCORD_SERVER_ID
            ),
        getGuildIcon: (state) => {
            const iconHash = state.currentGuild[0].icon
            const iconFormat = iconHash.startsWith('a_') ? 'gif' : 'png'
            const iconURL = `https://cdn.discordapp.com/icons/${state.currentGuild[0].id}/${iconHash}.${iconFormat}`

            return iconURL
        },
        getGuildBanner: (state) => {
            const bannerHash = state.currentGuild[0].banner
            const banner = `https://cdn.discordapp.com/banners/${state.currentGuild[0].id}/${bannerHash}.png`

            return banner
        }
    },
    actions: {
        extractUserIdFromImageUrl(imageUrl: string): string {
            const parts = imageUrl.split('/')

            if (parts.length < 5) return

            return parts[4]
        },

        async setAuth() {
            const { data: session, signOut } = useAuth()
            const toast = useToast()

            if (!session) return

            this.id =
                this.extractUserIdFromImageUrl(session?.value.user?.image) || ''
            this.user = session?.value.user?.name || ''
            this.name = session?.value.user?.name || ''
            this.email = session?.value.user?.email || ''
            this.avatar = session?.value.user?.image || ''
            // @ts-expect-error Use .default here for it to work during SSR.
            this.guilds = session?.value.user?.guilds || ''
            this.currentGuild = this.guilds.filter(
                (guild) =>
                    guild.id === useRuntimeConfig().public.DISCORD_SERVER_ID
            )

            if (this.currentGuild.length === 0) {
                toast.add({
                    title: 'Não foi possivel se conectar.',
                    description: 'Seu perfil não está vinculado a o servidor.',
                    color: 'error'
                })
                signOut({ callbackUrl: '/' })
            }
        },
        setName(name: string) {
            this.name = name
        }
    }
})
