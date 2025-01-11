<script setup lang="ts">
    const userStore = useUserStore()
    const userData = storeToRefs(userStore)
    definePageMeta({
        layout: 'default',
        auth: true
    })

    useSeoMeta({
        title: `${userData?.name.value} - Perfil`
    })
</script>

<template>
    <section v-if="userData.isLoggedIn">
        <section
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            class="mt-[100px] w-full flex flex-row flex-nowrap items-center justify-center gap-8"
        >
            <div>
                <UAvatar
                    :src="userData?.avatar"
                    class="h-[10rem] w-[10rem] m-auto block mb-10"
                />

                <div class="user-info-grid">
                    <div>ID: {{ userData?.id }}</div>
                    <div>Nome: {{ userData?.name }}</div>
                    <div>Discord: {{ userData?.discord }}</div>
                    <div>Email: {{ userData?.email }}</div>
                    <div>Cidade: {{ userData.currentGuild?.value?.name }}</div>
                    <div>
                        Id da Cidade: {{ userData.currentGuild?.value?.id }}
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>
