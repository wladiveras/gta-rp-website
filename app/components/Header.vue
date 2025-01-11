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
            v-for="item in itemsNavigation"
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
            <UButton
                v-if="!isLoggedIn"
                icon="i-lucide-log-in"
                color="neutral"
                variant="ghost"
                label="Entrar"
                size="xl"
                class="text-2xl"
                @click="userStore.authenticateWithDiscord()"
            />
            <section v-if="isLoggedIn">
                <UDropdownMenu
                    :items="dropdownItems"
                    :ui="{ content: 'w-48 ' }"
                >
                    <UChip
                        inset
                        class="mt-2 border-2 border-primary-500 rounded-full cursor-pointer"
                    >
                        <UAvatar
                            :src="avatar"
                            :alt="name"
                        />
                    </UChip>
                </UDropdownMenu>
            </section>
        </template>
        <template #content>
            <UNavigationMenu
                :items="itemsNavigation"
                size="xl"
                orientation="vertical"
            />
        </template>
    </UHeader>
</template>

<script lang="ts" setup>
    const route = useRoute()

    const userStore = useUserStore()

    const { isLoggedIn, name, avatar } = storeToRefs(userStore)

    const isActive = (hash: string) => {
        if (!hash) {
            return route.path === '/' && !route.hash
        }
        return route.hash === hash
    }

    const dropdownItems = ref([
        [
            {
                label: name,
                avatar: {
                    src: avatar || ''
                },
                type: 'label'
            }
        ],
        [
            {
                label: 'Perfil',
                icon: 'i-lucide-user',
                to: '/profile'
            },
            {
                label: 'Fatura',
                icon: 'i-lucide-credit-card'
            },
            {
                label: 'Configurações',
                icon: 'i-lucide-cog'
            }
        ],
        [
            {
                label: 'Loja',
                icon: 'i-lucide-users'
            }
        ],
        [
            {
                label: 'Suporte',
                icon: 'i-lucide-life-buoy',
                to: '#'
            },
            {
                label: 'API',
                icon: 'i-lucide-cloud',
                disabled: true
            }
        ],
        [
            {
                label: 'Sair',
                icon: 'i-lucide-log-out',
                async onSelect() {
                    await userStore.signOut()
                }
            }
        ]
    ])

    const itemsNavigation = computed(() => [
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
        },
        {
            label: 'Regras',
            href: '/rules',
            active: isActive('/rules')
        }
    ])
</script>
