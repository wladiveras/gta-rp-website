<template>
    <section
        v-for="(item, index) in hero"
        :key="index"
        aria-labelledby="main-heading"
    >
        <AnimateElement
            animation="fadeInLeft"
            :duration="1000"
            :delay="1000"
            repeat-once
            class="flex-col md:flex-row gap-8 items-center justify-center main-hero h-screen flex"
        >
            <section
                class="w-full container px-4 sm:px-6 lg:px-8 m-auto flex justify-center items-center"
            >
                <DefaultHeroTitle :hero="item" />
            </section>
        </AnimateElement>
    </section>
</template>

<script lang="ts" setup>
    const landingStore = useLandingStore()
    const { hero } = storeToRefs(landingStore)
</script>

<style lang="css" scoped>
    .main-hero {
        background-position: 50% center;
        opacity: 1;
        width: 100%;
        height: 1195px;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        background-image: url('/images/hero-bg.png');
    }
</style>
