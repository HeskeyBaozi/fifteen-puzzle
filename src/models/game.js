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
    getters: {
        blankIndex: ({map}) => map.findIndex(position => position === 15),
        blankColumn: (state, getters) => getters['game/blankIndex'] % 4,
        blankRow: (state, getters) => Math.floor(getters['game/blankIndex'] / 4),
        movableBlockIndexArray: (state, getters) => {
            return [{X: 0, Y: -1}, {X: 1, Y: 0}, {X: 0, Y: 1}, {X: -1, Y: 0}]
                .map(offset => {
                    return {X: getters['game/blankColumn'] + offset.X, Y: getters['game/blankRow']+ offset.Y};
                })
                .map(positionObject => {
                    return {
                        isMovable: positionObject.X >= 0 && positionObject.X < 4 && positionObject.Y >= 0 && positionObject.Y < 4,
                        index: positionObject.Y * 4 + positionObject.X
                    };
                });
        }
    },
    actions: {},
    mutations: {}
};