<template>
  <div id="app" class="container mt-5">
    <cabecera></cabecera>
    <listadoFrutas></listadoFrutas>
  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue'
import ListadoFrutas from './components/ListadoFrutas.vue'
export default {
  name: 'App',
  components: {
 
    Cabecera,
    ListadoFrutas
  }
}
</script>


