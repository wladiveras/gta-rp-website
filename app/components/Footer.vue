<template>
    <section>
        <USeparator
            icon="i-simple-icons-nuxtdotjs"
            type="dashed"
            class="h-px mt-[10rem]"
        />

        <UFooter>
            <template #left>
                <p class="text-(--ui-text-muted) text-sm">
                    Copyright © {{ new Date().getFullYear() }}
                </p>
            </template>

            <UNavigationMenu
                :items="items"
                variant="link"
            />

            <template #right>
                <UButton
                    icon="i-simple-icons-discord"
                    color="neutral"
                    variant="ghost"
                    to="https://chat.nuxt.dev"
                    target="_blank"
                    aria-label="Discord"
                />
                <UButton
                    icon="i-simple-icons-x"
                    color="neutral"
                    variant="ghost"
                    to="https://x.com/nuxt_js"
                    target="_blank"
                    aria-label="X"
                />
                <UButton
                    icon="i-simple-icons-github"
                    color="neutral"
                    variant="ghost"
                    to="https://github.com/nuxt/nuxt"
                    target="_blank"
                    aria-label="GitHub"
                />
            </template>
        </UFooter>
    </section>
</template>

<script lang="ts" setup>
    const items = [
        {
            label: 'Figma Kit',
            to: 'https://www.figma.com/community/file/1288455405058138934',
            target: '_blank'
        },
        {
            label: 'Playground',
            to: 'https://stackblitz.com/edit/nuxt-ui',
            target: '_blank'
        },
        {
            label: 'Roadmap',
            to: '/roadmap'
        },
        {
            label: 'Releases',
            to: 'https://github.com/nuxt/ui/releases',
            target: '_blank'
        }
    ]
</script>
