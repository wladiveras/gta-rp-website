<template>
    <section>
        <component :is="dynamicComponent" />
    </section>
</template>

<script lang="ts" setup>
const { currentCategory } = useStoreCategory()

const componentMap = {
    home: resolveComponent('StoreBanner'),
    vip: resolveComponent('StoreCategoryVip'),
    car: resolveComponent('StoreCategoryVip'),
    carLuxury: resolveComponent('StoreCategoryVip'),
    carHyper: resolveComponent('StoreCategoryVip'),
    carExclusive: resolveComponent('StoreCategoryVip'),
    carTank: resolveComponent('StoreCategoryVip'),
    carCargo: resolveComponent('StoreCategoryVip'),
    motorcycles: resolveComponent('StoreCategoryVip'),
    planes: resolveComponent('StoreCategoryVip'),
    helicopters: resolveComponent('StoreCategoryVip'),
    mansions: resolveComponent('StoreCategoryVip')
}

const dynamicComponent = computed(() => {
    return componentMap[currentCategory.value] || componentMap.home
})
</script>
