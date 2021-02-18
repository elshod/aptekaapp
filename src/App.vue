<template>
  <div id="app">
    
    <div class="row">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data: function(){
    return {  
      
    }
  },
}
</script>
<style lang="scss">
  @import '@/scss/style.scss';
</style>