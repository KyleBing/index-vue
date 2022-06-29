import { createStore } from 'vuex'

export default createStore({
  state: {
    insets: {
      height: innerHeight,
      width: innerWidth
    }
  },
  getters: {
  },
  mutations: {
    SET_INSETS(state, payload){
      this.state.insets = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
