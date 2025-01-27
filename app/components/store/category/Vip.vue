<template>
    <section
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        class="mt-[60px] w-full flex flex-row flex-nowrap items-center justify-center gap-8"
    >
        <section
            class="flex flex-col gap-4 font-thin justify-center items-center px-5"
        >
            <article class="flex flex-col gap-6">
                <section class="container mx-auto mt-10">
                    <div
                        class="flex flex-col md:flex-row gap-4 p-4 flex-wrap justify-center"
                    >
                        <StoreItemCard :items="items" />
                    </div>
                </section>
            </article>
        </section>
    </section>
</template>

<script lang="ts" setup>
    const itemsStore = useItemsStore()
    const { items } = storeToRefs(itemsStore)
</script>

<style></style>
