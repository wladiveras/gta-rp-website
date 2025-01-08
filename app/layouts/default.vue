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

        <div :class="{ 'opacity-0': isLoading }">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
    const isLoading = ref(true)

    const user = useUserStore()

    onMounted(() => {
        user.setAuth()

        setTimeout(() => {
            isLoading.value = false
        }, 1000)
    })

    // Global navigation hook for Nuxt
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
