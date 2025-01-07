<template>
    <section
        v-for="(item, index) in hero"
        :key="index"
        aria-labelledby="main-heading"
    >
        <AnimateElement
            animation="fadeInLeft"
            :duration="1200"
            :delay="1200"
            class="char-hero mt-[50px] absolute"
            :class="{ floating: isFloating }"
        />

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
    const isFloating = ref(false)

    onMounted(() => {
        setTimeout(() => {
            isFloating.value = true
        }, 1500)
    })
</script>

<style lang="css" scoped>
    @keyframes float {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-20px);
        }
    }

    .floating {
        animation: float 5s ease-in-out infinite;
    }

    .char-hero {
        background-position: 50% center;
        opacity: 1;
        width: 100%;
        height: 1195px;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        background-image: url('/images/hero-bg-char.png');
    }

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
