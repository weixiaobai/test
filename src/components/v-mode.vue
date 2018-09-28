<template>
  <div>
      <h1>v-mode</h1>
      <mode v-model="input" @change="aaa"></mode>
      <input type="text" v-model="input" @click="aaa('aaa')">
      {{input}}
  </div>
</template>
<script>
import mode from '@/components/common/mode'
export default {
  name: 'App',
  data() {
    return {
      input:'',
      select:''
    };
  },
  components: {
    mode
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
