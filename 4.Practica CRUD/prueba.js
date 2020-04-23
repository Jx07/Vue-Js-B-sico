const prueba = new Vue({
    el:'#prueba1',
    data:{
    persona:'',
    estado:false,
    personas:[]
    
    },
    methods:{
      agregarPersona(){
          this.personas.push({
            nombre:this.persona,estado:this.estado
          })
          return this.persona='';
      },
      cambiarColor(parametro1){
         console.log('editar',parametro1)   // console.log('editar',parametro1) se pasa una pañlbra estática y un parametro enviado
        this.personas[parametro1].estado= true
        },
      eliminarDiv(parametro1){
        this.personas.splice(parametro1,1)  // se indica que solo detecta el index y luego lo elimina solo 1 
      }
      
    }
    
  })
