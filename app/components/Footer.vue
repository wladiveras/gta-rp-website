<template>
    <section>
        <USeparator
            icon="line-md:speedometer-loop"
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
                class="flex justify-center"
            />

            <template #right>
                <UButton
                    v-if="config.public.media.discord"
                    :to="config.public.media.discord"
                    icon="line-md:discord-twotone"
                    color="neutral"
                    variant="ghost"
                    target="_blank"
                    aria-label="Discord"
                />
                <UButton
                    v-if="config.public.media.twitter"
                    :to="config.public.media.twitter"
                    icon="line-md:twitter-filled"
                    color="neutral"
                    variant="ghost"
                    target="_blank"
                    aria-label="Twitter"
                />
                <UButton
                    v-if="config.public.media.instagram"
                    :to="config.public.media.instagram"
                    icon="line-md:instagram"
                    color="neutral"
                    variant="ghost"
                    target="_blank"
                    aria-label="instagram"
                />
            </template>
        </UFooter>
    </section>
</template>

<script lang="ts" setup>
    const config = useRuntimeConfig()

    const items = [
        {
            label: 'Link 1',
            to: '#',
            target: '_blank'
        },
        {
            label: 'Link 2',
            to: '#ss',
            target: '_blank'
        },
        {
            label: 'Link 3',
            to: '#',
            target: '_blank'
        },
        {
            label: 'Discord',
            to: config.public.media.discord,
            target: '_blank'
        }
    ]
</script>
