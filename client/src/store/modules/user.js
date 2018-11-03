const state = {
    user: {}
};

const getters = {
    user: (state) => {
        return state.user;
    }
};

const actions = {
    login({ commit }, user) {
        commit('login', user);
    }
};

const mutations = {
    login(state, user) {
        state.user = user;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
