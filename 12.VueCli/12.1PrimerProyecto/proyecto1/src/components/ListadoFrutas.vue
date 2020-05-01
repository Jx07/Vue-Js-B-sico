<template>
    <div>
        <ul class="list-group">
            <li v-for='(fruta,index) of frutaOrdenada' :key='fruta.id' @click='aumentar(index)'
            class="list-group-item d-flex justify-content-between align-items-center" >
         {{index}}   -    {{fruta.nombre}}
                <span class="badge badge-primary badge-pill">{{fruta.precio}}</span>
            </li>
            
        </ul>
        <div class="mt-2">
            <button class="btn btn-warning" @click='reiniciar'>Reiniciar</button>
        </div>

    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex';
export default {
    name:'ListadoFrutas',
    computed:{
        ...mapState(['frutas']),
        frutaOrdenada(){
            var mi = this;
            return mi.frutas.sort((a , b) => b.precio - a.precio)
        }
    },
    methods:{
        ...mapMutations(['aumentar','reiniciar'])
    }
}
</script>