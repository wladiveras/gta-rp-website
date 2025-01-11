import { useUserStore } from './user'
import { LazyModalDiscord } from '#components'

export const useCommenceStore = defineStore('commence', {
    state: () => ({
        id: ''
    }),

    getters: {},

    actions: {
        async buyItem() {
            const userStore = useUserStore()
            const toast = useToast()
            const modal = useModal()

            const { isLoggedIn } = storeToRefs(userStore)

            if (!isLoggedIn) {
                modal.open(LazyModalDiscord, {
                    description:
                        'Você está prestes a comprar um Starter Pack, antes entre no nosso discord!'
                })
                return
            }

            toast.add({
                title: 'Item adquirido !',
                description: 'Você comprou o item com sucesso.',
                icon: 'map:convenience-store',
                color: 'success'
            })
        }
    }
})
