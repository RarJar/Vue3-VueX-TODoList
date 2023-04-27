import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    tododatas: []
  },
  getters: {
    getDatas: state => state.tododatas
    
  },
  mutations: {

    setToDo: (state, value) => state.tododatas = value,
    
    addToDo: (state, newToDo) => state.tododatas.unshift(newToDo)

  },
  actions: {
    getToDoData({commit}) {
      axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
        commit('setToDo', response.data);
      });
    },

    addToDoData({commit} ,newToDo) {
      axios.post('https://jsonplaceholder.typicode.com/todos',newToDo).then(response => {
        commit('addToDo', response.data);
      });
    }
  },
  modules: {
  }
})
