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

        <section class="w-full block">
            <UInput
                icon="i-lucide-search"
                size="md"
                variant="outline"
                placeholder="Pesquisar produto por nome..."
                class="w-full block"
            />
        </section>

        <template #right>
            <UButton
                icon=""
                color="neutral"
                variant="ghost"
                label=""
                size="xl"
                to="/checkout"
            />

            <span
                class="text-2xl text-primary-500 cursor-pointer"
                @click="openCheckout"
            >
                <UChip
                    :text="5"
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
        <template #content>xxx </template>
    </UHeader>
</template>

<script lang="ts" setup>
    import { LazySliderCheckout } from '#components'

    const userStore = useUserStore()
    const slideover = useSlideover()
    const { isLoggedIn, name, avatar } = storeToRefs(userStore)

    function openCheckout() {
        slideover.open(LazySliderCheckout)
    }
</script>
