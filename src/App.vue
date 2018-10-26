<template>
  <div id="app">
    <el-container class="height100">
        <v-lefter></v-lefter>
        <el-main>
          <!--打开的窗口-->
          <div>

          </div>
          <!--打开的窗口 end-->
          <el-scrollbar class="page-component__scroll" id="js_scroll">
            <router-view></router-view>
          </el-scrollbar>
        </el-main>
    </el-container>
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
html,body{height:100%;}
html,body,div,p,a,img{padding: none;margin:none;}
#app{height:100%;}
.btn{background: #ddd;margin-left:10px;}
.active{background: red;}
.height100{height:100%;}
</style>
