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
    
    addToDo: (state, newToDo) => state.tododatas.unshift(newToDo),

    deleteToDo(state, deleteId) {
      state.tododatas = state.tododatas.filter(data => {
        return data.id != deleteId
      })
    }

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
    },

    deleteToDoData({commit} , deleteId) {
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${deleteId}`);
      commit('deleteToDo', deleteId);      
    },

    limitToDoData({commit} , limitCount) {
      axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limitCount}`).then(response => {
        commit('setToDo', response.data);        
      });   
    }
  },
  modules: {
  }
})
