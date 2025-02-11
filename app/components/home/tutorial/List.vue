<template>
    <section
        data-aos="flip-down"
        class="mt-10"
    >
        <h1
            class="text-6xl font-bold text-left mb-2 mt-10"
            data-aos="fade-right"
        >
            Como jogar
        </h1>
        <h2
            class="font-extralight font-serif text-left mb-8 ml-1"
            data-aos="fade-right"
        ></h2>
        <div class="container mx-auto px-4">
            <div class="container mx-auto px-4">
                <section class="flex flex-col lg:flex-row gap-8">
                    <section class="flex-1 flex flex-col gap-4">
                        <p class="w-full p-4 border border-primary-500 rounded">
                            Possuir a Allowlist da cidade de Paris (
                            <a
                                class="text-primary-500"
                                target="_blank"
                                :href="config.public.media.discord"
                            >
                                clique aqui
                            </a>
                            para saber como obter a Allowlist).
                        </p>
                        <p class="w-full p-4 border border-primary-500 rounded">
                            Ter uma cópia digital original do jogo GTA V (pela
                            Steam, Epic ou Rockstar Launcher).
                        </p>
                        <p class="w-full p-4 border border-primary-500 rounded">
                            Ter o FiveM instalado (
                            <a
                                class="text-primary-500"
                                target="_blank"
                                href="https://fivem.net"
                            >
                                clique aqui
                            </a>
                            para acessar o website).
                        </p>
                    </section>

                    <section class="flex-1 flex justify-center items-start">
                        <div
                            class="w-full max-w-[560px] aspect-video mt-1 h-full"
                        >
                            <iframe
                                class="w-full border-primary-500 border-2 rounded h-full"
                                :src="config.public.media.video"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig()
</script>

<style></style>
