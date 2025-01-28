export const useSeoStore = defineStore('seo', {
    state: () => ({
        title: 'Paris RP',
        titleCallback: 'Paris RP • A melhor cidade do brasil',
        website: 'https://parisroleplay.com',
        author: 'Wladi Veras',
        keywords:
            'gta, gta5, complexo, cidade alta, alta rj, wladi, wladi veras, lets go, md, doce, kimi, revoada, nobre, santa, bahamas, paraisopolis, capital, fluxo, flow, paris, paris roleplay, paris rp, coringa, metrópole, fivem, rp, gta rp, roleplay, paulinho loko, paulinho o loko, paulinho, louco, paulinho o louco, paulinho louco, taco, besouro, homem besouro, luketa, luan, professor, halk, paris, paris rp, LuquEt4',
        description:
            'Viva histórias inesquecíveis na cidade onde a criatividade encontra a realidade. Construa sua jornada, faça amigos e explore uma Paris feita para o seu roleplay!',
        image: '/images/seo.png'
    }),
    getters: {
        getTitle: (state) => {
            return state.title
        },
        getTitleCallback: (state) => {
            return state.titleCallback
        },
        getWebsite: (state) => {
            return state.website
        },
        getKeywords: (state) => {
            return state.keywords
        },
        getDescription: (state) => {
            return state.description
        },
        getImage: (state) => {
            return state.image
        }
    },
    actions: {}
})
