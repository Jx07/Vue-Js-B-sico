const tienda= new Vuex.Store({
    state:{
        numero:10
    },
    mutations:{
        contador(state){
            state.numero ++;
        },
        disminuir(state, numero){
            state.numero -= numero;
        }
    }
    
})