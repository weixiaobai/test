<template>
<div id="app">
  <router-view/>
  <button @click="open('v-header', '我是A')">添加A组件</button>
  <button @click="open('v-lefter', '我是B')">添加B组件</button>
  <button @click="deletebox('v-lefter')">删除</button>
  <div>
    <a v-for="item in items"  v-bind:class="{active : item.isshow}" :click="select"  class="btn">{{item.id}}{{item.component}}</a>
  </div>
  <component :is="item.component" :text="item.text" v-for="item in items"  :bbb="aaa"></component>
</div>
</template>

<script>
import header from './components/common/header'
import lefter from './components/common/lefter'

export default {
  name: 'App',
  data(){
    return{
      aaa:'aaaa',
      items: [
        {
          id:1,
          component:'v-header',
          data:'1',
          isshow:false
        },{
          id:2,
          component:'v-lefter',
          data:'1',
          isshow:true
        },{
          id:3,
          component:'v-header',
          data:'1',
          isshow:false
        }
      ]
    };
  },
  methods: {
    open(name, text){
       this.items.push({
        id:'1',//唯一id
        component: name,//打开模板
        data:'2',//传递的数据
        isshow:true,//时候显示
        onlyone:true//是否唯一
       })
    },
    deletebox(name){
      this.items.splice(0, 1)
    },
    select(){

    }
  },
  components:{
    'v-header':header,
    'v-lefter':lefter
  }
}

</script>

<style>
.btn{background: #ddd;margin-left:10px;}
.active{background: red;}
</style>
