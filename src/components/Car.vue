<template>
  <div>
    <h1>One car page</h1>
    <p class="center">{{title}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: this.$route.params.id
    }
  }
}
</script>

<style>

</style>