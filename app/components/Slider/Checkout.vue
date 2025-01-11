<script setup lang="ts">
    const slideover = useSlideover()

    const products = ref([
        {
            name: 'Blindado (BLINDADO - 200KG)',
            price: 10000,
            quantity: 1,
            image: 'https://storage.hydrus.gg/production/packages/XovB0aeNFMzYBAdXUHUn6RSm7DMaaCRV7kSph9nN3XuauZF6y9BDz07IarAyHyoI.png'
        },
        {
            name: 'Blindado (BLINDADO - 200KG)',
            price: 10000,
            quantity: 1,
            image: 'https://storage.hydrus.gg/production/packages/XovB0aeNFMzYBAdXUHUn6RSm7DMaaCRV7kSph9nN3XuauZF6y9BDz07IarAyHyoI.png'
        },
        {
            name: 'Blindado (BLINDADO - 200KG)',
            price: 10000,
            quantity: 1,
            image: 'https://storage.hydrus.gg/production/packages/XovB0aeNFMzYBAdXUHUn6RSm7DMaaCRV7kS'
        },
        {
            name: 'Blindado (BLINDADO - 200KG)',
            price: 10000,
            quantity: 1,
            image: 'https://storage.hydrus.gg/production/packages/XovB0aeNFMzYBAdXUHUn6RSm7DMaaCRV7kS'
        },
        {
            name: 'Blindado (BLINDADO - 200KG)',
            price: 10000,
            quantity: 1,
            image: 'https://storage.hydrus.gg/production/packages/XovB0aeNFMzYBAdXUHUn6RSm7DMaaCRV7kS'
        },
        {
            name: 'Blindado (BLINDADO - 200KG)',
            price: 10000,
            quantity: 1,
            image: 'https://storage.hydrus.gg/production/packages/XovB0aeNFMzYBAdXUHUn6RSm7DMaaCRV7kS'
        },
        {
            name: 'Blindado (BLINDADO - 200KG)',
            price: 10000,
            quantity: 1,
            image: 'https://storage.hydrus.gg/production/packages/XovB0aeNFMzYBAdXUHUn6RSm7DMaaCRV7kS'
        },
        {
            name: 'Blindado (BLINDADO - 200KG)',
            price: 10000,
            quantity: 1,
            image: 'https://storage.hydrus.gg/production/packages/XovB0aeNFMzYBAdXUHUn6RSm7DMaaCRV7kS'
        },
        {
            name: 'Blindado (BLINDADO - 200KG)',
            price: 10000,
            quantity: 1,
            image: 'https://storage.hydrus.gg/production/packages/XovB0aeNFMzYBAdXUHUn6RSm7DMaaCRV7kS'
        },
        {
            name: 'Blindado (BLINDADO - 200KG)',
            price: 10000,
            quantity: 1,
            image: 'https://storage.hydrus.gg/production/packages/XovB0aeNFMzYBAdXUHUn6RSm7DMaaCRV7kS'
        },
        {
            name: 'Blindado (BLINDADO - 200KG)',
            price: 10000,
            quantity: 1,
            image: 'https://storage.hydrus.gg/production/packages/XovB0aeNFMzYBAdXUHUn6RSm7DMaaCRV7kS'
        },
        {
            name: 'Blindado (BLINDADO - 200KG)',
            price: 10000,
            quantity: 1,
            image: 'https://storage.hydrus.gg/production/packages/XovB0aeNFMzYBAdXUHUn6RSm7DMaaCRV7kS'
        },
        {
            name: 'Blindado (BLINDADO - 200KG)',
            price: 10000,
            quantity: 1,
            image: 'https://storage.hydrus.gg/production/packages/XovB0aeNFMzYBAdXUHUn6RSm7DMaaCRV7kS'
        },
        {
            name: 'Blindado (BLINDADO - 200KG)',
            price: 10000,
            quantity: 1,
            image: 'https://storage.hydrus.gg/production/packages/XovB0aeNFMzYBAdXUHUn6RSm7DMaaCRV7kS'
        },
        {
            name: 'Blindado (BLINDADO - 200KG)',
            price: 10000,
            quantity: 1,
            image: 'https://storage.hydrus.gg/production/packages/XovB0aeNFMzYBAdXUHUn6RSm7DMaaCRV7kS'
        },
        {
            name: 'Blindado (BLINDADO - 200KG)',
            price: 10000,
            quantity: 1,
            image: 'https://storage.hydrus.gg/production/packages/XovB0aeNFMzYBAdXUHUn6RSm7DMaaCRV7kS'
        },
        {
            name: 'Blindado (BLINDADO - 200KG)',
            price: 50050,
            quantity: 1,
            image: 'https://storage.hydrus.gg/production/packages/XovB0aeNFMzYBAdXUHUn6RSm7DMaaCRV7kS'
        }
    ])

    const totalPrice = computed(() => {
        return products.value.reduce(
            (acc, product) => acc + product.price * product.quantity,
            0
        )
    })

    const removeFromCart = (index: number) => {
        products.value.splice(index, 1)
    }
</script>

<template>
    <USlideover
        title="Carrinho de Compras"
        description="Veja o sumario dos seus produtos selecionados."
    >
        <template #body>
            <section
                v-for="(product, index) in products"
                :key="index"
                class="flex justify-between border-b-1 border-b-gray-700 py-2 items-center"
            >
                <section class="flex flex-nowrap items-center">
                    <NuxtImg
                        class="h-15 w-15 rounded-md"
                        src="https://storage.hydrus.gg/production/packages/XovB0aeNFMzYBAdXUHUn6RSm7DMaaCRV7kSph9nN3XuauZF6y9BDz07IarAyHyoI.png"
                    />
                    <span class="flex flex-col gap ml-5 text-sm">
                        {{ product.name }}
                    </span>
                </section>
                <section>
                    <UInputNumber
                        v-model="product.quantity"
                        increment-icon="i-lucide-arrow-right"
                        decrement-icon="i-lucide-arrow-left"
                        :min="1"
                    />
                </section>

                <section>
                    <span class="flex flex-col gap ml-5">
                        R$
                        {{
                            formatPrice(product.price * product.quantity, true)
                        }}
                    </span>
                    <span
                        class="flex items-center ml-4 cursor-pointer text-red-500"
                        @click="removeFromCart(index)"
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
                class="w-full block text-white"
                color="primary"
                label="Finalizar Carrinho"
                @click="slideover.close()"
            />
        </template>
    </USlideover>
</template>
