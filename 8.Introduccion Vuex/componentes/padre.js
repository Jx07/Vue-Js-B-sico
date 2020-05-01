Vue.component('prueba',{
    template:
    `
        <div>
            <p>Numero {{$store.state.numero}}</p>
            <hijo></hijo>
        </div>
    `
})