<template>
    <section>
        <UTabs
            :items="categories"
            variant="link"
            class="gap-4 w-full"
            :orientation="horizontal ? 'horizontal' : 'vertical'"
            :ui="{
                trigger: 'flex-1 font-5xl'
            }"
        >
            <template #content="{ item }">
                <component :is="item.component" />
            </template>
        </UTabs>
    </section>
</template>

<script lang="ts" setup>
    import {
        StoreCategoryHome,
        StoreCategoryCatalog,
        StoreCategoryCars,
        StoreCategoryExclusiveCars,
        StoreCategoryArmored,
        StoreCategoryMotorcycles,
        StoreCategoryFactions,
        StoreCategoryItems,
        StoreCategoryBans
    } from '#components'

    const horizontal = ref(true)

    const categories = [
        {
            label: 'inicio',
            icon: 'line-md:home',
            component: StoreCategoryHome
        },
        {
            label: 'Catálogo',
            icon: 'line-md:clipboard-arrow',
            component: StoreCategoryCatalog
        },
        {
            label: 'Carros',
            icon: 'mdi:car-lifted-pickup',
            component: StoreCategoryCars
        },
        {
            label: 'Carros Exclusivos',
            icon: 'arcticons:pixel-car-racer',
            component: StoreCategoryExclusiveCars
        },
        {
            label: 'Blindados',
            icon: 'lets-icons:star-duotone',
            component: StoreCategoryArmored
        },
        {
            label: 'Motos',
            icon: 'material-symbols:motorcycle-sharp',
            component: StoreCategoryMotorcycles
        },
        {
            label: 'Facções/Organizações',
            icon: 'fluent-emoji-high-contrast:skull',
            component: StoreCategoryFactions
        },
        {
            label: 'Dinheiro/Armas',
            icon: 'ph:money-wavy',
            component: StoreCategoryItems
        },
        {
            label: 'Remover Punições',
            icon: 'lucide:shield-ban',
            component: StoreCategoryBans
        }
    ]
</script>

<style></style>
