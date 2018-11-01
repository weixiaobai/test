<template>
  <div class="bm-table__box">
    <el-table class="bm-table__table" :data="data"  @selection-change="handleSelectionChange" border tooltip-effect="dark" :height="height">
      <template v-for="colConfig in colConfigs" >
        <slot v-if="colConfig.slot" :name="colConfig.slot"></slot>
        <el-table-column resizable v-if="colConfig.search" :key="colConfig.prop" v-bind="colConfig" :render-header="(h,obj)=>renderHeader(h,obj,colConfig)"></el-table-column>
        <el-table-column resizable v-else v-bind="colConfig" :key="colConfig.prop"></el-table-column>
      </template>
    </el-table>
    <template v-for="(colConfig,index) in colConfigs">
      <bm-el-table-dialog  @getlabelSearch="getlabelSearch"
        v-if="colConfig.search && showDialogIndex==index" 
        :colConfig="colConfig" 
        :timestamp="timestamp"
        :key="colConfig.prop" 
      ></bm-el-table-dialog>
    </template>
    {{labelSearch}}
    {{labelSort}}{{labelVisible}}
  </div>
</template>
<script>
export default {
  /*colConfigs：表格配置项；data:展示数据*/
  name:"bm-el-table",
  props: ['colConfigs', 'data','height'],
  data() {
    return {
      dialoglabelVisible: false,
      timestamp: new Date().getTime(),
      multipleSelection: [],//选中行
      showDialogIndex:'',
      labelSearch:{'aaa':[]},//列检索条件
      labelSort:{},//排序 
      labelVisible:{},//是否弹层显示
      tempVal:''
    }
  },
  created(){
    //初始化列检索条件
    for (var i = this.colConfigs.length - 1; i >= 0; i--) {
      if(!!this.colConfigs[i].search){
        //this.labelSearch[this.colConfigs[i].prop]='';
        if(this.colConfigs[i].search=="classify"){
          this.$set(this.labelSearch,this.colConfigs[i].prop,[]);
        }else{
          this.$set(this.labelSearch,this.colConfigs[i].prop,'');
        }
        this.$set(this.labelVisible,this.colConfigs[i].prop,false);
      }
      if(!!this.colConfigs[i].order){
        this.$set(this.labelSort,this.colConfigs[i].prop,'');
      }
    }
  },
  components: {

  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
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
            {objs.column.label}
            <el-popover v-model={this.labelVisible[conf.prop]} popper-class="bm-el-table__popover" placement="bottom" width="440" trigger="click" >
              <div class="bm-el-table__dateBox">
                <div class="title">选择时间区间 <i onClick={()=>this.labelVisible[conf.prop]=false} class="el-icon-close" ></i></div>
                <el-date-picker class="bm-el-table__date" onChange={()=>this.labelVisible[conf.prop]=false}
                  v-model={this.labelSearch[conf.prop]}
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
                <i onClick={()=>this.setSort(objs.column.property,1)} class="bm-el-table__sort bm-el-table__asc" style={{borderBottomColor:this.labelSort[objs.column.property]===1?'#1F9B83':'#c0c4cc'}}></i>
                <i onClick={()=>this.setSort(objs.column.property,-1)}  class="bm-el-table__sort bm-el-table__desc" style={{borderTopColor:this.labelSort[objs.column.property]===-1?'#1F9B83':'#c0c4cc'}}></i>
              </span> :''
            }
          </a>
        )
      }else if(conf.search=="string"){//字符串
        return (
          <a>
            {objs.column.label}
            <el-popover v-model={this.labelVisible[conf.prop]}  popper-class="bm-el-table__popover" placement="bottom" width="360" trigger="click">
              <div class="bm-el-table__string">
                <el-input size="small" class="bm-el-table__stringInput" v-model={this.labelSearch[objs.column.property]} placeholder="请输入内容"></el-input>
                <el-button type="primary" size="small" onClick={()=>this.labelVisible[conf.prop]=false}>确定</el-button>
                <i onClick={()=>this.labelVisible[conf.prop]=false} class="el-icon-close" ></i>
              </div>
              <i slot="reference" class="el-icon-search" onclick="event.stopPropagation();" />
            </el-popover>
            {
              !!conf.sort? 
              <span class="bm-el-table__sortBox">
                <i onClick={()=>this.setSort(objs.column.property,1)} class="bm-el-table__sort bm-el-table__asc" style={{borderBottomColor:this.labelSort[objs.column.property]===1?'#1F9B83':'#c0c4cc'}}></i>
                <i onClick={()=>this.setSort(objs.column.property,-1)}  class="bm-el-table__sort bm-el-table__desc" style={{borderTopColor:this.labelSort[objs.column.property]===-1?'#1F9B83':'#c0c4cc'}}></i>
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
            {objs.column.label}
            <el-popover v-model={this.labelVisible[conf.prop]}  popper-class="bm-el-table__popover" placement="bottom" width="100" trigger="click">
              <div class="bm-el-table__check">
                <el-checkbox  >全选</el-checkbox>
                <el-checkbox-group v-model={this.labelSearch[conf.prop]}>
                  {html(conf.classify)}
                </el-checkbox-group>
                
                <i onClick={()=>this.labelVisible[conf.prop]=false} class="el-icon-close" ></i>
              </div>
              <i slot="reference" class="el-icon-caret-bottom" onclick="event.stopPropagation();" />
            </el-popover>
            {
              !!conf.sort? 
              <span class="bm-el-table__sortBox">
                <i onClick={()=>this.setSort(objs.column.property,1)} class="bm-el-table__sort bm-el-table__asc" style={{borderBottomColor:this.labelSort[objs.column.property]===1?'#1F9B83':'#c0c4cc'}}></i>
                <i onClick={()=>this.setSort(objs.column.property,-1)}  class="bm-el-table__sort bm-el-table__desc" style={{borderTopColor:this.labelSort[objs.column.property]===-1?'#1F9B83':'#c0c4cc'}}></i>
              </span> :''
            }
          </a>
        )
      }
      
    },
    showdialog(index, type3) {
      this.showDialogIndex=index;
      this.timestamp=new Date().getTime();
      //console.log("二次筛选 index:" + index + "  type:" + type)
    },
    getlabelSearch({searchname,searchvalue}){
      this.labelSearch[searchname]=searchvalue;
    },
    setSort:function(name,val){//设置排序 0，1
      this.$set(this.labelSort,name,val)
    }
  }
}

</script>
<style>
.bm-table__box .el-table{text-align:center;}
.bm-table__box .el-table--border th{text-align:center;border-right:0;background: #F8F9FB;color:#333633;font-size: 16px;font-weight: inherit;}
.bm-table__box .el-table--border th i{margin-left:5px;color:#1F9B83;font-weight: bold;cursor: pointer;}
.bm-table__box .el-table__fixed-right-patch{background: #F8F9FB;}
.bm-table__box .el-table--border{border:1px solid #ddd;}
.bm-table__box .el-table td{border-color:#ddd;padding:12px 0;}
.bm-table__box .el-table th{border-color:#ddd;padding:12px 0;}
.bm-table__box .el-table__empty-block{text-align: left;text-indent: 50px;}
.bm-table__box .el-table__empty-text{width:100%;}
.bm-table__box .el-table--border th i.el-icon-caret-bottom{font-size: 22px;}

html .bm-el-table__popover{padding: 0;}

.bm-el-table__check{margin:20px;margin-right: 10px;}
.bm-el-table__check .el-checkbox{display: block;margin:5px;}
.bm-el-table__check .el-checkbox-group{max-height: 160px;overflow-y:scroll;}
.bm-el-table__dateBox .title{clear:both;background: #F7F8FA;font-size: 16px;color:#333;line-height: 50px;text-indent: 20px;}
.bm-el-table__check .el-icon-close,.bm-el-table__dateBox .el-icon-close{position: absolute;right:15px;top:15px;font-size: 20px;cursor: pointer;}
html .bm-el-table__date{margin:20px;}
.bm-el-table__string{display: flex;align-items: center;position: relative;padding: 20px 15px;}
.bm-el-table__string .el-icon-close{position: absolute;right:15px;top:15px;font-size: 20px;cursor: pointer;}
.bm-el-table__string>button{margin-left: 20px;}
.bm-el-table__stringInput{width:200px;}
.bm-el-table__sortBox {display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;
-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;
flex-direction: column;-webkit-box-align: center;-ms-flex-align: center;align-items: center;height: 22px;
width: 24px;vertical-align: middle;cursor: pointer;overflow: initial;position: relative;}
.bm-el-table__sort{width: 0;height: 0;border: 6px solid transparent;position: absolute;left: 7px;}
.bm-el-table__sort.bm-el-table__asc {border-bottom-color: #c0c4cc;top: -3px;}
.bm-el-table__sort.bm-el-table__desc {border-top-color: #c0c4cc;bottom: -1px;}
</style>
