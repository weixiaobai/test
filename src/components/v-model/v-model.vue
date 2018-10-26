<template>
  <div>
      <h1>v-model 实现原理</h1>
      <child v-model="input" @change="aaa"></child>
      <input type="text" v-model="input" @click="aaa('aaa')">
      {{input}}
  </div>
</template>
<script>
import child from './v-model-child'
export default {
  name: 'App',
  data() {
    return {
      input:'',
      select:''
    };
  },
  components: {
    child
  },
  methods:{
      aaa:function(aaa){
          alert(aaa)
      }
  }
}

</script>
<style>

</style>
