<script setup lang="ts">
    const config = useRuntimeConfig()
    const userStore = useUserStore()
</script>

<template>
    <UModal title="Entrar no Discord">
        <template #body>
            <UIcon
                name="line-md:discord"
                class="animate-bounce text-4xl m-auto block text-primary-500 hover:text-primary-700"
            />
            <p class="text-center text-white text-xl">
                Olá tudo bem? Antes de tudo, primeiro, entre no nosso Discord
                clicando no botão abaixo, caso você já esteja no Discord, faça
                login no seu perfil clicando em logar.
            </p>
        </template>

        <template #footer>
            <UButton
                color="primary"
                label="Entrar no Discord"
                class="block w-full text-xl text-white text-center"
                :to="config.public.media.discord"
            />
            <UButton
                variant="soft"
                color="primary"
                label="Logar"
                size="xl"
                class="text-2xl block w-full"
                @click="userStore.authenticateWithDiscord()"
            />
        </template>
    </UModal>
</template>
