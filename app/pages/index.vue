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
    const { data: session } = useAuth()

    onMounted(async () => {
        if (!session) return
        const user = useUserStore()
        await user.setAuth()
    })

    definePageMeta({
        layout: 'default',
        auth: false
    })

    useSeoMeta({
        title: 'Melhor servidor de rp do brasil'
    })
</script>
