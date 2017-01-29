export default {
    namespace: 'count',
    state: {
        count: 0
    },
    actions: {
        addCount: async function ({commit, getters}, payload) {
            commit('count/saveCount', {
                currentCount: getters.currentCount + 1
            });
        }
    },
    mutations: {
        saveCount: function (state, payload) {
            const {currentCount} = payload;
            state.count = currentCount;
        }
    },
    getters: {
        currentCount: (state, getters) => state.count
    }
};