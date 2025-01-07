<template>
    <section>
        <LazyDefaultHero />
        <Divider class="mt-20 md:mt-10" />
        <LazyDefaultAbout />
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
