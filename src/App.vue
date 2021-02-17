<template>
  <div id="app">
    <h1>Hello APP</h1>
    <div class="menu">
      <router-link :to="link.link" v-for="(link,index) of links" :key="index" active-class="active" exact>{{link.title}}</router-link>
    </div>
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
      links: [
        { title: 'Home page', link: '/' },
        { title: 'Cars', link: '/cars'},
        { title: 'Animals', link: '/animals'},
        { title: 'Drugs', link: '/drugs'},
      ]
    }
  },
}
</script>
<style lang="scss">
  @import '@/scss/style.scss';
</style>