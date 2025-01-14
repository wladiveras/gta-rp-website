<template>
    <section>
        <UCarousel
            v-slot="{ item }"
            loop
            dots
            arrows
            auto-scroll
            :items="items"
            :ui="{ item: 'basis-1/1 gap-0' }"
        >
            <img
                :src="item"
                class="rounded-lg h-screen w-full bg-cover ps-0"
            />
        </UCarousel>
    </section>
</template>

<script lang="ts" setup>
    const items = [
        'https://i.imgur.com/CrnQ2ef.jpeg',
        'https://i.imgur.com/qJ9gbeW.jpeg',
        'https://i.imgur.com/f369n3o.jpeg'
    ]
</script>

<style></style>
