<template>
    <section v-if="isLoggedIn">
        <header
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            class="mt-[100px] w-full flex flex-row flex-nowrap items-center justify-center gap-8"
        >
            <div>
                <div>
                    <UAvatar
                        :src="avatar"
                        class="h-[10rem] w-[10rem] m-auto block mb-10"
                    />
                </div>
                <div class="flex-auto w-full">id: {{ id }}</div>

                <div class="flex-auto w-full">nome: {{ name }}</div>

                <div class="flex-auto w-full">email: {{ email }}</div>

                <div class="flex-auto w-full">
                    Servidor: {{ getCurrentGuild.name }}
                </div>

                <div class="flex-auto w-full"></div>
            </div>
        </header>
    </section>
</template>

<script setup lang="ts">
    const user = useUserStore()
    const { id, name, email, avatar, getCurrentGuild, isLoggedIn } =
        storeToRefs(user)

    definePageMeta({
        layout: 'default',
        auth: true
    })

    useSeoMeta({
        title: 'Perfil'
    })
</script>
