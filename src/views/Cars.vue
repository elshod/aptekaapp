<template>
  <div>
    <app-head></app-head>
    <h1>Cars Vue</h1>
    <div class="menu">
      <router-link 
        v-for="(car,index) of allCars" 
        :key="index" 
        :to="{name:'car',params:{id:car.title},query:{year:car.year}}">
        {{car.title}} | <b>{{car.year}}</b>
      </router-link>
    </div>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
import Head from '../components/Head'
export default {
  components: {
    appHead: Head
  },
  data(){
    return { 
      allCars: [
        {title: 'Honda', year: 2009},
        {title: 'Mazda', year: 2001},
        {title: 'Toyota', year: 2011},
      ]
    }
  },
  computed: {
    // filteredCars(){
    //   return this.allCars.filter(item => {
    //     return item.title.toLowerCase().indexOf(this.title.toLowerCase()) !== -1 
    //     || item.year.toString().indexOf(this.title) !== -1
    //     // salom   ---- b   ---> -1
    //   })
    // }
  },
  methods: {
    // add(){  
    //   eventEmitter.$emit('upChange',this.title)
    // }
  }
}
</script>

<style scoped>
  h1 {
    color: red;
  }
  ul {
    max-width: 200px;
    margin: auto;
    text-align: left;
    margin: 20px auto;
  }
</style>