<template>
  <div class="bm-el-table">
    <el-table class="bm-el-table__table" :data="data"  @selection-change="handleSelectionChange" border tooltip-effect="dark" :height="height">
      <template v-for="colConfig in colConfigs" >
        <slot v-if="colConfig.slot" :name="colConfig.slot"></slot>
        <el-table-column  v-if="colConfig.search"  :key="colConfig.prop" v-bind="colConfig" :render-header="(h,obj)=>renderHeader(h,obj,colConfig)">
          <template  slot-scope="scope">
             <a v-if="colConfig.call" @click="itemClick( scope.row,colConfig.prop)">{{ scope.row[colConfig.prop] }}</a>
             <template v-else>{{ scope.row[colConfig.prop] }}</template>
          </template>
        </el-table-column>
        <el-table-column  v-else v-bind="colConfig" :key="colConfig.prop"></el-table-column>
      </template>
    </el-table>
    <el-button v-for="item in colConfigs" :key="item.prop" @click="delSearchItem(1,item.prop)">{{item.prop}}</el-button>
    {{searchData}}<br>
    {{tempObj}}
  </div>
</template>
<script>
export default {
  /*colConfigs：表格配置项；data:展示数据*/
  name:"bm-el-table",
  props: ['colConfigs', 'data','height'],
  data() {
    return {
      multipleSelection: [],//选中行
      tempObj:{},//各列筛选值、排序等信息
      searchData:{
        filter:[], //列过滤条件集合
        sort:[],   //列排序条件集合
      }
    }
  },
  created(){
    this.init();
  },
  methods: {
    init:function(){
      //初始化各列筛选值、排序等信息
      for (var i = this.colConfigs.length - 1; i >= 0; i--) {
        if(!!this.colConfigs[i].prop){
          var item={
            search:"",
            sort:0,
            field1:''
          }
          if(!!this.colConfigs[i].search&&this.colConfigs[i].search=="classify"){
            item.search=[];
          }
          this.$set(this.tempObj,this.colConfigs[i].prop,item);
        }
      }
    },
    /*自定义表头 h、objs:{$index,column}(element-UI默认项) type:表头类型*/
    renderHeader(h, objs,conf) {
      var that = this;
      var icons = {
        'date': 'el-icon-date',
        'string': 'el-icon-search'
      }
      if(conf.search=="date"){//时间段
        return (
          <a>
            {conf.label}
            <el-popover  popper-class="bm-el-table__popover" placement="bottom" width="440" trigger="click" >
              <div class="bm-el-table__dateBox">
                <div class="title">选择时间区间 <i onClick={()=>this.close(conf.prop)} class="el-icon-close" ></i></div>
                <el-date-picker class="bm-el-table__date" onChange={()=>this.confirm(conf.prop)}
                  v-model={this.tempObj[conf.prop].search} value-format="yyyy-MM-dd hh:mm:ss"
                  type="datetimerange" size="small"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              </div>
              <i slot="reference" class="el-icon-date" onclick="event.stopPropagation();" />
            </el-popover>
            {
              !!conf.sort? 
              <span class="bm-el-table__sortBox">
                <i onClick={()=>this.setSort(conf.prop,1)} class="bm-el-table__sort bm-el-table__asc" style={{borderBottomColor:this.tempObj[conf.prop].sort===1?'#1F9B83':'#c0c4cc'}}></i>
                <i onClick={()=>this.setSort(conf.prop,-1)}  class="bm-el-table__sort bm-el-table__desc" style={{borderTopColor:this.tempObj[conf.prop].sort===-1?'#1F9B83':'#c0c4cc'}}></i>
              </span> :''
            }
          </a>
        )
      }else if(conf.search=="string"){//字符串
        return (
          <a>
            {conf.label}
            <el-popover   popper-class="bm-el-table__popover" placement="bottom" width="360" trigger="click">
              <div class="bm-el-table__string">
                <el-input size="small" class="bm-el-table__stringInput" v-model={this.tempObj[conf.prop].search} placeholder="请输入内容"></el-input>
                <el-button type="primary" size="small" onClick={()=>this.confirm(conf.prop)}>确定</el-button>
                <i onClick={()=>this.close(conf.prop)} class="el-icon-close" ></i>
              </div>
              <i slot="reference" class="el-icon-search" onclick="event.stopPropagation();" />
            </el-popover>
            {
              !!conf.sort? 
              <span class="bm-el-table__sortBox">
                <i onClick={()=>this.setSort(conf.prop,1)} class="bm-el-table__sort bm-el-table__asc" style={{borderBottomColor:this.tempObj[conf.prop].sort===1?'#1F9B83':'#c0c4cc'}}></i>
                <i onClick={()=>this.setSort(conf.prop,-1)}  class="bm-el-table__sort bm-el-table__desc" style={{borderTopColor:this.tempObj[conf.prop].sort===-1?'#1F9B83':'#c0c4cc'}}></i>
              </span> :''
            }
          </a>
        )
      }else if(conf.search=="classify"){//多选
        var html=(array)=>{//生成多选框
          var res=[];
          for (let i = 0; i < array.length; i++) {
            res.push(<el-checkbox  label={array[i]}>{array[i]}</el-checkbox>);
          }
          return res
        }
        return (
          <a>
            {conf.label}
            <el-popover  popper-class="bm-el-table__popover" placement="bottom" width="100" trigger="click">
              <div class="bm-el-table__check">
                <el-checkbox  v-model={this.tempObj[conf.prop].field1} onChange={()=>this.selectAll(conf)}>全选</el-checkbox>
                <el-checkbox-group v-model={this.tempObj[conf.prop].search}>
                  {html(conf.classify)}
                </el-checkbox-group>
                <el-button type="primary" size="small" onClick={()=>this.confirm(conf.prop)}>确定</el-button>
                <i onClick={()=>this.close(conf.prop)} class="el-icon-close" ></i>
              </div>
              <i slot="reference" class="el-icon-caret-bottom" />
            </el-popover>
            {
              !!conf.sort? 
              <span class="bm-el-table__sortBox">
                <i onClick={()=>this.setSort(conf.prop,1)} class="bm-el-table__sort bm-el-table__asc" style={{borderBottomColor:this.tempObj[conf.prop].sort===1?'#1F9B83':'#c0c4cc'}}></i>
                <i onClick={()=>this.setSort(conf.prop,-1)}  class="bm-el-table__sort bm-el-table__desc" style={{borderTopColor:this.tempObj[conf.prop].sort===-1?'#1F9B83':'#c0c4cc'}}></i>
              </span> :''
            }
          </a>
        )
      }else{
        return (
          <a>
            {conf.label}
            {
              !!conf.sort? 
              <span class="bm-el-table__sortBox">
                <i onClick={()=>this.setSort(conf.prop,1)} class="bm-el-table__sort bm-el-table__asc" style={{borderBottomColor:this.tempObj[conf.prop].sort===1?'#1F9B83':'#c0c4cc'}}></i>
                <i onClick={()=>this.setSort(conf.prop,-1)}  class="bm-el-table__sort bm-el-table__desc" style={{borderTopColor:this.tempObj[conf.prop].sort===-1?'#1F9B83':'#c0c4cc'}}></i>
              </span> :''
            }
          </a>
        )
      }
      
    },
    //el-popover弹层中的全选
    selectAll:function({prop,classify}){
      if(!!this.tempObj[prop].field1){
        this.tempObj[prop].search=classify;
      }else{
        this.tempObj[prop].search=[];
      }
    },
    //el-popover弹层中的确认按钮
    confirm:function(prop){
      //暴力关闭弹层，不能用官方的方式，因为表头会生成多个弹层也会有多个！！！
      document.querySelector("#app").click()
      let i=this.arrHasItme(this.searchData.filter,prop);
      if(i>-1){
        this.$set(this.searchData.filter[i],"search",this.tempObj[prop].search)
      }else{
        this.searchData.filter.push({
          "prop":prop,
          "search":this.tempObj[prop].search
        })
      }
      this.$emit("getSearchData", this.searchData);
    },
    //表头设置排序 1，1
    setSort:function(prop,val){
      this.$set(this.tempObj[prop],"sort",val)
      let i=this.arrHasItme(this.searchData.sort,prop);
      if(i>-1){
        this.$set(this.searchData.sort[i],"sort",val)
      }else{
        this.searchData.sort.push({
          "prop":prop,
          "sort":val
        })
      }
      this.$emit("getSearchData", this.searchData);
    },
    //el-popover弹层中的关闭按钮
    close:function(){
      //暴力关闭弹层，不能用官方的方式，因为表头会生成多个弹层也会有多个！！！
      document.querySelector("#app").click()
    },
    //判断数组是否存在改元素
    arrHasItme:function(arr,prop){
      for (let i = 0; i < arr.length; i++) {
        if(arr[i].prop==prop){
          return i;
        }
      }
      return -1;
    },
    //表格元素点击事件
    itemClick:function(data,prop){
      this.$emit("itemClick", {"data":data,"prop":prop});
      console.log(data)
      console.log(prop)
    },
    //选中行变化时
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    delSearchItem:function(type,prop){
      if(type===1){//检索项
        let i=this.arrHasItme(this.searchData.filter,prop);
        let i2=this.arrHasItme(this.colConfigs,prop);
        i>-1?this.searchData["filter"].splice(i,1):'';
        if(this.colConfigs[i2].search=="classify"){
          this.tempObj[prop].search=[]
          this.tempObj[prop].field1='';
        }else{
          this.tempObj[prop].search=''
        }
      }else if(type===2){//排序
        let i=this.arrHasItme(this.searchData.sort,prop);
        i>-1?this.searchData.filter.splice(i,1):'';
        this.tempObj[prop].sort=0;
      }else if(type===0){//所有
        this.init;
        this.$set(this.searchData,"filter",[])
        this.$set(this.searchData,"sort",[])
      }

    }
  }
}

</script>
<style>
.bm-el-table .bm-el-table__table{text-align:center;}
.bm-el-table .el-table--border th{text-align:center;border-right:0;background: #F8F9FB;color:#333633;font-size: 16px;font-weight: inherit;}
.bm-el-table .el-table--border th i{margin-left:5px;color:#1F9B83;font-weight: bold;cursor: pointer;}
.bm-el-table .el-table__fixed-right-patch{background: #F8F9FB;}
.bm-el-table .el-table--border{border:1px solid #ddd;}
.bm-el-table .el-table td{border-color:#ddd;padding:12px 0;}
.bm-el-table .el-table th{border-color:#ddd;padding:12px 0;}
.bm-el-table .el-table__empty-block{text-align: left;text-indent: 50px;}
.bm-el-table .el-table__empty-text{width:100%;}
.bm-el-table .el-table--border th i.el-icon-caret-bottom{font-size: 22px;}
html .bm-el-table__popover{padding: 0;}
.bm-el-table__check{margin:20px;margin-right: 10px;}
.bm-el-table__check .el-checkbox{display: block;margin:5px;}
.bm-el-table__check .el-checkbox-group{max-height: 160px;overflow-y:scroll;}
.bm-el-table__check .el-button{margin:15px 0 0 10px}
.bm-el-table__dateBox .title{clear:both;background: #F7F8FA;font-size: 16px;color:#333;line-height: 50px;text-indent: 20px;}
.bm-el-table__check .el-icon-close,.bm-el-table__dateBox .el-icon-close{position: absolute;right:15px;top:15px;font-size: 20px;cursor: pointer;}
html .bm-el-table__date{margin:20px;}
.bm-el-table__string{display: flex;align-items: center;position: relative;padding: 20px 15px;}
.bm-el-table__string .el-icon-close{position: absolute;right:15px;top:15px;font-size: 20px;cursor: pointer;}
.bm-el-table__string>button{margin-left: 20px;}
.bm-el-table__stringInput{width:200px;}
.bm-el-table__sortBox {display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;-webkit-box-align: center;-ms-flex-align: center;align-items: center;height: 22px;width: 24px;vertical-align: middle;cursor: pointer;overflow: initial;position: relative;}
.bm-el-table__sort{width: 0;height: 0;border: 6px solid transparent;position: absolute;left: 7px;}
.bm-el-table__sort.bm-el-table__asc {border-bottom-color: #c0c4cc;top: -3px;}
.bm-el-table__sort.bm-el-table__desc {border-top-color: #c0c4cc;bottom: -1px;}
</style>
