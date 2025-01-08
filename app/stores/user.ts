export const useUserStore = defineStore('user', {
    state: () => ({
        id: '',
        name: '',
        discord: '',
        email: '',
        avatar: '',
        guilds: [],
        currentGuild: []
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
                .pop(),
        getGuildIcon: (state) => {
            if (!state.currentGuild[0]?.icon) return null
            const iconHash = state.currentGuild[0].icon
            const iconFormat = iconHash.startsWith('a_') ? 'gif' : 'png'
            return `https://cdn.discordapp.com/icons/${state.currentGuild[0].id}/${iconHash}.${iconFormat}`
        },
        getGuildBanner: (state) => {
            if (!state.currentGuild[0]?.banner) return null

            const bannerHash = state.currentGuild[0].banner
            return `https://cdn.discordapp.com/banners/${state.currentGuild[0].id}/${bannerHash}.png`
        }
    },
    actions: {
        extractUserIdFromImageUrl(imageUrl: string): string {
            if (!imageUrl) return ''
            const parts = imageUrl.split('/')
            if (parts.length < 5) return ''
            return parts[4]
        },
        setAuth() {
            const { data: session, signOut } = useAuth()
            const toast = useToast()

            if (!session.value) return

            this.id =
                this.extractUserIdFromImageUrl(session?.value.user?.image) || ''
            this.discord = session?.value.user?.name || ''
            this.name = session?.value.user?.name || ''
            this.email = session?.value.user?.email || ''
            this.avatar = session?.value.user?.image || ''
            // @ts-expect-error Use .default here for it to work during SSR.
            this.guilds = session?.value.user?.guilds || []
            this.currentGuild = this.getCurrentGuild || []

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
