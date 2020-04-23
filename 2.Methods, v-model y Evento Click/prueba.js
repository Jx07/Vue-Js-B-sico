const prueba = new Vue({
    el:'#prueba1',
    data:{
      frutas:[
          {nombre:'pera', cantidad:10},
          {nombre:'manzana', cantidad:5},
          {nombre:'uva', cantidad:0},
      ],
      nuevafruta:'',
      cantidadfruta:0,
      total:0
    },
    methods:{
      AgregarFruta (){
        this.frutas.push({ // con el this puedes llamar a cualquier propiedad de la instancia creada
          nombre: this.nuevafruta, cantidad:this.cantidadfruta
        })
       return this.nuevafruta='';
       return this.cantidadfruta=0
      }
      
    },
    computed:{
     SumarFrutas(){
      this.total =0;
      for(fruta of this.frutas){
        this.total=this.total + fruta.cantidad;
      }
      return this.total;
     }
    }
})