<template>
    <div class="container mx-auto mt-10">
        <h1
            class="text-8xl font-bold text-center mb-2"
            data-aos="fade-right"
        >
            Starter Packs
        </h1>
        <h2
            class="font-extralight font-serif text-center mb-8"
            data-aos="fade-right"
        >
            O PONTA PÉ INICIAL QUE SUA HISTÓRIA MERECE!
        </h2>
        <div
            class="flex flex-col md:flex-row gap-4 p-4 flex-wrap justify-center"
        >
            <div
                v-for="(plan, index) in plans"
                :key="index"
                data-aos="fade-up"
                :data-aos-delay="(index + 1) * 100"
                class="rounded-lg p-6 flex flex-col w-full sm:w-80 md:w-64 max-w-full border-2 border-cyan-400 bg-main"
            >
                <div class="flex-grow flex flex-col items-center">
                    <h2 class="text-xl font-bold mb-4">{{ plan.name }}</h2>
                    <div class="flex items-center mb-4">
                        <span class="text-gray-600 text-lg font-bold">
                            R$ {{ plan.price }}
                        </span>
                        <span
                            v-if="plan.discount"
                            class="ml-2 text-xs text-gray-400 line-through"
                        >
                            R$ {{ plan.discount }}
                        </span>
                    </div>
                    <div class="pl-6 mb-5 w-full">
                        <h2 class="text-primary-500 text-xl">Recursos</h2>
                        <ul
                            v-for="feature in plan.features"
                            :key="feature"
                            class="flex relative text-left"
                        >
                            <li class="text-left relative w-full">
                                {{ feature }}
                            </li>
                        </ul>
                    </div>
                </div>
                <button
                    class="w-full bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded mt-auto cursor-pointer"
                    @click="userStore.isConnected('store')"
                >
                    ADQUIRIR
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const userStore = useUserStore()

    const plans = [
        {
            name: 'Ouro',
            price: 'R$ 135.00',
            discount: 'R$ 150.00',
            features: [
                'Doador Ouro (30 Dias)',
                '6.000 Diamantes',
                '5 Caixas CDA',
                'Bolso Pequeno para guardar seus itens (3kg / 3 slots)'
            ]
        },
        {
            name: 'Diamante',
            price: 'R$ 200.00',
            discount: 'R$ 250.00',
            features: [
                'Doador Diamante (30 Dias)',
                '12.000 Diamantes',
                '10 Caixas CDA',
                'Bolso Médio para guardar seus itens (5kg / 5 slots)'
            ]
        },
        {
            name: 'Platina',
            price: 'R$ 300.00',
            discount: 'R$ 350.00',
            features: [
                'Doador Platina (30 Dias)',
                '20.000 Diamantes',
                '15 Caixas CDA',
                'Bolso Grande para guardar seus itens (10kg / 10 slots)'
            ]
        }
    ]
</script>

<style></style>
