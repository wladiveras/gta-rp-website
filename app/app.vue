<script setup lang="ts">
import favicon from '~/assets/images/favicon.png'

const seoStore = useSeoStore()

useSeoMeta({
    titleTemplate: (title) => {
        return title ? `${seoStore.title} • ${title}` : seoStore.titleCallback
    },
    author: seoStore.author,
    contentSecurityPolicy: {},
    keywords: seoStore.keywords,
    description: seoStore.description,
    ogUrl: seoStore.website,
    ogType: 'website',
    ogDescription: seoStore.description,
    ogImage: seoStore.image,
    twitterTitle: seoStore.title || seoStore.titleCallback,
    twitterDescription: seoStore.description,
    twitterImage: seoStore.image,
    twitterCard: 'summary_large_image'
})

useHead({
    meta: [
        { charset: 'utf-8' },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
        }
    ],
    link: [
        {
            rel: 'icon',
            type: 'image/png',
            href: favicon,
            crossorigin: 'anonymous'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
            crossorigin: 'anonymous'
        }
    ],
    htmlAttrs: {
        lang: 'en'
    }
})
</script>

<template>
    <UApp>
        <ClientOnly>
            <CheckPwa />
        </ClientOnly>

        <NuxtPwaManifest />
        <NuxtLoadingIndicator />
        <NuxtRouteAnnouncer />

        <UMain>
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
        </UMain>

        <!-- <UNotifications /> -->
    </UApp>
</template>

<style>
    @import './assets/css/main.css';
</style>
