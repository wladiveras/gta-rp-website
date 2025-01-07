<script setup lang="ts">
    import type { NuxtError } from '#app'

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const props = defineProps<{
        error: NuxtError
    }>()

    useHead({
        htmlAttrs: {
            lang: 'en'
        }
    })

    useSeoMeta({
        title: 'Pagina não encontrada.',
        description:
            'A pagina que você está procurando não existe, ou foi movida para outro endereço.'
    })
</script>

<template>
    <UApp>
        <Header />

        <UError
            redirect="/"
            :clear="{
                color: 'primary',
                size: 'xl',
                icon: 'i-lucide-arrow-left',

                label: 'Voltar',
                variant: 'solid'
            }"
            :error="{
                statusCode: 404,
                statusMessage: 'Pagina não encontrada.',
                message:
                    'A pagina que você está procurando não existe, ou foi movida para outro endereço.'
            }"
        />

        <Footer />
    </UApp>
</template>
