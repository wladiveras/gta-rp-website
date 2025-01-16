<script setup lang="ts">
    const orderStore = useOrderStore()
    const slideover = useSlideover()

    const { items, totalPrice, totalItems } = storeToRefs(orderStore)

    const goToCheckout = () => {
        slideover.close()
        navigateTo('/checkout')
    }
</script>

<template>
    <USlideover
        :title="`Carrinho de Items (${totalItems})`"
        description="Veja o sumario dos seus items selecionados."
    >
        <template #body>
            <section
                v-for="(item, index) in items"
                :key="index"
                class="flex justify-between border-b-1 border-b-gray-700 py-2 items-center"
            >
                <section class="flex flex-nowrap items-center">
                    <NuxtImg
                        class="h-15 w-15 rounded-md"
                        src="https://storage.hydrus.gg/production/packages/XovB0aeNFMzYBAdXUHUn6RSm7DMaaCRV7kSph9nN3XuauZF6y9BDz07IarAyHyoI.png"
                    />
                    <span class="flex flex-col gap ml-5 text-sm">
                        {{ item.name }}
                    </span>
                </section>
                <section>
                    <UInputNumber
                        v-model="item.quantity"
                        increment-icon="i-lucide-arrow-right"
                        decrement-icon="i-lucide-arrow-left"
                        :min="1"
                    />
                </section>

                <section>
                    <span class="flex flex-col gap ml-5">
                        R$
                        {{ formatPrice(item.price * item.quantity, true) }}
                    </span>
                    <span
                        class="flex items-center ml-4 cursor-pointer text-red-500"
                        @click="orderStore.removeFromCart(index)"
                    >
                        <UIcon
                            name="i-lucide-trash"
                            class="mr-2"
                        />
                        remover
                    </span>
                </section>
            </section>
        </template>

        <template #footer>
            <span class="block w-full">
                Subtotal: R$ {{ formatPrice(totalPrice, true) }}
            </span>
            <UButton
                class="w-full block text-white cursor-pointer text-xl"
                color="primary"
                label="Ir ao Carrinho"
                @click="goToCheckout"
            />
        </template>
    </USlideover>
</template>
