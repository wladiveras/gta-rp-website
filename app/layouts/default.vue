<template>
    <div>
        <!-- Preloader -->
        <div
            v-if="isLoading"
            class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm"
        >
            <div class="text-center">
                <div
                    class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-500 mb-4"
                ></div>
                <p class="text-white text-xl">Carregando...</p>
            </div>
        </div>

        <!-- Page Content -->
        <div :class="{ 'opacity-0': isLoading }">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
    const isLoading = ref(true)

    onMounted(() => {
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
