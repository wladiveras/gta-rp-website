<template>
    <section>
        <LazyHero />
        <LazyPackage />
        <LazyVip />
        <LazyTutorial />
        <LazyContact />
    </section>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: 'default',
        auth: false
    })

    useSeoMeta({
        title: 'Melhor servidor de rp do brasil'
    })
</script>
