import PandaImg from '../assets/panda.jpg';

export const GameState = {
    beforeStarted: Symbol('beforeStarted')
};

export default {
    namespace: 'game',
    state: {
        gameState: GameState.beforeStarted,
        map: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        currentImg: PandaImg
    },
    getters: {},
    actions: {},
    mutations: {}
};