<template>
    <div>
        <p>Galería de fotografía</p>

        <div v-for='(foto,index) of fotos' :key='index'>
        <router-link :to="{ name: 'fotos', params: {id:foto}}">
        <button>Foto: {{foto}}</button>
        </router-link>
        </div>
        <foto/>
        <button @click='Anterior'>Anterior</button>
        <button @click='home'>Home</button>
        <button @click='Posterior'>Posterior</button>
    </div>
</template>


<script>
import Foto from "@/components/Fotografia.vue";
export default {
    name:'Fotos',
    components:{
        Foto
    },
    data(){
        return{
            fotos:[1,2,3]
        }
    },
    methods:{
        home(){
            this.$router.push('/')
        },
        Anterior(){
            this.$router.go(-1)
        },
        Posterior(){
            this.$router.go(1)
        }
    }
}
</script>