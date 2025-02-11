<template>
    <section
        id="checkout"
        data-aos="zoom-out-up"
        class="min-h-screen w-full py-8"
    >
        <UContainer class="flex flex-col md:flex-row max-w-[1300px]">
            <!-- Left Side - Form Section -->
            <div class="w-full px-6">
                <section
                    v-if="steps.step === 1"
                    data-aos="fade-right"
                >
                    <Divider class="mb-8" />

                    <div class="flex flex-col md:flex-row gap-8 w-full">
                        <!-- Form Section -->
                        <UForm
                            :schema="v.safeParser(detailSchema)"
                            :state="state"
                            class="space-y-6 w-full md:w-1/2"
                            size="xl"
                            @submit="onSubmit"
                        >
                            <UFormField
                                name="name"
                                label="Nome"
                                class="text-xl"
                                size="xl"
                            >
                                <UInput
                                    v-model="state.name"
                                    class="w-full"
                                />
                            </UFormField>

                            <UFormField
                                name="email"
                                label="Email"
                                class="text-xl"
                                size="xl"
                            >
                                <UInput
                                    v-model="state.email"
                                    class="w-full"
                                />
                            </UFormField>

                            <UFormField
                                name="document"
                                label="CPF/CNPJ"
                                class="text-xl"
                                size="xl"
                            >
                                <UInput
                                    v-model="state.document"
                                    class="w-full"
                                />
                            </UFormField>

                            <div class="grid grid-cols-2 gap-4">
                                <UFormField
                                    name="userId"
                                    label="ID na Cidade"
                                    class="text-xl"
                                    size="xl"
                                >
                                    <UInput
                                        v-model="state.userId"
                                        class="w-full"
                                    />
                                </UFormField>

                                <UFormField
                                    name="cellphone"
                                    label="Telefone"
                                    class="text-xl"
                                    size="xl"
                                >
                                    <UInput
                                        v-model="state.cellphone"
                                        class="w-full"
                                    />
                                </UFormField>
                            </div>
                        </UForm>

                        <!-- Image Section -->
                        <div
                            class="hidden md:flex w-1/2 items-center justify-center"
                        >
                            <NuxtImg
                                src="/images/hero-vip.png"
                                class="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                    <Divider class="mb-8" />
                </section>

                <!-- Payment Section -->
                <section
                    v-if="steps.step === 2"
                    data-aos="fade-right"
                    class="space-y-8"
                >
                    <!-- Products List -->
                    <div class="space-y-4">
                        <!-- Product Headers -->
                        <div
                            class="hidden md:grid grid-cols-4 font-semibold text-xl"
                        >
                            <h2 class="col-span-2">Produtos</h2>
                            <h2 class="text-center">Valor</h2>
                            <h2 class="text-center">Quantidade</h2>
                        </div>

                        <Divider />

                        <!-- Product Items -->
                        <div
                            v-for="(item, index) in items"
                            :key="index"
                            class="grid md:grid-cols-4 gap-4 bg-gray-900/50 rounded-xl p-4"
                        >
                            <div class="col-span-2 flex items-center gap-2">
                                <UIcon
                                    name="material-symbols-light:brightness-7-outline"
                                    class="text-primary-500"
                                />
                                <span>{{ item.name }}</span>
                            </div>

                            <div class="text-center text-primary-500">
                                R$
                                {{
                                    formatPrice(
                                        item.price * item.quantity,
                                        true
                                    )
                                }}
                            </div>

                            <div class="flex justify-between items-center">
                                <UInputNumber
                                    v-model="item.quantity"
                                    :min="1"
                                    class="w-24"
                                />
                                <UButton
                                    icon="tabler:trash"
                                    variant="ghost"
                                    @click="orderStore.removeFromCart(index)"
                                />
                            </div>
                        </div>
                    </div>

                    <Divider class="mt-5" />

                    <section class="flex justify-between items-center md:mt-5">
                        <section class="flex">
                            <span class="text-2xl">
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
                                aplicar
                                icon="fluent-mdl2:coupon"
                                size="xl"
                                color="primary"
                                class="text-base"
                                variant="solid"
                                @click="onCoupon"
                            >
                            </UButton>
                        </section>
                    </section>

                    <!-- Payment Methods -->
                    <div class="space-y-6">
                        <h1 class="text-3xl font-bold">Formas de Pagamento</h1>

                        <div class="flex flex-wrap gap-4 mb-[15rem]">
                            <section
                                class="flex items-center cursor-pointer p-5 rounded-lg flex-1 min-w-[300px]"
                                :class="{
                                    'border text-primary-500':
                                        payment.method === 'pix'
                                }"
                                @click="orderStore.changePaymentMethod('pix')"
                            >
                                <UIcon
                                    name="ri:pix-fill"
                                    size="3rem"
                                    class="mr-3"
                                />
                                <div>
                                    <h2 class="text-xl">PIX</h2>
                                    <p class="text-[var(--ui-text-muted)]">
                                        Utilize o PIX para realizar o pagamento
                                        de forma rápida e segura.
                                    </p>
                                </div>
                            </section>

                            <section
                                class="flex items-center cursor-pointer p-5 rounded-lg flex-1 min-w-[300px]"
                                :class="{
                                    'border text-primary-500':
                                        payment.method === 'credit_card'
                                }"
                                @click="
                                    orderStore.changePaymentMethod(
                                        'credit_card'
                                    )
                                "
                            >
                                <UIcon
                                    name="emojione:credit-card"
                                    size="3rem"
                                    class="mr-3"
                                />
                                <div>
                                    <h2 class="text-xl">Cartão de Crédito</h2>
                                    <p class="text-[var(--ui-text-muted)]">
                                        Utilize seu cartão de crédito para
                                        realizar o pagamento.
                                    </p>
                                </div>
                            </section>

                            <section
                                class="flex items-center cursor-pointer p-5 rounded-lg flex-1 min-w-[300px]"
                                :class="{
                                    'border text-primary-500':
                                        payment.method === 'debit_card'
                                }"
                                @click="
                                    orderStore.changePaymentMethod('debit_card')
                                "
                            >
                                <UIcon
                                    name="noto-v1:credit-card"
                                    size="3rem"
                                    class="mr-3"
                                />
                                <div>
                                    <h2 class="text-xl">Cartão de Debito</h2>
                                    <p class="text-[var(--ui-text-muted)]">
                                        Utilize seu cartão de débito para
                                        realizar o pagamento.
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
                <CheckoutStep class="mt-10" />
            </div>
        </UContainer>
    </section>
</template>

<script lang="ts" setup>
import * as v from 'valibot'
import type { FormSubmitEvent } from '#ui/types'

const toast = useToast()
const orderStore = useOrderStore()
const { items, steps, payment, totalPrice } = storeToRefs(orderStore)

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
