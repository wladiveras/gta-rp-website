import { useUserStore } from './user'
import { defineStore } from 'pinia'
import { LazyModalDiscord } from '#components'

export const useCommenceStore = defineStore('commence', {
    state: () => ({
        id: ''
    }),

    getters: {},

    actions: {
        buyItem() {
            const userStore = useUserStore()
            const toast = useToast()
            const modal = useModal()

            const isLoggedIn = computed(() => userStore.isLoggedIn)

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
