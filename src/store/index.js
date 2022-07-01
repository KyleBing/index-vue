import { createStore } from 'vuex'

export default createStore({
  state: {
    insets: {
      height: innerHeight,
      width: innerWidth
    },
    scrollTop: 0
  },
  getters: {
  },
  mutations: {
    SET_INSETS(state, payload){
      this.state.insets = payload
    },
    SET_SCROLL_TOP(state, payload){
      this.state.scrollTop = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
