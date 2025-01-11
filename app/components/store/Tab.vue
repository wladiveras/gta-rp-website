<template>
    <UTabs
        v-model="category"
        :items="categories"
        variant="link"
        class="gap-4 w-full"
        :orientation="horizontal ? 'horizontal' : 'vertical'"
        :ui="{
            trigger: 'flex-1 font-5xl'
        }"
    />
</template>

<script lang="ts" setup>
    const category = ref('')
    const horizontal = ref(true)

    watch(
        () => category.value,
        () => {
            console.log(category.value)
        }
    )

    const categories = [
        {
            label: 'inicio',
            icon: 'line-md:home'
        },
        {
            label: 'Catálogo',
            icon: 'line-md:clipboard-arrow',
            slot: 'category'
        },
        {
            label: 'Carros',
            icon: 'mdi:car-lifted-pickup',
            slot: 'cars'
        },
        {
            label: 'Carros Exclusivos',
            icon: 'arcticons:pixel-car-racer',
            slot: 'exclusive'
        },
        {
            label: 'Blindados',
            icon: 'lets-icons:star-duotone',
            slot: 'armored'
        },
        {
            label: 'Motos',
            icon: 'material-symbols:motorcycle-sharp',
            slot: 'motorcycles'
        },
        {
            label: 'Facções/Organizações',
            icon: 'fluent-emoji-high-contrast:skull',
            slot: 'factions'
        },
        {
            label: 'Dinheiro/Armas',
            icon: 'ph:money-wavy',
            slot: 'items'
        },
        {
            label: 'Remover Punições',
            icon: 'lucide:shield-ban',
            slot: 'bans'
        }
    ]
</script>

<style></style>
