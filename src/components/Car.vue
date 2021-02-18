<template>
  <div>
    <h1>One car page</h1>
    <button @click="backToCars">Back</button>
    <p class="center">{{title}}</p>
    <p class="center">{{year}}</p>
    <router-link to="/hayvon">Hayvonlar</router-link>
  </div>
</template>
<script>
export default {
  data(){
    return {
      title: this.$route.params.id,
    }
  },
  computed: {
    year(){
      return this.$route.query.year
    }
  },
  methods: {
    backToCars(){
      this.$router.push('/animals')
    }
  },
  watch: {
    $route(to,from) {
      console.log(from);
      this.title = to.params.id
    }
  }
}
</script>

<style>

</style>