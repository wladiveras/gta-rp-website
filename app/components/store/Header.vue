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

        <section
            class="max-w-full gap-4 text-2xl flex items-center space-x-6 cursor-pointer"
        >
            <span class="hover:text-primary-500">Doadores</span>
            <UDropdownMenu
                :items="cars"
                :ui="{
                    content:
                        'w-48 bg-[var(--ui-bg)]/75 backdrop-blur top-3 relative',
                    item: 'text-xl'
                }"
            >
                <span class="hover:text-primary-500">Carros</span>
            </UDropdownMenu>
            <span class="hover:text-primary-500">aviões</span>
            <span class="hover:text-primary-500">helicópteros</span>
            <span class="hover:text-primary-500">mansões</span>
            <span class="hover:text-primary-500">facções</span>
            <span class="hover:text-primary-500">extras</span>
        </section>

        <template #right>
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
    </UHeader>
</template>

<script lang="ts" setup>
    import { LazySliderCheckout } from '#components'

    const userStore = useUserStore()
    const slideover = useSlideover()
    const { isLoggedIn, name, avatar } = storeToRefs(userStore)

    const cars = [
        [
            {
                label: 'Carros simples',
                icon: 'i-lucide-eye'
            },
            {
                label: 'Carros luxo',
                icon: 'i-lucide-copy'
            },
            {
                label: 'Carros hyper',
                icon: 'i-lucide-pencil'
            },
            {
                label: 'Carros exclusivos',
                icon: 'i-lucide-pencil'
            },
            {
                label: 'Carros blindados',
                icon: 'i-lucide-pencil'
            },
            {
                label: 'Carros de carga',
                icon: 'i-lucide-pencil'
            }
        ]
    ]

    const openCheckout = () => {
        slideover.open(LazySliderCheckout)
    }
</script>
