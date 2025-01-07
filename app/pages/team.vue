<template>
    <section>
        <LazyDefaultHero />
        <LazyDefaultAbout />
    </section>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: 'default'
    })

    useSeoMeta({
        title: 'Desenvolvedor Fullstack'
    })
</script>
