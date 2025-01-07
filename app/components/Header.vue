<template>
    <UHeader class="fixed w-full">
        <template #title>
            <div>
                <NuxtImg
                    src="/images/logo.png"
                    width="auto"
                    height="40"
                    class="max-h-[40px]"
                />
            </div>
        </template>

        <section
            v-for="item in items"
            :key="item.label"
            class="inline-block mx-2"
        >
            <NuxtLink
                v-if="item.to"
                :to="item.to"
                class="text-xl hover:text-primary-900"
                :class="{ 'text-primary-500 text-3xl font-bold': item.active }"
            >
                {{ item.label }}
            </NuxtLink>
            <a
                v-else
                :href="item.href"
                class="text-xl hover:text-primary-900 border-l-2 border-primary-500 pl-4"
                :class="{ 'text-primary-500  font-bold': item.active }"
            >
                {{ item.label }}
            </a>
        </section>

        <template #right>
            <UTooltip
                text="Entrar"
                :kbds="['meta', 'L']"
            >
                <UButton
                    color="neutral"
                    variant="ghost"
                    label="Entrar"
                    size="xl"
                    to="/login"
                    icon="line-md:discord-twotone"
                    aria-label="Login"
                    class="text-2xl"
                />
            </UTooltip>
        </template>
        <template #content>
            <UNavigationMenu
                :items="items"
                size="xl"
                orientation="vertical"
            />
        </template>
    </UHeader>
</template>

<script lang="ts" setup>
    const route = useRoute()

    onMounted(() => {
        console.log(route.path)
    })

    const isActive = (hash: string) => {
        if (!hash) {
            return route.path === '/' && !route.hash
        }
        return route.hash === hash
    }

    const items = computed(() => [
        {
            label: 'Inicio',
            to: '/',
            active: isActive('')
        },
        {
            label: 'Pacotes',
            href: '/#package',
            active: isActive('#package')
        },
        {
            label: 'VIP',
            href: '/#vip',
            active: isActive('#vip')
        },
        {
            label: 'Como jogar',
            href: '/#tutorial',
            active: isActive('#tutorial')
        },
        {
            label: 'Contato',
            href: '/#contact',
            active: isActive('#contact')
        }
    ])
</script>
