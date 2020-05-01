Vue.component('hijo',{
    template:
    `
        <div>
            <button @click='contador'>+</button>
            <button @click='disminuir(2)'>-</button>
            <p>Numero {{numero}}</p>
            <button @click='obtenerCursos'>Listar cursos</button>
            <ul v-for='curso of cursos'>
                <li>{{curso.nombre}} {{curso.edad}}</li>
            </ul>
        </div>
    `,
    computed:{
        ...Vuex.mapState(['numero','cursos'])
    },
    methods:{
       ...Vuex.mapMutations(['contador','disminuir']),
       ...Vuex.mapActions(['obtenerCursos'])
        
    }

})