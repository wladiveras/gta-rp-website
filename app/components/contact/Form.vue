<template>
    <section class="mt-10 max-w-[900px] m-auto w-full">
        <h1
            class="text-8xl font-bold text-center mb-2"
            data-aos="fade-right"
        >
            Entre em Contato
        </h1>

        <div class="container mx-auto px-4">
            <UForm
                :schema="schema"
                :state="state"
                class="space-y-4 flex flex-col"
                @submit="onSubmit"
            >
                <section class="w-full mb-4">
                    <UFormField
                        label="Descrição"
                        name="description"
                    >
                        <UTextarea
                            v-model="state.description"
                            icon="mdi:tag-text-outline"
                            size="xl"
                            class="w-full"
                            placeholder="Fale mais sobre o assunto..."
                        />
                    </UFormField>
                </section>

                <section class="flex flex-col md:flex-row gap-4">
                    <UFormField
                        label="Nome"
                        name="name"
                        class="w-full md:w-1/2"
                    >
                        <UInput
                            v-model="state.name"
                            class="w-full"
                            icon="iconoir:user-star"
                            placeholder="Qual seu nome?"
                            size="md"
                        />
                    </UFormField>

                    <UFormField
                        label="Email"
                        name="email"
                        class="w-full md:w-1/2"
                    >
                        <UInput
                            v-model="state.email"
                            class="w-full"
                            icon="line-md:email-filled"
                            placeholder="Qual o seu email?"
                            size="md"
                        />
                    </UFormField>
                </section>

                <UButton
                    type="submit"
                    class="mt-4 text-3xl block"
                >
                    Enviar
                </UButton>
            </UForm>
        </div>
    </section>
</template>

<script lang="ts" setup>
    import * as z from 'zod'
    import type { FormSubmitEvent } from '#ui/types'

    const schema = z.object({
        name: z.string().min(3, 'O nome deve conter pelo menos 3 caracteres'),
        email: z.string().email('Email inválido'),
        description: z
            .string()
            .min(30, 'O texto deve conter pelo menos 30 caracteres')
    })

    type Schema = z.output<typeof schema>

    const state = reactive<Partial<Schema>>({
        name: undefined,
        email: undefined,
        description: undefined
    })

    const toast = useToast()
    async function onSubmit(event: FormSubmitEvent<Schema>) {
        toast.add({
            title: 'Mensagem enviada!',
            description:
                'Sua mensagem foi enviada, logo entraremos em contato.',
            color: 'success'
        })
        console.log(event.data)
    }
</script>

<style></style>
