Vue.component('prueba',{
    template:
    `
        <div>
            <p>Numero {{numero}}</p>
            <hijo></hijo>
        </div>
    `,
    computed:{
        ...Vuex.mapState(['numero'])
    }
})