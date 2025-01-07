<template>
    <UHeader class="fixed w-full">
        <template #title>
            <NuxtImg
                src="/images/logo.png"
                width="40"
                height="40"
            />
        </template>

        <UNavigationMenu
            :items="items"
            class="text-3xl"
        />

        <template #right>
            <UTooltip
                text="Entrar"
                :kbds="['meta', 'L']"
            >
                <UButton
                    color="neutral"
                    variant="ghost"
                    label="Entrar"
                    to="/login"
                    icon="line-md:discord-twotone"
                    aria-label="Login"
                />
            </UTooltip>
        </template>
        <template #content>
            <UNavigationMenu
                :items="items"
                orientation="vertical"
                class="-mx-2.5 text-3xl"
            />
        </template>
    </UHeader>
</template>

<script lang="ts" setup>
    const route = useRoute()

    onMounted(() => {
        console.log(route.path)
    })

    const isActive = (hash: string) => {
        if (!hash) {
            return route.path === '/' && !route.hash
        }
        return route.hash === hash
    }

    const items = computed(() => [
        {
            label: 'Inicio',
            to: '/',
            active: isActive('')
        },
        {
            label: 'Pacotes',
            href: '#package',
            active: isActive('#package')
        },
        {
            label: 'VIP',
            href: '#vip',
            active: isActive('#vip')
        },
        {
            label: 'Como jogar',
            href: '#tutorial',
            active: isActive('#tutorial')
        },
        {
            label: 'Contato',
            href: '#contact',
            active: isActive('#contact')
        }
    ])
</script>
