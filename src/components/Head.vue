<template>
  <div>
    <h1>Hello APP</h1>
    <div class="menu">
      <router-link :to="link.link" v-for="(link,index) of links" :key="index" active-class="active" exact>{{link.title}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      links: [
        { title: 'Home page', link: '/' },
        { title: 'Cars', link: '/cars'},
        { title: 'Animals', link: '/animals'},
        { title: 'Drugs', link: '/drugs'},
      ]
    }
  }
}
</script>

<style>

</style>