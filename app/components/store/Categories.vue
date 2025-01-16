<template>
    <section
        class="max-w-full gap-4 text-xl flex items-center space-x-6 cursor-pointer"
    >
        <span class="hover:text-primary-500">Doadores</span>

        <UDropdownMenu
            :items="cars"
            :ui="{
                content:
                    'w-48 bg-[var(--ui-bg)]/75 backdrop-blur top-3 relative',
                item: 'text-xl'
            }"
        >
            <span class="hover:text-primary-500">Carros</span>
        </UDropdownMenu>
        <span class="hover:text-primary-500">Motos</span>
        <span class="hover:text-primary-500">Aviões</span>
        <span class="hover:text-primary-500">Helicópteros</span>
        <span class="hover:text-primary-500">Mansões</span>
        <span class="hover:text-primary-500">Facções</span>
        <span class="hover:text-primary-500">Extras</span>
    </section>
</template>

<script lang="ts" setup>
    import {
        StoreCategoryHome,
        StoreCategoryCars,
        StoreCategoryExclusiveCars,
        StoreCategoryArmored,
        StoreCategoryMotorcycles,
        StoreCategoryFactions,
        StoreCategoryItems,
        StoreCategoryBans
    } from '#components'

    const cars = [
        [
            {
                label: 'Carros simples',
                icon: 'i-lucide-eye'
            },
            {
                label: 'Carros luxo',
                icon: 'i-lucide-copy'
            },
            {
                label: 'Carros hyper',
                icon: 'i-lucide-pencil'
            },
            {
                label: 'Carros exclusivos',
                icon: 'i-lucide-pencil'
            },
            {
                label: 'Carros blindados',
                icon: 'i-lucide-pencil'
            },
            {
                label: 'Carros de carga',
                icon: 'i-lucide-pencil'
            }
        ]
    ]
</script>

<style></style>
