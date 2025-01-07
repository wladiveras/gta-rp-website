<template>
    <div class="container mx-auto mt-10">
        <h1
            class="text-8xl font-bold text-left mb-2"
            data-aos="fade-right"
        >
            CONHEÇA OS PLANOS
        </h1>
        <h2
            class="font-extralight font-serif text-left mb-8 ml-2"
            data-aos="fade-right"
        >
            GARANTA ACESSO A BENEFÍCIOS EXCLUSIVOS DENTRO DO SERVIDOR
        </h2>
        <div class="flex flex-wrap justify-center">
            <div
                v-for="(plan, index) in plans"
                :key="plan.name"
                data-aos="fade-up"
                :data-aos-delay="(index + 1) * 100"
                class="shadow-md rounded-lg p-4 mb-4 mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
                <h2 class="text-xl font-semibold text-gray-800">
                    {{ plan.name }}
                </h2>
                <p class="text-gray-600">
                    Valor: R$ {{ plan.price }} (30 dias)
                </p>
                <ul class="list-disc list-inside mt-2">
                    <li
                        v-for="feature in plan.features"
                        :key="feature"
                    >
                        {{ feature }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const plans = [
        {
            name: 'VIP Prata',
            price: '50.00',
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
            price: '75.00',
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
            name: 'VIP Diamante',
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
