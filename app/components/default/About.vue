<template>
    <section
        id="vip"
        class="md:container md:mx-auto md:mt-0"
    >
        <DefaultTitle
            class="mt-20 md:mt-0"
            :title="about.title"
            :subtitle="about.subtitle"
            icon="line-md:coffee-half-empty-filled-loop"
        />
        <AnimateElement
            animation="fadeIn"
            :duration="2000"
            :delay="300"
            repeat-once
        >
            <section
                class="flex flex-col gap-4 font-thin justify-center items-center px-5"
            >
                <article class="flex flex-col gap-6">
                    <p
                        v-for="(content, index) in about.content"
                        :key="index"
                        class="mt-10 mb-10 border-l-4 border-primary-500 pl-4 font-normal"
                    >
                        {{ content.text }}
                    </p>
                </article>
            </section>
        </AnimateElement>

        <Divider class="mt-20 md:mt-20" />
        xxxx

        <Divider class="mt-20 md:mt-20" />

        xxxx

        <Divider class="mt-20 md:mt-20" />

        xxxx
        <Divider class="mt-20 md:mt-20" />
        xxx
    </section>
</template>

<script lang="ts" setup>
    const landingStore = useLandingStore()
    const { about } = storeToRefs(landingStore)
</script>

<style scoped>
    technology-ul {
        list-style-type: none;

        padding: 0;

        margin: 0;
    }

    technology-list {
        margin-bottom: 10px;
    }

    technology-list::before {
        content: '▶';

        color: #49e79c;

        margin-right: 10px;
    }
</style>
