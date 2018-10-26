<template>
<div>
    <p>{{aaa}}
       <el-date-picker
            v-model="aaa"
            type="datetime"
            placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss">
        </el-date-picker>
    </p>

    <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
        label="日期"
        width="180">
        <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
        </el-table-column>
        <el-table-column
        label="姓名"
        width="180">
        <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
            </el-popover>
        </template>
        </el-table-column>
        <el-table-column  :render-header="(h,obj)=>renderHeader(h,obj)">
        <template slot-scope="scope">
            <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      aaa: ""
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    /*自定义表头 h、objs:{$index,column}(element-UI默认项) type:表头类型*/
    renderHeader2(h, objs) {
      var that = this;
      var icons = {
        date: "el-icon-date",
        string: "el-icon-search"
      };
      //console.log(objs);
      //console.log('index' + objs.$index + "label" + objs.column.label)
      return h("span", { class: "table_item" }, [
        objs.column.label,
        h("i", {
          class: icons["date"],
          on: {
            click: function() {
              that.showdialog(objs.$index, type);
            }
          }
        })
      ]);
    },
    renderHeader(h, objs) {
      var that = this;
      return (
        <div>
            <el-date-picker
                v-model={this.aaa}
                type="datetime"
                placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss">
            </el-date-picker>
        </div>
      );
    }
  }
};
</script>