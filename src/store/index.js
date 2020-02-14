import Vue from 'vue'
import Vuex from 'vuex'

import team from './team'
import startup from './startup'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    team,
    startup
  }
})
