<template>
    <section>
        <header
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            class="mt-[100px] w-full flex flex-row items-center justify-center gap-8"
        >
            <div class="flex items-center">
                <UAvatar size="3xl" />
            </div>
            <div class="flex flex-col gap-2">
                <div class="text-2xl text-primary-500">
                    <UIcon
                        name="tdesign:user-marked"
                        class="top-1 relative"
                    />
                    | 32549
                </div>
                <div>
                    <UIcon
                        name="ic:outline-diamond"
                        class="top-1 relative"
                    />
                    Vip Diamante
                </div>
                <div>
                    <UIcon
                        name="solar:ranking-broken"
                        class="top-1 relative"
                    />
                    Rank: #4
                </div>
            </div>
            <div v-if="user">
                <div class="guilds-list">
                    <h3>Your Discord Servers</h3>
                    {{ user }}
                </div>
            </div>
        </header>
    </section>
</template>

<script setup lang="ts">
    const user = useUserStore()

    definePageMeta({
        layout: 'default',
        auth: true
    })

    useSeoMeta({
        title: 'Perfil'
    })
</script>
