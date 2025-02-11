<template>
    <UHeader class="fixed w-full">
        <template #title>
            <div>
                <NuxtImg
                    src="/images/logo.png"
                    width="auto"
                    height="40"
                    class="max-h-[40px]"
                />
            </div>
        </template>

        <StoreCategories />

        <template #right>
            <span
                v-if="isLoggedIn"
                class="text-2xl text-primary-500 cursor-pointer"
                @click="openCheckout"
            >
                <UChip
                    :text="totalItems"
                    class="top-[3px] cursor-pointer"
                    size="3xl"
                    color="success"
                >
                    <UIcon name="material-symbols:shopping-cart-checkout" />
                </UChip>
                Carrinho
            </span>

            <UButton
                v-if="!isLoggedIn"
                icon="line-md:discord"
                variant="soft"
                color="primary"
                label="Entrar"
                size="xl"
                class="text-2xl"
                @click="userStore.authenticateWithDiscord()"
            />
        </template>
    </UHeader>
</template>

<script lang="ts" setup>
import { LazySliderCheckout } from '#components'

const userStore = useUserStore()
const orderStore = useOrderStore()
const slideover = useSlideover()

const { isLoggedIn } = storeToRefs(userStore)
const { totalItems } = storeToRefs(orderStore)

const openCheckout = () => {
    slideover.open(LazySliderCheckout)
}
</script>
