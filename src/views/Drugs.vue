<template>
  <div>
    <h2>Hello From {{title}}</h2>
    <button @click="isActive = !isActive">New Drug</button>
    <div v-show="isActive">
      <input type="text" v-model="newTitle" placeholder="Title">
      <input type="text" v-model="newPrice" placeholder="Price"> 
      <input type="date" v-model="newDate">
      <button @click="add">Add</button>
    </div>
    <hr>
    <div v-show="drugs.length>0">
      <h2>Dorilar ro'yhati</h2>
      <table border="1" width="100%" cellspacing="0" cellpadding="5">
        <tr>
          <th>№</th>
          <th>Nomi</th>
          <th>Narhi</th>
          <th>Ishlab chiqarilgan sana</th>
          <th></th>
        </tr>
        <tr v-for="(drug,index) of drugs" :key="index">
          <td>{{index+1}}</td>
          <td>{{drug.title}}</td>
          <td>{{drug.price}} so'm</td>
          <td>{{drug.date}}</td>
          <td>
            <button @click="del(index)">O'chirish</button>
          </td>
        </tr>
      </table>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      title: 'Drugs',
      newTitle:'',
      newPrice:0,
      newDate:'',
      drugs: [],
      isActive: false
    }
  },
  methods: {
    del(index){
      this.drugs.splice(index,1)
    },
    add(){
      var drug = {
        title: this.newTitle,
        price: this.newPrice,
        date: this.newDate
      }

      this.drugs.push(drug)
      this.newDate = ''
      this.newTitle = ''
      this.newPrice = 0
      this.isActive = false
    }
  }
}
</script>

<style>
  h2 {
    color: red;
  }
</style>