<template>
  <div class="lefter">
    <h1 class="lefter__logo">新东方 报名系统</h1>
    <el-scrollbar class="left__scroll">
      <el-menu default-active="2" class="left__el-menu">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项2</el-menu-item>
          <el-menu-item index="1-4">选项2</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-4">选项2</el-menu-item>
          <el-menu-item index="2-3">选项2</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" class="lefter__item--1">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4" class="lefter__item--1">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
        <br>
        <br>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: ''
    }
  }
}
</script>
<style>
.lefter {height: 100%}
.left__scroll{ height: calc(100% - 50px);}
.left__scroll>.el-scrollbar__wrap{overflow-x: hidden;}
.lefter .el-menu {
  background: #37464D;
}
.lefter__logo{width:230px;background: #177E69;height: 50px;color:#fff;line-height: 50px;text-align: center;}
.lefter .el-menu--inline .el-menu-item {
  height: 40px;
  margin-top: 1px;
  line-height: 40px;
  background: #37464D;
  color: #F1F1F1;
  text-align: left;
  text-indent: 12px;
  box-shadow: 0px 0px 2px #313E46;
  border-top: 1px solid #37464D;
}
.lefter .el-menu-item.is-active {
  background: #1E8570;
  color: #F1F1F1;
  box-shadow: 0px 0px 2px #2E7667;
}
.lefter .el-menu-item:hover {
  background: #1E8570;
  box-shadow: 0px 0px 2px #2E7667;
}
.lefter .el-submenu__title,
.lefter__item--1 {
  height: 40px;
  margin-top: 1px;
  line-height: 40px;
  background: #3A4C58;
  color: #F1F1F1;
  text-align: left;
  box-shadow: 0px 0px 2px #313E46;
  border-top: 1px solid #475665;
}
.el-submenu.is-active .el-submenu__title {
  border-bottom-color: #475665;
}
.left__el-menu {
  background: none;
  border: 0;
}
.lefter .el-menu--inline .el-menu-item:before {
  content: " ";
  background: #293241;
  width: 8px;
  height: 8px;
  float: left;
  border-radius: 50%;
  margin-top: 16px;
}
.lefter .el-submenu__title i {
  color: #1E8570;
}
.lefter .el-menu-item i {
  color: #1E8570;
}
.lefter .el-menu-item.is-active i {
  color: inherit;
}
.lefter .el-menu-item:hover i {
  color: inherit;
}
.lefter .el-icon-arrow-down:before {
  content: "\E60B";
}
.el-submenu__icon-arrow {
  font-size: 16px;
  margin-top: -9px;
}
</style>