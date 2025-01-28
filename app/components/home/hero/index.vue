<template>
    <section
        v-for="(item, index) in hero"
        :key="index"
        aria-labelledby="main-heading"
    >
        <span
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            class="char-hero mt-[50px] absolute"
            :class="{ floating: isFloating }"
        />

        <section
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            class="flex-col md:flex-row gap-8 items-center justify-center main-hero h-screen flex relative"
        >
            <section
                class="w-full container px-4 sm:px-6 lg:px-8 m-auto flex justify-center items-center"
            >
                <HomeHeroTitle :hero="item" />
            </section>
        </section>
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
