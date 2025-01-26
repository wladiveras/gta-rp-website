import { v4 as uuidv4 } from 'uuid'
import type { IOrderState } from '~/types'

export const useOrderStore = defineStore('order', {
    state: (): IOrderState => {
        return {
            isLoading: false,
            steps: {
                step: 1,
                max: 2,
                trigger: false,
                rollback: false
            },
            items: [
                {
                    id: 1,
                    name: 'Blindado (BLINDADO - 200KG)',
                    price: 10000,
                    quantity: 1,
                    image: 'https://storage.hydrus.gg/production/packages/XovB0aeNFMzYBAdXUHUn6RSm7DMaaCRV7kSph9nN3XuauZF6y9BDz07IarAyHyoI.png'
                },
                {
                    id: 2,
                    name: 'Blindado (BLINDADO - 30KG)',
                    price: 10000,
                    quantity: 1,
                    image: 'https://storage.hydrus.gg/production/packages/XovB0aeNFMzYBAdXUHUn6RSm7DMaaCRV7kSph9nN3XuauZF6y9BDz07IarAyHyoI.png'
                }
            ],
            customer: {
                id: 0,
                name: '',
                email: '',
                phone: '',
                document: '',
                userid: ''
            },
            payment: {
                id: 0,
                name: '',
                price: 0,
                method: 'credit_card',
                card: {
                    holderName: '',
                    number: '',
                    expireMonth: '',
                    expireYear: '',
                    cvv: '',
                    brand: '',
                    installments: 1
                }
            },
            token: ''
        }
    },
    getters: {
        totalItems: (state) =>
            state.items.reduce((total, item) => total + item.quantity, 0),
        totalPrice: (state) =>
            state.items.reduce(
                (acc, product) => acc + product.price * product.quantity,
                0
            )
    },
    actions: {
        removeFromCart(index: number) {
            this.items.splice(index, 1)
        },
        triggerStep(value: boolean) {
            this.steps.trigger = value
        },
        nextStep() {
            this.steps.rollback = false
            this.steps.step++
        },
        prevStep() {
            this.steps.rollback = true

            if (this.steps.step >= 1) {
                this.steps.step--
            }
        },
        setStep(step: number) {
            if (this.steps.step > this.steps.max) {
                this.steps.step = step
            }
        },
        captureLead() {
            if (!this.token) {
                const hash = uuidv4()
                this.token = hash
            }
        }
    }
})
