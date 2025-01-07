<template>
    <UHeader>
        <template #title>
            <Logo class="h-6 w-auto" />
        </template>

        <UNavigationMenu :items="items" />

        <template #right>
            <UColorModeButton />

            <UTooltip
                text="Open on GitHub"
                :kbds="['meta', 'G']"
            >
                <UButton
                    color="neutral"
                    variant="ghost"
                    to="https://github.com/nuxt/ui"
                    target="_blank"
                    icon="i-simple-icons-github"
                    aria-label="GitHub"
                />
            </UTooltip>
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
            label: 'Pacote Inicial',
            href: '#package',
            active: isActive('#package')
        },
        {
            label: 'VIP',
            href: '#vip',
            active: isActive('#vip')
        },
        {
            label: 'contato',
            href: '#contact',
            active: isActive('#contact')
        },
        {
            label: 'Figma',
            to: 'https://www.figma.com/community/file/1288455405058138934',
            target: '_blank'
        },
        {
            label: 'Releases',
            to: 'https://github.com/nuxt/ui/releases',
            target: '_blank'
        }
    ])
</script>
