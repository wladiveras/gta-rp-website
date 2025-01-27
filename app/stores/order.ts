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
            items: [],
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
        addToCart(item) {
            const toast = useToast()

            const existingItemIndex = this.items.findIndex(
                (cartItem) => cartItem.id === item.id
            )

            toast.add({
                title: 'Adicionado ao carrinho !',
                description: `${item.name} Adicionado ao carrinho com sucesso !`,
                icon: 'i-heroicons-check-circle',
                color: 'success',
                close: {
                    color: 'primary',
                    variant: 'outline',
                    class: 'rounded-full text-2xl'
                }
            })

            if (existingItemIndex >= 0) {
                this.items[existingItemIndex].quantity += 1
                return
            }

            const newCartItem = {
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                image: item.image
            }

            this.items.push(newCartItem)
        },
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
