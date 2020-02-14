export default {
  state: {
    startups: []
  },
  mutations: {
    newStartup (state, payload) {
      state.teams.push(payload)
    }
  },
  actions: {
    newStartup ({commit}, payload) {
      commit('newTeam', payload)
    }
  },
  getters: {
    startups (state) {
      return state.startups
    }
  }
}
