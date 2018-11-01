<template>
  <el-dialog :title="colConfig.label" class="dialog" :visible.sync="dialogVisible" width="360px" :modal="false">
    <el-date-picker v-if="colConfig.search=='date'" ref="date"  size="medium"
          v-model="searchvalue"
          type="date"
          placeholder="选择日期" @change="change">
    </el-date-picker>
    <el-input v-else v-model="searchvalue" size="medium" style="width:220px;display: inline-block;" @change="change"></el-input>
    <el-button class="fr" size="medium" type="primary" @click="dialogVisible = false">确 定</el-button>
  </el-dialog>
</template>
<script>
export default {
  props: ['timestamp','colConfig',],
  data(){
    return{
      dialogVisible:true,
      searchvalue:this.value
    }
  },
  mounted(){
    //this.$refs.date.focus();
  },
  methods: {
    change() {
      this.$emit('getlabelsearch', {"searchname":this.colConfig.prop,"searchvalue":this.searchvalue}) 
    }
  },
  watch:{
    'timestamp': function(newVal,oldVal){
      if( newVal!=oldVal){
        this.dialogVisible=true;
      }
    }
  }
}
</script>
<style>
  .table-head-date{display: inline-block;}
</style>