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
            <div class="flex flex-col gap-4">
                <div
                    v-for="(item, index) in items"
                    :key="index"
                    class="flex items-center justify-between border-b border-gray-700 py-4"
                >
                    <!-- Product Info -->
                    <div class="flex items-center gap-4">
                        <NuxtImg
                            :src="item.image"
                            class="h-16 w-16 rounded-lg object-cover zoom-sm cursor-pointer"
                        />
                        <span class="text-sm font-medium">{{ item.name }}</span>
                    </div>

                    <div class="flex items-center gap-6">
                        <div class="flex items-center justify-center w-24">
                            <UInputNumber
                                v-model="item.quantity"
                                class="flex"
                                increment-icon="i-lucide-arrow-right"
                                decrement-icon="i-lucide-arrow-left"
                                :min="1"
                                :input-classes="{
                                    input: 'text-center',
                                    wrapper: 'flex justify-center'
                                }"
                            />
                        </div>
                        <div class="flex flex-col items-end gap-1 min-w-[85px]">
                            <span class="text-primary-500 font-medium">
                                R$
                                {{
                                    formatPrice(
                                        item.price * item.quantity,
                                        true
                                    )
                                }}
                            </span>
                            <button
                                class="text-red-500 text-sm flex items-center gap-1 hover:text-red-400"
                                @click="orderStore.removeFromCart(index)"
                            >
                                <UIcon
                                    name="i-lucide-trash"
                                    size="sm"
                                />
                                remover
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <template #footer>
            <div class="flex justify-between items-center w-full">
                <div>
                    <span class="text-lg font-medium">Subtotal:</span>
                    <span class="text-primary-500 text-xl font-bold">
                        R$ {{ formatPrice(totalPrice, true) }}
                    </span>
                </div>

                <UButton
                    class="text-xl"
                    color="primary"
                    size="lg"
                    @click="goToCheckout"
                >
                    Ir ao Carrinho
                </UButton>
            </div>
        </template>
    </USlideover>
</template>
