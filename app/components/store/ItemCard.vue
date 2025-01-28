<template>
    <div
        v-for="(item, index) in items"
        :key="index"
        data-aos="fade-up"
        :data-aos-delay="(Number(index) + 1) * 100"
        class="rounded-lg flex flex-col w-full sm:w-80 md:w-64 max-w-full border-2 border-cyan-400 bg-main"
    >
        <!-- Product Card -->
        <section class="product-card">
            <!-- Modal -->
            <UModal :title="'Detalhes do pacote'">
                <div class="product-help">
                    <UIcon name="i-lucide-help-circle" />
                </div>

                <template #body>
                    <div class="flex">
                        <div class="w-1/3">
                            <NuxtImg
                                :src="item.image"
                                class="max-h-[200px] object-cover rounded-md mb-5 zoom-sm"
                            />
                        </div>

                        <div class="relative w-2/3 ml-5">
                            <div class="product-header">
                                <h2 class="text-2xl font-bold">
                                    {{ item.name }}
                                </h2>
                                <p class="text-sm font-light">Por apenas</p>
                                <span
                                    class="text-2xl font-bold text-primary-500 mb-5"
                                >
                                    RS$ {{ formatPrice(item.price, true) }}
                                </span>
                            </div>

                            <div
                                class="bg-gray-900 block rounded-2xl w-full p-5 mb-15 mt-5"
                            >
                                <b>Inclui no pacote:</b>
                                <div
                                    v-for="(text, i) in item.description.split(
                                        '|'
                                    )"
                                    :key="i"
                                    class="description-item"
                                >
                                    <p class="text-sm">{{ text }}</p>
                                </div>
                            </div>

                            <div class="absolute bottom-0 w-full">
                                <button
                                    class="bg-primary-500 text-white rounded-md py-2 w-full"
                                    @click="addToCart(item)"
                                >
                                    Levar ao carrinho
                                </button>
                            </div>
                        </div>
                    </div>
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
                class="bg-primary-500 text-white rounded-md py-2 w-full"
                @click="addToCart(item)"
            >
                Levar ao carrinho
            </button>
        </section>
    </div>
</template>

<script lang="ts" setup>
    const orderStore = useOrderStore()
    const modal = useModal()

    const addToCart = (item: object) => {
        orderStore.addToCart(item)
        modal.close()
    }

    defineProps({
        items: {
            type: Object,
            required: true
        }
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

    .description-item {
        margin: 0.5rem 0;
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
