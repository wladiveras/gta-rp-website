<template>
    <section class="flex gap-10 flex-nowrap mt-[160px]">
        <section>
            <h1
                id="main-heading"
                data-aos="fade-right"
                class="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl flex items-center justify-center flex-wrap"
            >
                <span class="text-center max-w-[960px] text-effect-one">
                    {{ hero.title }}

                    <span
                        v-if="hero.subtitle"
                        class="decoration-primary-500 text-effect-one"
                    >
                        {{ hero.subtitle }}
                    </span>
                </span>
            </h1>

            <h2
                id="main-heading"
                class="text-5xl font-bold tracking-tight text-gray-900 dark:text-slate-500 sm:text-6xlp"
            >
                {{ hero.about }}
            </h2>

            <section
                data-aos="flip-up"
                class="max-w-[450px] m-auto mt-10"
            >
                <UButton
                    class="block w-full p-2 text-center text-effect-one text-2xl font-bold text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:opacity-100 duration-300"
                    @click="userStore.isConnected('connect')"
                >
                    Jogar agora
                </UButton>

                <section
                    data-aos="flip-left"
                    class="border-2 border-primary-400 rounded-md mt-5 flex gap-4 justify-center items-center px-4 text-3xl p-2 w-full"
                >
                    <UButton
                        v-if="config.public.media.twitter"
                        :to="config.public.media.twitter"
                        variant="link"
                        icon="line-md:twitter-filled"
                        class="transition ease-in-out delay-150 hover:-translate-y-1 hover:text-primary-400 hover:scale-110 duration-300 mr-6 cursor-pointer text-white"
                    />
                    <UButton
                        v-if="config.public.media.instagram"
                        :to="config.public.media.instagram"
                        variant="link"
                        icon="line-md:instagram"
                        class="transition ease-in-out delay-150 hover:-translate-y-1 hover:text-primary-400 hover:scale-110 duration-300 mr-6 cursor-pointer text-white"
                    />

                    <UButton
                        v-if="config.public.media.youtube"
                        :to="config.public.media.youtube"
                        variant="link"
                        icon="line-md:youtube-filled"
                        class="transition ease-in-out delay-150 hover:-translate-y-1 hover:text-primary-400 hover:scale-110 duration-300 mr-6 cursor-pointer text-white"
                    />
                    <UButton
                        v-if="config.public.media.discord"
                        :to="config.public.media.discord"
                        variant="link"
                        icon="line-md:discord-twotone"
                        class="transition ease-in-out delay-150 hover:-translate-y-1 hover:text-primary-400 hover:scale-110 duration-300 mr-6 cursor-pointer text-white"
                    />

                    <UButton
                        v-if="config.public.media.facebook"
                        :to="config.public.media.facebook"
                        variant="link"
                        icon="line-md:facebook"
                        class="transition ease-in-out delay-150 hover:-translate-y-1 hover:text-primary-400 hover:scale-110 duration-300 cursor-pointer text-white"
                    />
                </section>
            </section>
        </section>
    </section>
</template>

<script lang="ts" setup>
    import type { Hero } from '~/types'

    const config = useRuntimeConfig()
    const userStore = useUserStore()

    defineProps<{
        hero: Hero
    }>()
</script>

<style></style>
