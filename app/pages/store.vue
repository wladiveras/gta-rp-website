<script lang="ts" setup>
    definePageMeta({
        layout: 'store',
        auth: false
    })

    useSeoMeta({
        title: 'Saia na frente com nossos itens especiais!'
    })
</script>

<template>
    <section
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        class="mt-[100px] w-full flex flex-col flex-nowrap items-center justify-center gap-8"
    >
        <LazyStoreCategories
            class="flex flex-col w-full relative top-[-60px]"
        />
    </section>
</template>

<style></style>
