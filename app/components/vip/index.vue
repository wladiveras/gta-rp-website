<template>
    <section
        id="vip"
        data-aos="zoom-out-up"
        class="md:container md:mx-auto md:mt-0"
    >
        <section class="flex flex-col gap-4 font-thin px-5">
            <article class="flex flex-col gap-6">
                <VipItems />
            </article>
        </section>
    </section>
</template>

<script lang="ts" setup></script>

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
