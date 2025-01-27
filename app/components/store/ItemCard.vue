<template>
    <div
        v-for="(item, index) in items"
        :key="index"
        data-aos="fade-up"
        :data-aos-delay="(Number(index) + 1) * 100"
        class="rounded-lg flex flex-col w-full sm:w-80 md:w-64 max-w-full border-2 border-cyan-400 bg-main"
    >
        <section>
            <UModal :title="item.name">
                <div class="product-help">
                    <UIcon name="i-lucide-help-circle" />
                </div>

                <template #body>
                    <NuxtImg
                        :src="item.image"
                        class="w-full max-h-[200px] object-cover rounded-md mb-5"
                    />
                    <span>{{ item.description }}</span>
                </template>
            </UModal>

            <NuxtImg
                :src="item.image"
                class="w-full object-cover rounded-md"
            />
            <section class="text-left my-1 px-2">
                <h3 class="text-xl font-bold truncate">{{ item.name }}</h3>
                <p class="text-xl font-bold text-primary-500 truncate">
                    {{ formatPrice(item.price, true) }}
                </p>
            </section>
        </section>
        <section class="m-2">
            <button
                class="w-full bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded mt-auto cursor-pointer"
                @click="orderStore.addToCart(item)"
            >
                Levar ao carrinho
            </button>
        </section>
    </div>
</template>

<script lang="ts" setup>
    const orderStore = useOrderStore()

    defineProps({
        items: Object
    })
</script>

<style>
    .product-help {
        position: absolute;
        top: 5px;
        right: 5px;
        color: var(--text-primary);
        background-color: var(--ui-bg);
        border-radius: 50%;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    :host .ionicon {
        stroke: currentcolor;
    }
    .icon-inner,
    .ionicon,
    svg {
        display: block;
        height: 100%;
        width: 100%;
    }
</style>
