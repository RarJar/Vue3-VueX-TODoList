import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    tododatas: []
  },
  getters: {
    // getDatas(state) {
    //   return state.tododatas
    // }
    getDatas: state => state.tododatas
    
  },
  mutations: {
    // setToDoData(state,resData) {
    //   state.tododatas = resData
    // }

    setToDoData: (state, value) => state.tododatas = value
  },
  actions: {
    getToDoData({commit}) {
      axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
        commit('setToDoData', response.data);
      });
    }
  },
  modules: {
  }
})
