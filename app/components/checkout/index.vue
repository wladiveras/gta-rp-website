<template>
    <section
        id="checkout"
        data-aos="zoom-out-up"
        class="h-screen"
    >
        <section class="flex flex-row">
            <section class="basis-1/2 bg-amber-700 w-full">01</section>
            <USeparator
                orientation="vertical"
                class="h-48"
            />
            <section class="basis-1/2 bg-yellow-400">03</section>
        </section>
    </section>
</template>

<script lang="ts" setup>
    const orderStore = useOrderStore()
    const { steps } = orderStore

    onMounted(() => {
        orderStore.captureLead()
    })
</script>

<style>
    @media (min-width: 768px) {
        .flex-col.md\:flex-row {
            flex-direction: row;
        }
    }
</style>
