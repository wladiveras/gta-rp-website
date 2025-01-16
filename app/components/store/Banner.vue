<template>
    <UCarousel
        v-slot="{ item }"
        loop
        autoplay
        arrows
        dots
        :align="'center'"
        auto-height
        class-names
        :items="items"
        :ui="{
            container: 'h-screen',
            item: 'basis-1/1 gap-0 ps-0'
        }"
    >
        <img
            :src="item"
            class="w-full bg-cover ps-0 relative h-screen object-cover"
        />
    </UCarousel>
</template>

<script lang="ts" setup>
    const items = [
        'https://i.imgur.com/CrnQ2ef.jpeg',
        'https://i.imgur.com/qJ9gbeW.jpeg',
        'https://i.imgur.com/f369n3o.jpeg'
    ]
</script>

<style></style>
