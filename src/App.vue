<template>
  <div id="app">
    <h1>Hello APP</h1>
    <div class="row">
      <app-animal></app-animal>
      <hr>
      <!-- <app-warehouse></app-warehouse> -->
    </div>
  </div>
</template>
<script>
import AppAnimal from './components/Animals'
// import AppCars from './components/Cars' 
// import AppWarehouse from './components/Warehouse' 
export default {
  name: 'App',
  data: function(){
    return { hello:'from app'  }
  },
  components: {
    AppAnimal
    // AppCars,
    // AppWarehouse
  }
}
</script>
<style lang="scss">
  @import '@/scss/style.scss';
</style>