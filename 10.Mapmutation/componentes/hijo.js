Vue.component('hijo',{
    template:
    `
        <div>
            <button @click='contador'>+</button>
            <button @click='disminuir(2)'>-</button>
            <p>Numero {{numero}}</p>
        </div>
    `,
    computed:{
        ...Vuex.mapState(['numero'])
    },
    methods:{
       ...Vuex.mapMutations(['contador','disminuir'])
        
    }

})