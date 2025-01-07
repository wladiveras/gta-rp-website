<template>
    <section
        id="tutorial"
        class="md:container md:mx-auto md:mt-0 z-10 relative"
    >
        <section class="flex flex-col gap-4 font-thin px-5">
            <TutorialList />
        </section>

        <Divider class="mt-20 md:mt-20" />
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
