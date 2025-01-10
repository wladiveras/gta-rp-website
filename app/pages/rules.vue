<script setup lang="ts">
    const userStore = useUserStore()
    const userData = storeToRefs(userStore)
    definePageMeta({
        layout: 'default',
        auth: true
    })

    useSeoMeta({
        title: 'Regras do Servidor'
    })
</script>

<template>
    <section v-if="userData.isLoggedIn">
        <header
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            class="mt-[100px] w-full flex flex-row flex-nowrap items-center justify-center gap-8"
        >
            <div>Regras</div>
        </header>
    </section>
</template>
