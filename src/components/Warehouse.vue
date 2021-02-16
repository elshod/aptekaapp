<template>
  <div>
    <h1>Warehouse Page</h1> {{waretitle}}
    <hr>
    <h2>{{category}}</h2>
    <input type="text" v-model="num">
    <h3>{{num | numToStr}}</h3>
  </div>
</template>
<script>
import { eventEmitter } from '../main'
export default { 
  filters: {
    numToStr(val){
      var bir= ['nol','bir','ikki','uch','to`rt','besh','olti','yetti','sakkiz','to`qqiz']
      var onlik = ['nol','o`n','yigirma','o`ttiz','qirq','ellik','oltmish','yetmish','sakson','to`qson']
      var bet = ['nol','yuz','ming']
      var word = ''
      var k = 0
      // val = 1 ->   2 -> yigirma   3 -> uch   
      for(var i=val.length-1;i>=0;i--){
        
        if (k==1 || k==5 || k==4) {
          word = onlik[val[i]] + ' ' + word
        }
        if (k==2){
          word = bet[1] + ' ' + word
        }
        if (k==3){
          word = bet[2] + ' ' + word
        }
        if (k==0 || k==2 || k==3){
          word = bir[val[i]] + ' ' + word

        }
        
        k++
      }

      return word
    }
  },
  data(){
    return { 
      waretitle: '',
      category: 'Laptop HP Omen',
      num: 123,
      }
  },
  created(){
    eventEmitter.$on('upChange',val=>{
      this.waretitle = val
    })
  },
  
}
</script>

<style>
  h1 {
    color: darkgoldenrod;
  }
</style>