<template>
    <UHeader class="fixed w-full">
        <template #title>
            <NuxtImg
                src="/images/logo.png"
                width="auto"
                height="40"
                class="max-h-[40px]"
            />
        </template>

        <h1 class="text-2xl">Etapa {{ steps.step }} de {{ steps.max }}</h1>
        <template #right>
            <UButton
                class="text-primary-500 text-2xl"
                variant="link"
                label="Voltar"
                icon="line-md:arrow-left"
                @click="router.back()"
            />
        </template>
    </UHeader>
</template>

<script lang="ts" setup>
    const orderStore = useOrderStore()
    const { steps } = storeToRefs(orderStore)
    const router = useRouter()
</script>
