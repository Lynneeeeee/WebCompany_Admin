import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"

export default createStore({
  state: {
    isGetterRouter: false,
    isCollapsed: false
  },
  getters: {
  },
  mutations: {
    changeGetterRouter(state, value){
      state.isGetterRouter = value
    },
    // Control sidebar expand
    changeCollapsed(state){
      state.isCollapsed = !state.isCollapsed
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
    // If don't name the paths, will persisted all states
    paths: ['isCollapsed'] // Control which state needed to be persisted
  })]
})
