<template>
    <section class="flex gap-10 flex-nowrap mt-[530px]">
        <section>
            <h1
                id="main-heading"
                data-aos="fade-right"
                class="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl flex items-center justify-center flex-wrap"
            >
                <span class="text-center max-w-[960px]">
                    {{ hero.title }}

                    <span
                        v-if="hero.subtitle"
                        class="decoration-primary-500"
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
                    class="block w-full p-2 text-2xl font-bold text-black cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:opacity-100 duration-300"
                >
                    Jogar agora
                </UButton>

                <section
                    data-aos="flip-left"
                    class="border-2 border-primary-400 rounded-md mt-5 flex gap-4 justify-center items-center px-4 text-3xl p-2 w-full"
                >
                    <UIcon
                        name="line-md:twitter-filled"
                        class="transition ease-in-out delay-150 hover:-translate-y-1 hover:text-primary-400 hover:scale-110 duration-300 mr-6 cursor-pointer"
                    />
                    <UIcon
                        name="line-md:instagram"
                        class="transition ease-in-out delay-150 hover:-translate-y-1 hover:text-primary-400 hover:scale-110 duration-300 mr-6 cursor-pointer"
                    />

                    <UIcon
                        name="line-md:youtube-filled"
                        class="transition ease-in-out delay-150 hover:-translate-y-1 hover:text-primary-400 hover:scale-110 duration-300 mr-6 cursor-pointer"
                    />
                    <UIcon
                        name="line-md:discord-twotone"
                        class="transition ease-in-out delay-150 hover:-translate-y-1 hover:text-primary-400 hover:scale-110 duration-300 mr-6 cursor-pointer"
                    />

                    <UIcon
                        name="line-md:facebook"
                        class="transition ease-in-out delay-150 hover:-translate-y-1 hover:text-primary-400 hover:scale-110 duration-300 cursor-pointer"
                    />
                </section>
            </section>
        </section>
    </section>
</template>

<script lang="ts" setup>
    import type { Hero } from '~/types'

    defineProps<{
        hero: Hero
    }>()
</script>

<style></style>
