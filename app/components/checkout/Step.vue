<script setup lang="ts">
const orderStore = useOrderStore()
const { steps } = storeToRefs(orderStore)

const icon = ref('line-md:arrow-small-right')
const label = ref('Continuar')

watch(
    () => steps.value.step,
    () => {
        const isLastStep = steps.value.step === steps.value.max
        icon.value = isLastStep
            ? 'line-md:check-all'
            : 'line-md:arrow-small-right'
        label.value = isLastStep ? 'Finalizar Pedido' : 'Continuar'
    }
)
</script>

<template>
    <div
        class="fixed bottom-[5rem] left-1/2 transform -translate-x-1/2 w-full max-w-md px-4"
    >
        <UCard
            class="backdrop-blur-sm bg-opacity-95"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
        >
            <div class="flex w-full gap-4">
                <UButton
                    v-if="steps.step >= 2"
                    color="primary"
                    variant="outline"
                    size="md"
                    class="flex-1 justify-center text-xl"
                    @click="orderStore.prevStep"
                >
                    <template #leading>
                        <UIcon name="line-md:arrow-small-left" />
                    </template>
                    Voltar
                </UButton>

                <UButton
                    color="primary"
                    variant="solid"
                    size="md"
                    class="flex-1 justify-center text-primary-950 text-xl"
                    :loading="steps.trigger"
                    :disabled="steps.trigger"
                    @click="orderStore.nextStep"
                >
                    <div class="flex items-center gap-2">
                        {{ label }}
                        <UIcon :name="icon" />
                    </div>
                </UButton>
            </div>
        </UCard>
    </div>
</template>

<style scoped>
    .backdrop-blur-sm {
        backdrop-filter: blur(8px);
    }
</style>
