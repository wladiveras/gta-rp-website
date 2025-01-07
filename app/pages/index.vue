<template>
    <section>
        <LazyDefaultHero />
        <LazyPackage />
        <LazyVip />
    </section>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: 'default'
    })

    useSeoMeta({
        title: 'Melhor servidor de rp do brasil'
    })
</script>
