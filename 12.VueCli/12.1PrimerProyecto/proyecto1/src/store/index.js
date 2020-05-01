import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas:[
      {id:1, nombre:'pera', precio:4},
      {id:2, nombre:'mango', precio:7},
      {id:3, nombre:'platano', precio:9},
      {id:4, nombre:'manzana', precio:2}
    ]
  },
  mutations: {
    aumentar(state,id){
      state.frutas[id].precio ++
  
    },
    reiniciar(state){
       state.frutas.forEach(fruta =>{
       fruta.precio=0
     })
    }
  },
  actions: {
  },
  modules: {
  }
})
