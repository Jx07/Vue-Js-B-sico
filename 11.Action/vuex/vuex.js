const tienda= new Vuex.Store({
    state:{
        numero:10,
        cursos:[]
    },
    mutations:{
        contador(state){
            state.numero ++;
        },
        disminuir(state, numero){
            state.numero -= numero;
        },
        listarCursos(state,parametro1){
            state.cursos= parametro1
        }

    },
    actions:{
        obtenerCursos: async function({commit}){
            const data = await fetch('archivo.json')
            const cursos= await data.json();
            commit('listarCursos', cursos)
        }
    }
    
})