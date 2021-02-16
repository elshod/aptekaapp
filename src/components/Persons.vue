<template>
  <div>
    <h1>Persons page: {{counter}}</h1>
    <h2>{{mcount}}</h2>
    <button @click="changeCount">Add</button>
  </div>
</template>
<script>
import {eventEmitter} from '../main'
export default {
  props: ['mcount'],
  data(){
    return {  
      counter:0
    }
  },
  methods: {
    changeCount(){
      this.counter++
      eventEmitter.$emit('newChange')
      // this.$emit('change',this.counter)
    }
  }
}
</script>

<style>

</style>