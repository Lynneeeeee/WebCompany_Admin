import { createStore } from 'vuex'

export default createStore({
  state: {
    isGetterRouter: false,
    isCollapsed: true
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
  }
})
