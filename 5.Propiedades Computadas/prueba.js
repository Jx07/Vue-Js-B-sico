const prueba = new Vue({
  el:'#prueba1',
  data:{
      titulo:'',
      contador:0
  },
  computed:{
      invertido(){
        return  this.titulo.split('').reverse('').join('')      //split('') = separa un arreglo por letras
      },
      cambiarColor(){
          return{
            'bg-primary': this.contador<=10,
            'bg-success': this.contador>10 && this.contador<=20,
            'bg-warning':this.contador>20
          }
      }
  }
})