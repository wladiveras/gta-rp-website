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
                                    v-model="state.userId"
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
                    :schema="v.safeParser(LoginSchema)"
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
                            name="email"
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
                            name="Telefone"
                            class="w-full md:w-1/2"
                            size="xl"
                        >
                            <UInput
                                v-model="state.userId"
                                type="Telefone"
                                class="w-full"
                            />
                        </UFormField>
                        <UFormField
                            label="Telefone"
                            name="Telefone"
                            class="w-full md:w-1/2"
                            size="xl"
                        >
                            <UInput
                                v-model="state.cellphone"
                                type="Telefone"
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

    const orderStore = useOrderStore()
    const { items, totalPrice } = storeToRefs(orderStore)
    const toast = useToast()

    const LoginSchema = v.object({
        name: v.pipe(
            v.string('Your email must be a string.'),
            v.nonEmpty('Please enter your email.'),
            v.email('The email address is badly formatted.')
        ),
        email: v.pipe(
            v.string('Your email must be a string.'),
            v.nonEmpty('Please enter your email.'),
            v.email('The email address is badly formatted.')
        ),
        document: v.pipe(
            v.string('Your email must be a string.'),
            v.nonEmpty('Please enter your email.'),
            v.email('The email address is badly formatted.')
        ),
        cellphone: v.pipe(
            v.string('Your password must be a string.'),
            v.nonEmpty('Informe um telefone.'),
            v.minLength(8, 'Your password must have 8 characters or more.')
        ),
        userId: v.pipe(
            v.string('Your password must be a string.'),
            v.nonEmpty('Informe um telefone.'),
            v.minLength(8, 'Your password must have 8 characters or more.')
        )
    })

    type Schema = v.InferOutput<typeof LoginSchema>

    const state = reactive({
        name: '',
        email: '',
        document: '',
        cellphone: '',
        userId: ''
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

    async function onSubmit(event: FormSubmitEvent<Schema>) {
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
