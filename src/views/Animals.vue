<template>
  <div class="main">
      <app-head></app-head>
      <label class="form-label">Email</label>
      <input type="text" 
        v-model="email" 
        class="form-control" 
        :class="{'is-invalid':$v.email.$error, 'is-valid': !$v.email.$error && $v.email.$dirty}"
        @input="$v.email.$touch()">
        <div class="invalid-feedback" v-show="!$v.email.required">
          Maydon bo'sh bo'lmasligi lozim
        </div>
        <div class="invalid-feedback" v-show="!$v.email.email">
          Email noto'g'ri to'ldirilganligini bildiramiz
        </div>

        <button 
          class="btn btn-success mt-4" 
          type="submit"
          :disabled="$v.$invalid">Tekshirish</button>
      <pre>
        {{$v}}
      </pre>
  </div>
</template>

<script>
const { required, email } = require('vuelidate/lib/validators')
import Head from '../components/Head'
export default {
  components: {
    appHead: Head
  },
  data(){
    return {
      email: '',
    }
  },
  validations: {
    email: {
      required,
      email,
    }
  }
}
</script>

<style>
  .main {
    max-width: 700px;
    margin: auto;
  }
</style>
