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
    :data="tableData" @sort-change="show"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="date"
      label="日期"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      sortable='custom'
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      >
    </el-table-column>
    <el-table-column lable="sss"   :render-header="(h,obj)=>renderHeader(h,obj)">
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
          name: "王小1虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小5虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小4虎",
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
          <el-popover
            placement="top-start"
            title="标题"
            width="200"
            trigger="click"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
          >
            <el-date-picker
              onchange="this.show"
              v-model={this.aaa}
              type="datetime"
              placeholder="选择日期时间"
              value-format="yyyy-MM-dd HH:mm:ss"
            />
            <i
              slot="reference"
              class="el-icon-date"
              onclick="event.stopPropagation();"
            />
          </el-popover>
          <a onClick={()=>this.show2}>aaa</a>
        </div>
      );
    },
    show:function({ column, prop, order }) {
      console.log(column);
      console.log(prop+order);
    },
    show2:function(){
      alert("aaa")
    }
  }
};
</script>