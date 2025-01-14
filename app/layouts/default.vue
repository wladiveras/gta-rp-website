<template>
    <div>
        <div
            v-if="isLoading"
            class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm"
        >
            <div class="text-center">
                <NuxtImg
                    src="/images/logo.png"
                    width="auto"
                    height="100"
                    class="animate-bounce"
                />
            </div>
        </div>
        <Header />
        <div :class="{ 'opacity-0': isLoading }">
            <slot />
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
    const isLoading = ref(true)

    onMounted(async () => {
        const user = useSupabaseUser()
        const userStore = useUserStore()

        if (user.value) {
            await userStore.fetchUserProfile()
            await userStore.fetchDiscordGuilds()
        }

        setTimeout(() => {
            isLoading.value = false
        }, 1000)
    })

    const nuxtApp = useNuxtApp()

    nuxtApp.hook('page:start', () => {
        isLoading.value = true
    })

    nuxtApp.hook('page:finish', () => {
        setTimeout(() => {
            isLoading.value = false
        }, 500)
    })
</script>
