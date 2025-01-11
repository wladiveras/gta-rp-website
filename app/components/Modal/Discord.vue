<script setup lang="ts">
    const modal = useModal()
</script>

<template>
    <UModal
        title="Entre no nosso Discord."
        :close="{
            color: 'primary',
            variant: 'outline',
            class: 'rounded-full cursor-pointer'
        }"
    >
        <template #body>
            <a
                href="https://discord.gg/TMYD9xsjBN"
                target="_blank"
                class="border-primary-500 mt-10 cursor-pointer"
            >
                <UIcon
                    name="line-md:discord"
                    class="animate-bounce text-4xl m-auto block text-primary-500 hover:text-primary-700"
                />
                <UButton
                    label="Entrar no Discord"
                    variant="link"
                    class="text-2xl m-auto block transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                />
            </a>
        </template>

        <template #footer>
            <UButton
                color="primary"
                label="Fechar"
                class="block w-full text-xl text-white"
                @click="modal.close()"
            />
        </template>
    </UModal>
</template>
