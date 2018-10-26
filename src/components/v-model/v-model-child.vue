<template>
<div class="v-model-child">
      // 组件使用时有v-model属性，value初始传的‘what’ 不会被渲染，
      而是v-model绑定的test值被渲染，这儿value会被重新赋值为v-model绑定的test的值。
      <input type="text" v-model="model"/>
      {{model}}
      <el-input v-model="model"></el-input>
      <el-button @click="aa">aaa</el-button>
  </div>
</template>

<script>
export default {
  props: ["value"],
  data(){
      return {
          aaa:''
      }
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  },
  methods: {
    // 处理 @change 事件，如果有按钮组，出发按钮组事件。
    handleChange:function(){
        this.$emit("change", this.model);
    },
    aa:function(){
        this.$emit("change", this.model);
    }
  }
};
</script>
<style>
.v-model-child{border:1px solid red;}
</style>
