Vue.component('padre',{
    template:
    `
        <div class='mt-4 p-5 bg-warning '>
            <p>Soy el Padre, contador:{{contador}}</p>
            <button @click='contador++'>+</button>
            {{asignacionPadre}}
            <hijo :asignado='contador' @asignacionHijo='asignacionPadre= $event'></hijo>
        </div>
    
    `,
    data(){
        return{
            contador:0,
            asignacionPadre:''
        }
    }
})