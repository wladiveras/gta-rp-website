export default defineAppConfig({
    ui: {
        colors: {
            primary: 'cyan',
            neutral: 'slate'
        },
        theme: {
            transitions: 'out-in',
            colors: [
                'primary',
                'secondary',
                'tertiary',
                'info',
                'success',
                'warning',
                'error'
            ]
        },
        formField: {
            slots: {
                root: '',
                wrapper: '',
                labelWrapper:
                    'flex content-center items-center justify-between',
                label: 'block font-medium text-[var(--ui-text)]',
                container: 'mt-1 relative',
                description: 'text-[var(--ui-text-muted)]',
                error: 'mt-2 text-[var(--ui-error)]',
                hint: 'text-[var(--ui-text-muted)]',
                help: 'mt-2 text-[var(--ui-text-muted)]'
            },
            variants: {
                size: {
                    xs: {
                        root: 'text-xs'
                    },
                    sm: {
                        root: 'text-xs'
                    },
                    md: {
                        root: 'text-sm'
                    },
                    lg: {
                        root: 'text-sm'
                    },
                    xl: {
                        root: 'text-base'
                    }
                }
            },
            defaultVariants: {
                size: 'md'
            }
        },
        header: {
            slots: {
                root: 'bg-[var(--ui-bg)]/75 backdrop-blur border-b border-[var(--ui-border)] sticky top-0 z-50',
                container:
                    'flex items-center justify-between gap-3 h-[var(--ui-header-height)]',
                left: 'lg:flex-1 flex items-center gap-1.5',
                center: 'hidden lg:flex',
                right: 'flex items-center justify-end lg:flex-1 gap-1.5',
                title: 'shrink-0 font-bold text-xl text-[var(--ui-text-highlighted)] flex items-end gap-1.5',
                toggle: 'lg:hidden',
                content: 'lg:hidden',
                overlay: 'lg:hidden',
                header: '',
                body: 'p-4 sm:p-6 overflow-y-auto'
            },
            variants: {
                toggleSide: {
                    left: {
                        toggle: '-ms-1.5'
                    },
                    right: {
                        toggle: '-me-1.5'
                    }
                }
            }
        },
        carousel: {
            slots: {
                root: 'relative focus:outline-none',
                viewport: 'overflow-hidden',
                container: 'flex items-start',
                item: 'min-w-0 shrink-0 basis-full',
                controls: '',
                arrows: '',
                prev: 'absolute rounded-full',
                next: 'absolute rounded-full',
                dots: 'absolute inset-x-0 bottom-10 flex flex-wrap items-center justify-center gap-3',
                dot: 'cursor-pointer size-3 bg-[var(--ui-border-accented)] rounded-full'
            },
            variants: {
                orientation: {
                    vertical: {
                        container: 'flex-col -mt-4',
                        item: 'pt-4',
                        prev: '-top-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90',
                        next: '-bottom-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90'
                    },
                    horizontal: {
                        container: 'flex-row -ms-4',
                        item: 'ps-4',
                        prev: '-start-12 top-1/2 -translate-y-1/2',
                        next: '-end-12 top-1/2 -translate-y-1/2'
                    }
                },
                active: {
                    true: {
                        dot: 'bg-[var(--ui-border-inverted)]'
                    }
                }
            }
        },
        button: {
            slots: {
                label: '',
                leadingIcon: '',
                leadingAvatar: '',
                leadingAvatarSize: '',
                trailingIcon: ''
            }
        },
        input: {
            default: {
                size: 'md'
            }
        },
        card: {
            rounded: 'rounded-xl'
        },
        footer: {
            top: {
                wrapper: 'border-t border-gray-200 dark:border-gray-800',
                container: 'py-8 lg:py-16'
            },
            bottom: {
                wrapper: 'border-t border-gray-200 dark:border-gray-800'
            }
        },
        page: {
            hero: {
                wrapper: 'lg:py-24'
            }
        },
        container: {
            base: 'max-w-full mx-auto px-2 py-0'
        }
    }
})
