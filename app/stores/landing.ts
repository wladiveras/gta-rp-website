export const useLandingStore = defineStore('landing', {
    state: () => ({
        hero: [
            {
                image: '/images/me-ia.png',
                label: 'Paris RP',
                title: 'O MELHOR SERVIDOR DE RP DE',
                subtitle: 'TODO BRASIL',
                about: '',
                description: ''
            }
        ],
        about: {
            title: 'Paris',
            subtitle: 'RP',
            content: [
                {
                    text: `Em breve algo novo está por vir`
                }
            ]
        }
    }),

    actions: {}
})
