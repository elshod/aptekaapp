<template>
  <div>
    <h1>Cars Vue</h1>
    
  </div>
</template>
<script>
export default {
  data(){
    return { 
      // title: '',
      // cars: [ 'Honda', 'Mazda', 'Toyota' ],
      // allCars: [
      //   {title: 'Honda', year: 2009},
      //   {title: 'Mazda', year: 2001},
      //   {title: 'Toyota', year: 2011},
      // ]
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