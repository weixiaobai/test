<template>

    <div>
        <div>
          <el-tag
            :key="index" 
            v-for="(tag,index) in searchData.filter"
            closable
            :disable-transitions="false"
            @close="handleClose(1,index,tag)">
            {{tag.search}}
          </el-tag>
          {{searchData}}
        </div>
        <bm-el-table ref="mytable" :colConfigs="colConfigs" :data="TableData" @getSearchData="getSearchData">
            <el-table-column slot="opt" label="操作" fixed="right" min-width="120px">
                <el-button size="mini" slot-scope="{ row }" @click="showrow(row)">打印改行</el-button>
            </el-table-column>
            <template  slot="opt1">aa
              <router-link slot-scope="{ row }" :to="{'path':'/class-search/class-info'}">{{row.name}}</router-link>
            </template>
        </bm-el-table>
    </div>
</template>


<script>
import bmElTable from '@/components/table/v-table'
export default {
  components: {
    'bm-el-table':bmElTable
  },
  data() {
    return {
      searchData:{
        filter:[], //列过滤条件集合
        sort:[],   //列排序条件集合
      },
      tableData2: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        search: '',
      TableData:[
          {
            date: '2018/05/03-2018/05/03 周五16:30',
            type:'上课中',
            name: '二年级英语兴趣班',
            address: '上海市普陀区金沙江路 1518 弄',
            id:'BJ993923'
          },{
            date: '2018/05/03-2018/05/03 周五16:30',
            type:'未开课',
            name: '二年级英语兴趣班',
            address: '上海市普陀区金沙江路 1518 弄',
            id:'BJ19993923'
          },{
            date: '2018/05/03-2018/05/03 周五16:30',
            type:'结课',
            name: '二年级英语兴趣班',
            address: '上海市普陀区金沙江路 1518 弄',
            id:'BJ199923'
          },{
            date: '2018/05/03-2018/05/03 周五16:30',
            type:'未开课',
            name: '二年级英语兴趣班',
            address: '上海市普陀区金沙江路 1518 弄',
            id:'BJ19993923'
          },{
            date: '2018/05/03-2018/05/03 周五16:30',
            type:'结课',
            name: '二年级英语兴趣班',
            address: '上海市普陀区金沙江路 1518 弄',
            id:'J19993923'
          },{
            date: '2018/05/03-2018/05/03 周五16:30',
            type:'上课中',
            name: '二年级英语兴趣班',
            address: '上海市普陀区金沙江路 1518 弄',
            id:'B19993923'
          },{
            date: '2018/05/03-2018/05/03 周五16:30',
            type:'上课中',
            name: '二年级英语兴趣班',
            address: '上海市普陀区金沙江路 1518 弄',
            id:'BJ19993923'
          },{
            date: '2018/05/03-2018/05/03 周五16:30',
            type:'未开课',
            name: '二年级英语兴趣班',
            address: '上海市普陀区金沙江路 1518 弄',
            id:'BJ1999392'
          },{
            date: '2018/05/03-2018/05/03 周五16:30',
            type:'结课',
            name: '二年级英语兴趣班',
            address: '上海市普陀区金沙江路 1518 弄',
            id:'BJ1999323'
          },{
            date: '2018/05/03-2018/05/03 周五16:30',
            type:'上课中',
            name: '二年级英语兴趣班',
            address: '上海市普陀区金沙江路 1518 弄',
            id:'BJ1993923'
          }
      ],
      colConfigs:[
        { type:'selection',fixed:true,'min-width':50},
        { prop: 'id', label: '听课证号','show-overflow-tooltip':true,'min-width':120,search:"sort",sort:true,'call':true},
        { prop: 'date', label: '日期' ,'show-overflow-tooltip':true,'min-width':300,search:'date',sort:true},
        { "slot2": "opt1",prop: 'name', label: '班级','show-overflow-tooltip':true,'min-width':200,search:'string',sort:true},
        { prop: 'type', label: '状态','show-overflow-tooltip':true,'min-width':200,search:'classify',classify:["上课中","结课","未开课",1,2,3,4,5,6,7,8]},
        { prop: 'address', label: '地址' ,'show-overflow-tooltip':true,'min-width':200},
        // 模版中的元素需要对应的有 slot="opt" 属性
        { slot: 'opt'}
      ],
      radio3:''
    };
  },
  computed:{

  },

  mounted: function () {

  },
  methods:{
    getSearchData:function(obj){
      this.searchData=obj;
    },
    handleClose(type,i,tag) {
      //this.searchData.filter.splice(i, 1);
      this.$refs.mytable.delSearchItem(type,tag.prop)
    },
  }
}

</script>

<style scoped>

</style>