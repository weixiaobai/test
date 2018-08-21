<template>
  <div class="table-box">
    <el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="50" fixed>
      </el-table-column>
      <el-table-column prop="id" type="expand" label="听课证号<inpput/>" show-overflow-tooltip  min-width="100">
      </el-table-column>
      <el-table-column prop="name" label="班级名称" show-overflow-tooltip  min-width="100">
      </el-table-column>
      <el-table-column prop="id" label="班级编号" show-overflow-tooltip  min-width="100">
      </el-table-column>
      <el-table-column label="时间" min-width="240" >
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="address" label="地点" show-overflow-tooltip  min-width="160">
      </el-table-column>
      <el-table-column prop="id" label="状态" show-overflow-tooltip  min-width="120">
      </el-table-column>
		<el-table-column label="操作" fixed="right" min-width="180">
	      <template slot-scope="scope">
	        <el-button
	          size="mini" type="text"
	          @click="">调课</el-button>
	        <el-button
	          size="mini"
	          type="text"
	          @click="">转班</el-button>
	          <el-button
	          size="mini"
	          type="text"
	          @click="">退班</el-button>
	          <el-button
	          size="mini"
	          type="text"
	          @click="">详情</el-button>
	      </template>
	    </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData3: [{
        date: '2018/05/03-2018/05/03 周五16:30',
        name: '二年级英语兴趣班',
        address: '上海市普陀区金沙江路 1518 弄',
        id:'BJ19993923'
      },{
        date: '2018/05/03-2018/05/03 周五16:30',
        name: '二年级英语兴趣班',
        address: '上海市普陀区金沙江路 1518 弄',
        id:'BJ19993923'
      },{
        date: '2018/05/03-2018/05/03 周五16:30',
        name: '二年级英语兴趣班',
        address: '上海市普陀区金沙江路 1518 弄',
        id:'BJ19993923'
      },{
        date: '2018/05/03-2018/05/03 周五16:30',
        name: '二年级英语兴趣班',
        address: '上海市普陀区金沙江路 1518 弄',
        id:'BJ19993923'
      },{
        date: '2018/05/03-2018/05/03 周五16:30',
        name: '二年级英语兴趣班',
        address: '上海市普陀区金沙江路 1518 弄',
        id:'BJ19993923'
      },{
        date: '2018/05/03-2018/05/03 周五16:30',
        name: '二年级英语兴趣班',
        address: '上海市普陀区金沙江路 1518 弄',
        id:'BJ19993923'
      },{
        date: '2018/05/03-2018/05/03 周五16:30',
        name: '二年级英语兴趣班',
        address: '上海市普陀区金沙江路 1518 弄',
        id:'BJ19993923'
      }],
      multipleSelection: []
    }
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
}

</script>
<style>
.table-box{padding: 10px;}
</style>
