Vue.component('hijo',{
    template:
    `
        <div class='p-5 bg-danger'>
            <p>{{hijo}} : {{asignado}}</p>
        </div>
    `,
    data(){
        return{

            hijo:'Soy el hijo'
        }
    },
    props:['asignado'],
    mounted(){
        this.$emit('asignacionHijo',this.hijo)

    }
})