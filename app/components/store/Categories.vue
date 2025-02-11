<template>
    <section
        class="max-w-full gap-4 text-xl flex items-center space-x-6 cursor-pointer"
    >
        <template
            v-for="menu in menuItems"
            :key="menu.label"
        >
            <UDropdownMenu
                v-if="menu.items"
                :items="menu.items"
                :ui="{
                    content:
                        'w-48 bg-[var(--ui-bg)]/75 backdrop-blur top-4 relative',
                    item: 'text-xl'
                }"
            >
                <span class="hover:text-primary-500">{{ menu.label }}</span>
            </UDropdownMenu>

            <span
                v-else
                class="hover:text-primary-500"
                @click="changeCategory(menu.category)"
            >
                {{ menu.label }}
            </span>
        </template>
    </section>
</template>

<script lang="ts" setup>
const { changeCategory } = useStoreCategory()

const menuItems = [
    {
        label: 'Inicio',
        category: 'home'
    },
    {
        label: 'Doadores',
        category: 'vip'
    },
    {
        label: 'Carros',
        items: [
            [
                {
                    label: 'Carros simples',
                    icon: 'tabler:car',
                    category: 'car',
                    onSelect: () => {
                        changeCategory('car')
                    }
                },
                {
                    label: 'Carros luxo',
                    icon: 'game-icons:race-car',
                    category: 'carLuxury',
                    onSelect: () => {
                        changeCategory('carLuxury')
                    }
                },
                {
                    label: 'Carros hyper',
                    icon: 'game-icons:f1-car',
                    category: 'carHyper',
                    onSelect: () => {
                        changeCategory('carHyper')
                    }
                },
                {
                    label: 'Carros exclusivos',
                    icon: 'arcticons:racing-car',
                    category: 'carExclusive',
                    onSelect: () => {
                        changeCategory('carExclusive')
                    }
                },
                {
                    label: 'Carros blindados',
                    icon: 'mdi:car-sports',
                    category: 'carTank',
                    onSelect: () => {
                        changeCategory('carTank')
                    }
                },
                {
                    label: 'Carros de carga',
                    icon: 'mdi:car-lifted-pickup',
                    category: 'carCargo',
                    onSelect: () => {
                        changeCategory('carCargo')
                    }
                }
            ]
        ]
    },
    {
        label: 'Motos',
        category: 'motorcycles'
    },
    {
        label: 'Aviões',
        category: 'planes'
    },
    {
        label: 'Helicópteros',
        category: 'helicopters'
    },
    {
        label: 'Mansões',
        category: 'mansions'
    }
]
</script>

<style scoped></style>
