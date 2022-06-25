const state = () => ({
    authenticated: false
});

const getters = {
    getAuthenticated(state) {
        return state.authenticated
    },
};

const mutations = {
    setAuthenticated(state, authenticated) {
        state.authenticated = authenticated
    }
};

const actions = {
    setAuthenticated({ commit }, authenticated) {
        commit('setAuthenticated', authenticated)
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};