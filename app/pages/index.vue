<template>
    <section>
        <br /><br /><br /><br /><br /><br />
        <div v-if="user">
            {{ user }}
        </div>
        <LazyHero />
        <LazyPackage />
        <LazyVip />
        <LazyTutorial />
        <LazyContact />
    </section>
</template>

<script setup lang="ts">
    const user = useSupabaseUser()

    definePageMeta({
        layout: 'default',
        auth: false
    })

    useSeoMeta({
        title: 'Melhor servidor de rp do brasil'
    })
</script>
