<template>
    <div class="mt-10">
        <h1
            class="text-8xl font-bold text-left mb-2 ml-5"
            data-aos="fade-right"
        >
            CONHEÇA OS PLANOS
        </h1>
        <h2
            class="font-extralight font-serif text-left mb-8 ml-6"
            data-aos="fade-right"
        >
            GARANTA ACESSO A BENEFÍCIOS EXCLUSIVOS DENTRO DO SERVIDOR
        </h2>
        <section>
            <div class="flex flex-wrap">
                <div
                    v-for="(plan, index) in plans"
                    :key="plan.name"
                    ref="itemRef"
                    data-aos="fade-up"
                    :data-aos-delay="(index + 1) * 100"
                    class="rounded-lg p-4 mb-4 mx-2 w-full sm:w-1/1 lg:w-1/4 relative z-20 border-2 border-cyan-400 bg-main flex flex-col"
                >
                    <div class="flex-grow">
                        <h2 class="text-2xl font-semibold text-primary-500">
                            {{ plan.name }}
                        </h2>
                        <p class="text-xl">R$ {{ plan.price }}</p>
                        <h2 class="mt-5 text-primary-500 text-xl">Recursos</h2>
                        <ul class="mt-2">
                            <li
                                v-for="feature in plan.features"
                                :key="feature"
                            >
                                {{ feature }}
                            </li>
                        </ul>
                    </div>
                    <button
                        class="w-full bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded mt-4 block"
                    >
                        COMPRAR
                    </button>
                </div>
            </div>
            <div
                data-aos="fade-left"
                class="absolute right-[-10px] top-[-4rem] z-10 hidden xl:block"
            >
                <NuxtImg
                    src="/images/hero-vip.png"
                    width="700px"
                />
            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
    const plans = [
        {
            name: 'VIP Prata',
            price: '50.00 (30 dias)',
            features: [
                'Acesso a tatuagens exclusivas',
                'Acesso a penteados exclusivos',
                'Acesso a roupas exclusivas',
                'Acesso ao Altaliza',
                '2 Slots no Mercado',
                '2 dias de tempo de expiração do Mercado',
                '25% de perda de mochila ao desmontar',
                'Aumento de 50kg no peso máximo da mochila',
                '9kg de peso extra',
                'Prioridade na fila: 30'
            ]
        },
        {
            name: 'VIP Ouro',
            price: '75.00 (30 dias)',
            features: [
                '2 Slots no guarda-roupa',
                '25% menos fome e sede',
                '5% de desconto na concessionária',
                '25% mais EXP em Boosting',
                'Acesso a tatuagens exclusivas',
                'Acesso a penteados exclusivos',
                'Acesso a roupas exclusivas',
                'Acesso ao Altaliza',
                '5 Slots no Mercado',
                '3 dias de tempo de expiração do Mercado',
                '15% de perda de mochila ao desmontar'
            ]
        },
        {
            name: 'VIP Diamante (30 dias)',
            price: '120.00',
            features: [
                'Prioridade em ingressos',
                '3 Slots no guarda-roupa',
                'Chance aumentada de contratos em Boosting',
                'Não perde itens na água',
                '1 slot extra em garagens',
                '2x XP em missões',
                '50% menos fome e sede',
                '10% de desconto no Altaliza',
                '10% de desconto na concessionária',
                '10% de desconto no IPVA',
                '10% de desconto no IPTU'
            ]
        }
    ]
</script>

<style></style>
