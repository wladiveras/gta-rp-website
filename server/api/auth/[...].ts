import DiscordProvider from 'next-auth/providers/discord'
import { NuxtAuthHandler } from '#auth'

async function getDiscordGuilds(accessToken: string) {
    const response = await fetch('https://discord.com/api/users/@me/guilds', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })

    if (!response.ok) {
        throw new Error('Failed to fetch Discord guilds')
    }
    return response.json()
}

export default NuxtAuthHandler({
    providers: [
        // @ts-expect-error Use .default here for it to work during SSR.
        DiscordProvider.default({
            clientId: useRuntimeConfig().public.DISCORD_CLIENT_ID,
            clientSecret: useRuntimeConfig().public.DISCORD_CLIENT_SECRET,
            authorization:
                'https://discord.com/api/oauth2/authorize?scope=guilds+email+identify'
        })
    ],
    callbacks: {
        async jwt({ token, account }) {
            if (account?.access_token) {
                token.accessToken = account.access_token

                try {
                    const guilds = await getDiscordGuilds(account.access_token)
                    token.guilds = guilds
                } catch (error) {
                    console.error('Failed to fetch Discord guilds:', error)
                }
            }
            return token
        },
        async session({ session, token }) {
            // @ts-expect-error Use .default here for it to work during SSR.
            session.user.guilds = token.guilds || []

            return session
        }
    }
})
