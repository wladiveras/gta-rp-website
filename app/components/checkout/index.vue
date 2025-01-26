<template>
    <section
        id="checkout"
        data-aos="zoom-out-up"
        class="h-screen w-full"
    >
        <section class="flex flex-col md:flex-row w-full p-8">
            <section class="flex w-full md:w-2/3 m-5">
                <section class="flex flex-col w-full">
                    <div class="w-full mb-8">
                        <h1 class="font-bold text-3xl">Seus items</h1>
                    </div>

                    <div class="flex flex-col">
                        <div class="flex mb-6">
                            <h2
                                class="text-center text-xl font-semibold w-[60%]"
                            >
                                Produtos
                            </h2>
                            <h2
                                class="text-xl font-semibold w-[15%] text-center"
                            >
                                Valor
                            </h2>
                            <h2
                                class="text-xl font-semibold w-[15%] text-center"
                            >
                                Quantidade
                            </h2>
                            <h2
                                class="text-xl font-semibold w-[10%] text-center"
                            ></h2>
                        </div>

                        <Divider class="mb-5" />

                        <section
                            v-for="(item, index) in items"
                            :key="index"
                            class="mb-2"
                        >
                            <div class="flex">
                                <div
                                    class="products p-4 w-[60%] text-xl bg-gray-900 rounded-2xl"
                                >
                                    <UIcon
                                        name="material-symbols-light:brightness-7-outline"
                                        size="xl"
                                        class="text-primary-500 relative top-[0.16rem] zoom"
                                    />
                                    {{ item.name }}
                                </div>
                                <div
                                    class="products p-4 text-primary-500 w-[15%] text-center text-xl"
                                >
                                    R$
                                    {{
                                        formatPrice(
                                            item.price * item.quantity,
                                            true
                                        )
                                    }}
                                </div>
                                <div
                                    class="products p-4 w-[15%] text-center justify-center items-center"
                                >
                                    <UInputNumber
                                        v-model="item.quantity"
                                        increment-icon="i-lucide-arrow-right"
                                        decrement-icon="i-lucide-arrow-left"
                                        :min="1"
                                        class="m-auto max-w-25 block"
                                    />
                                </div>
                                <div
                                    class="products p-4 w-[10%] text-center justify-center items-center"
                                >
                                    <span
                                        class="flex items-center cursor-pointer text-red-500"
                                        @click="
                                            orderStore.removeFromCart(index)
                                        "
                                    >
                                        <UIcon
                                            name="tabler:trash"
                                            class="mr-2 zoom"
                                            size="1.5rem"
                                        />
                                    </span>
                                </div>
                            </div>
                        </section>

                        <Divider class="mt-5" />

                        <section
                            class="flex justify-between items-center md:mt-5"
                        >
                            <section class="flex">
                                <span class="text-3xl">
                                    Total:
                                    <b class="text-primary-500">
                                        R$ {{ formatPrice(totalPrice, true) }}
                                    </b>
                                </span>
                            </section>
                            <section class="flex">
                                <UInput
                                    v-model="state.coupon"
                                    placeholder="Digite o código do cupom."
                                    type="text"
                                    size="xl"
                                    class="w-full mr-3 md:min-w-[300px] text-white"
                                />

                                <UButton
                                    icon="fluent-mdl2:coupon"
                                    size="xl"
                                    color="primary"
                                    class="text-white"
                                    variant="solid"
                                    @click="onCoupon"
                                >
                                    Aplicar
                                </UButton>
                            </section>
                        </section>

                        <Divider class="mt-5" />

                        <section class="mt-5">
                            <div>
                                <h1 class="font-bold text-3xl mb-5">
                                    Formas de Pagamento
                                </h1>
                            </div>
                            <div>
                                <URadioGroup
                                    v-model="value"
                                    value-key="id"
                                    :items="methods"
                                    size="xl"
                                />
                            </div>
                        </section>
                        <section class="flex justify-end">xx</section>
                    </div>
                </section>
            </section>
            <section class="w-full md:w-1/3 block m-5">
                <div>
                    <h1 class="font-bold text-3xl mb-5">Detalhes da Doação</h1>
                </div>
                <UForm
                    :schema="v.safeParser(detailSchema)"
                    :state="state"
                    class="space-y-4"
                    size="xl"
                    @submit="onSubmit"
                >
                    <div class="flex flex-col md:flex-row gap-4">
                        <UFormField
                            name="name"
                            label="Nome"
                            class="w-full"
                            size="xl"
                        >
                            <UInput
                                v-model="state.name"
                                class="w-full"
                            />
                        </UFormField>
                    </div>
                    <div class="flex flex-col md:flex-row gap-4">
                        <UFormField
                            label="Email"
                            name="email"
                            class="w-full"
                            size="xl"
                        >
                            <UInput
                                v-model="state.email"
                                class="w-full"
                            >
                            </UInput>
                        </UFormField>
                    </div>
                    <div class="flex flex-col md:flex-row gap-4">
                        <UFormField
                            label="CPF/CNPJ"
                            name="document"
                            class="w-full"
                            size="xl"
                        >
                            <UInput
                                v-model="state.document"
                                class="w-full"
                            />
                        </UFormField>
                    </div>

                    <div class="flex flex-col md:flex-row gap-4">
                        <UFormField
                            label="ID na Cidade"
                            name="userId"
                            class="w-full md:w-1/2"
                            size="xl"
                        >
                            <UInput
                                v-model="state.userId"
                                type="text"
                                class="w-full"
                            />
                        </UFormField>
                        <UFormField
                            label="Telefone"
                            name="cellphone"
                            class="w-full md:w-1/2"
                            size="xl"
                        >
                            <UInput
                                v-model="state.cellphone"
                                type="text"
                                class="w-full"
                            />
                        </UFormField>
                    </div>

                    <UButton
                        type="submit"
                        class="w-full text-2xl text-white block"
                    >
                        Continuar
                    </UButton>
                </UForm>
            </section>
        </section>
    </section>
</template>

<script lang="ts" setup>
    import * as v from 'valibot'
    import type { FormSubmitEvent } from '#ui/types'

    const toast = useToast()
    const orderStore = useOrderStore()
    const { items, totalPrice } = storeToRefs(orderStore)

    const detailSchema = v.object({
        name: v.pipe(
            v.string('Por favor, informe um nome válido.'),
            v.nonEmpty('Por favor, informe seu nome.')
        ),
        email: v.pipe(
            v.string('Por favor, informe um email válido.'),
            v.nonEmpty('Por favor, informe um email.'),
            v.email('Informe um email válido, algo está errado.')
        ),
        document: v.pipe(
            v.string('Inform seu CPF.'),
            v.nonEmpty('Por favor, informe seu CPF.'),
            v.minLength(11, 'Informe um CPF válido.')
        ),
        cellphone: v.pipe(
            v.string('Informe um celular válido.'),
            v.nonEmpty('Por favor, informe seu celular.'),
            v.minLength(9, 'Informe um celular válido.')
        ),
        userId: v.pipe(
            v.string('Informe um ID.'),
            v.nonEmpty('Informe um ID.'),
            v.minLength(1, 'Informe um ID.')
        )
    })

    const couponSchema = v.object({
        coupon: v.pipe(
            v.string('Informe um cupom válido.'),
            v.minLength(3, 'Informe um cupom válido.')
        )
    })

    type detailSchema = v.InferOutput<typeof detailSchema>

    const state = reactive({
        name: '',
        email: '',
        document: '',
        cellphone: '',
        userId: '',
        coupon: ''
    })

    const methods = ref([
        {
            label: 'Cartão de Credito/Debito',
            description: 'Pague utilizando seu cartão de crédito ou débito.',
            id: 'card'
        },
        {
            label: 'Pix',
            description: 'Pague diretamente o PIX.',
            id: 'pix'
        },
        {
            label: 'paypal',
            description: 'Pague através do Paypal',
            id: 'paypal'
        }
    ])
    const value = ref('pix')

    const onCoupon = async () => {
        const result = await v.safeParseAsync(couponSchema, {
            coupon: state.coupon
        })
        console.log(result)

        if (result.success) {
            toast.add({
                title: 'Cupom',
                description: 'Cupom válido',
                color: 'success'
            })
        } else {
            toast.add({
                title: 'Erro',
                description: 'Cupom inválido',
                color: 'error'
            })
        }
    }

    async function onSubmit(event: FormSubmitEvent<detailSchema>) {
        toast.add({
            title: 'Success',
            description: 'The form has been submitted.',
            color: 'success'
        })
        console.log(event.data)
    }

    onMounted(() => {
        orderStore.captureLead()
    })
</script>

<style>
    @media (min-width: 768px) {
        .flex-col.md\:flex-row {
            flex-direction: row;
        }
    }
</style>
