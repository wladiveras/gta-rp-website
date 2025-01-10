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
        '@nuxtjs/supabase',
        'nuxt-aos'
    ],

    $production: {
        routeRules: {
            '/**': { isr: true }
        }
    },

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
        public: {
            PROJECT_URL: process.env.NUXT_PUBLIC_PROJECT_URL,
            NUXT_UI_PRO_LICENSE: process.env.NUXT_PUBLIC_UI_PRO_LICENSE,
            DISCORD_SERVER_ID: process.env.NUXT_PUBLIC_DISCORD_SERVER_ID
        },
        publicRoutes: ['/', '/login', '/auth/**']
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

        prerender: {
            crawlLinks: true,
            routes: ['/']
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
            exclude: ['nuxt/app', 'punycode']
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

    pwa: {
        manifest: {
            name: 'Paris RP',
            short_name: 'Paris RP',
            description: 'Paris RP - A melhor cidade do brasil',
            theme_color: '#ffffff',
            icons: [
                {
                    src: '/images/paris-rp.png',
                    sizes: '64x64',
                    type: 'image/png'
                },
                {
                    src: '/images/paris-rp.png',
                    sizes: '512x512',
                    type: 'image/png'
                }
            ]
        },
        workbox: {
            navigateFallback: '/',
            globPatterns: ['**/*.{js,css,html,png,ico}'],
            runtimeCaching: [
                {
                    urlPattern: '/',
                    handler: 'NetworkFirst'
                }
            ]
        }
    },
    supabase: {
        redirectOptions: {
            login: '/',
            callback: '/callback',
            include: ['/profile'],
            exclude: ['/', '/callback']
        },
        cookieOptions: {
            maxAge: 60 * 60 * 8,
            sameSite: 'lax',
            secure: true
        }
    },

    uiPro: {
        license: process.env.NUXT_UI_PRO_LICENSE
    }
})
