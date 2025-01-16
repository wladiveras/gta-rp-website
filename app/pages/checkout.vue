<script lang="ts" setup>
    definePageMeta({
        layout: 'checkout',
        auth: false
    })

    useSeoMeta({
        title: 'Carrinho de Doação'
    })
</script>

<template>
    <section
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        class="mt-[100px] w-full flex flex-row flex-nowrap items-center justify-center gap-8"
    >
        <Checkout />
    </section>
</template>

<style></style>
