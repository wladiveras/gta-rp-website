// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
        '@nuxt/ui-pro',
        '@nuxt/image',
        '@nuxt/eslint',
        '@nuxthub/core',
        '@vite-pwa/nuxt',
        '@nuxt/test-utils/module',
        '@sidebase/nuxt-auth',
        'nuxt-aos'
    ],

    ssr: true,

    devtools: {
        enabled: true,
        timeline: {
            enabled: true
        }
    },

    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },

    css: ['~/assets/css/main.css'],

    colorMode: {
        preference: 'dark'
    },

    runtimeConfig: {
        authSecret: process.env.NUXT_AUTH_SECRET,
        public: {
            BASE_URL: process.env.NUXT_PUBLIC_BASE_URL || '',
            NUXT_UI_PRO_LICENSE: process.env.NUXT_UI_PRO_LICENSE || '',
            DISCORD_CLIENT_ID: process.env.NUXT_OAUTH_DISCORD_CLIENT_ID || '',
            OAUTH_KEY: process.env.NUXT_OAUTH_KEY || '',
            DISCORD_SERVER_ID: process.env.DISCORD_SERVER_ID || '',
            DISCORD_CLIENT_SECRET:
                process.env.NUXT_OAUTH_DISCORD_CLIENT_SECRET || '',
            AUTH_ORIGIN: process.env.NUXT_AUTH_ORIGIN || 'http://localhost:3000'
        },

        publicRoutes: ['/', '/login', '/auth/**']
    },

    routeRules: {
        '/**': {
            prerender: true
        }
    },

    future: {
        compatibilityVersion: 4
    },

    experimental: {
        payloadExtraction: true,
        treeshakeClientOnly: true,
        viewTransition: true,
        renderJsonPayloads: true
    },

    compatibilityDate: '2024-04-03',

    nitro: {
        compressPublicAssets: true,
        minify: true,
        timing: true,

        experimental: {
            tasks: true
        },

        cloudflare: {
            pages: {
                routes: {
                    exclude: ['/docs/*', '/blog/*']
                }
            }
        }
    },
    hub: {
        remote: false,
        ai: false,
        blob: true,
        database: true
    },

    vite: {
        build: {
            cssMinify: true
        },
        optimizeDeps: {
            include: ['vue', 'vue-router', '@vueuse/core'],
            exclude: ['nuxt/app']
        }
    },

    typescript: {
        strict: false
    },

    aos: {
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 120,
        delay: 0,
        duration: 400,
        easing: 'ease',
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom'
    },
    auth: {
        isEnabled: true,
        disableServerSideAuth: false,
        originEnvKey: 'AUTH_ORIGIN',
        baseURL: `${process.env.NUXT_AUTH_ORIGIN}`,
        provider: {
            type: 'authjs',
            trustHost: true,
            defaultProvider: 'discord',
            addDefaultCallbackUrl: true
        },
        sessionRefresh: {
            enablePeriodically: true,
            enableOnWindowFocus: true
        }
    },

    eslint: {
        config: {
            stylistic: {
                commaDangle: 'never',
                braceStyle: '1tbs'
            }
        }
    },

    image: {
        provider: 'ipx',
        format: ['webp', 'avif'],
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536
        },

        presets: {
            avatar: {
                modifiers: {
                    format: 'webp',
                    width: 80,
                    height: 80
                }
            }
        }
    },

    pwa: {},

    uiPro: {
        license: process.env.NUXT_UI_PRO_LICENSE
    }
})
