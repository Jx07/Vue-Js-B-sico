Vue.component('hijo',{
    template:
    `
        <div>
            <button @click="$store.commit('contador')">+</button>
            <p>Numero {{$store.state.numero}}</p>
        </div>
    `

})