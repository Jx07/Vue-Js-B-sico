<template>
    <form class="mt-5">
    <div>
        <b-row>
            <b-col lg='3'>
                <b-form-input type="text" v-model='nuevo' :state='limitar' placeholder="Enter your name"></b-form-input>
                <small>Solo 3 caracteres</small>
            </b-col>
            <b-col lg='3'>
                <b-form-select v-model="selected" :options="options"></b-form-select>
                <p>seleccion: {{selected}}</p>
            </b-col>
            <b-col lg='3'>
                <b-form-radio-group v-model='radio' :options='opciones'>
                 <p>seleccion: {{radio}}</p>
                </b-form-radio-group>
            </b-col>
            <b-col lg='3'>
                <b-form-checkbox-group v-model='check' :options='lista'></b-form-checkbox-group>
                <p>selecciones: {{check}}</p>
            </b-col>
        </b-row>
    </div>
    </form>
</template>
<script>
export default {
    name:'Input',
    data(){
        return{
            nuevo:'',
            selected:null,
            options:[
                {value:null, text:'seleccionar animal'},
                {value:'perro', text:'Guau'},
                {value:'pato', text:'Cuak'},
                {value:'gato', text:'miau'}
                ],
            radio:null,
            opciones:[
                {value:'perro', text:'Guau'},
                {value:'pato', text:'Cuak'},
                {value:'gato', text:'miau'}
                ],
            check:[],
            lista:[
                {value:'perro', text:'Guau'},
                {value:'pato', text:'Cuak'},
                {value:'gato', text:'miau'}
                ]


        }
    },
    computed:{
        limitar(){
        return  this.nuevo.length > 2 ? true : false
        }
    }
}
</script>