export default {
  state: {
    teams: []
  },
  mutations: {
    newTeam (state, payload) {
      state.teams.push(payload)
    }
  },
  actions: {
    newTeam ({commit}, payload) {
      commit('newTeam', payload)
    }
  },
  getters: {
    teams (state) {
      return state.teams
    }
  }
}
