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
                    icon="line-md:discord-twotone"
                    color="neutral"
                    variant="ghost"
                    to="https://www"
                    target="_blank"
                    aria-label="Discord"
                />
                <UButton
                    icon="line-md:twitter-filled"
                    color="neutral"
                    variant="ghost"
                    to="https://www"
                    target="_blank"
                    aria-label="X"
                />
                <UButton
                    icon="line-md:instagram"
                    color="neutral"
                    variant="ghost"
                    to="https://www"
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
            label: 'Link 1',
            to: '#'
        },
        {
            label: 'Link 2',
            to: '#ss'
        },
        {
            label: 'Link 3',
            to: '#'
        },
        {
            label: 'Link 4',
            to: '#',
            target: '_blank'
        }
    ]
</script>
