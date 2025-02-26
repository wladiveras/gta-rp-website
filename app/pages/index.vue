<script setup lang="ts">
definePageMeta({
    layout: 'default',
    auth: false
})

useSeoMeta({
    title: 'Melhor servidor de rp do brasil'
})
</script>

<template>
    <section>
        <!-- <LazyGlobal /> -->
        <LazyHomeHero />
        <LazyHomePackage />
        <LazyHomeVip />
        <LazyHomeTutorial />
        <LazyHomeContact />
    </section>
</template>
