<template>
<el-aside width="auto">
  <div :class="isCollapse?'lefter lefter--isclose':'lefter'">
    <el-scrollbar class="left__scroll" :class="isCollapse?'left__el-menu--close':''">
      <el-menu :default-active="activeMenu" class="left__el-menu" router  @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <template  v-for="menu in menus">
          <el-menu-item class="lefter__item--1" v-if="!menu.children"
            :index="menu.route"
            :key="menu.route">
            <i class="el-icon- icon-bm-shouye1"></i><span slot="title">{{menu.name}}</span><i v-show="!isCollapse" class="el-icon-caret-left"></i>
          </el-menu-item>
          <el-submenu :index="menu.route" v-else>
            <template slot="title">
              <i class="el-icon-time"></i>
              <span slot="title">{{menu.name}}</span>
            </template>
            <el-menu-item  v-for="(child,index2) in menu.children" :index="child.route" :key="child.route">{{child.name}}<i v-show="!isCollapse" class="el-icon-caret-left"></i></el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</el-aside>
</template>
<script>
export default {
  data() {
    return {
      isCollapse:false,
      menus:[
        {
          route: '1',
          name: 'test demo',
          children:[
            { route: '/V-model', name: 'v-model'},
            { route: '/jsx', name: 'jsx'},
            { route: '/class-register-success', name: '报班成功'},
            { route: '/test', name: 'test'}
          ]
        }
      ],
      restaurants: [],
      searchNav: ''
    }
  },
  computed: {
    tablist () {
        return this.$store.state.tablist;
    },
    activeMenu(){
      return this.$route.path.replace(/(\/[^\/]*).*/,'$1')
    }
  },
  mounted () {
  },
  methods: {
      /*左边栏收起展开*/
      navIsCollapse:function(){
        this.isCollapse=!this.isCollapse
      },
      /*左边栏收起时调用*/
      handleClose(key, keyPath) {
        //console.log(key, keyPath);
      },
      /*左边栏展开时调用*/
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      /*导航检索*/
      querySearch(queryString, cb) {
        var restaurants = this.menus[1].children;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      /*导航检索选中时触发*/
      handleSelect(item) {
        //console.log(item);
        this.searchNav=item.name
        this.$router.push({"path": item.route,"query":''});
      }
  },
  watch: {
    'this.$route.path':function(newVal,oldVal){
      //alert(this.$route.path)
    }
  }
}
</script>
<style>
.lefter {height: 100%;width:230px;animation:openmove .6s;overflow-x: hidden;}
.lefter--isclose{overflow-y: hidden;overflow-x: hidden;width:64px;animation:closemove .2s}
@keyframes openmove{from{width:64px;}to{width:230px;}}
@keyframes closemove{from{width:230px;}to{width:64px;}}
html .el-menu-item{line-height: 40px;height:40px;}
.left__scroll{ height:100%;}
.left__scroll>.el-scrollbar__wrap{overflow-x: hidden;}
.lefter .el-menu {background: #37464D;border: 0;}
.lefter__logo{width:230px;background: #177E69;height: 50px;color:#fff;line-height: 50px;display: flex;align-items: center;}
.lefter__logo i{margin-left:20px;font-size: 18px;cursor: pointer;}
.lefter__logo img{margin-left:20px;}
.lefter__logo .erplogo{margin-left:15px;}
.lefter__logo span{margin-left:15px;color:#fff;font-size: 14px;}
.lefter__search{height:62px;text-align: center;display: flex;align-items: center;}
.lefter__search .el-autocomplete{width:210px;margin:auto;}
.lefter__search  .el-input__inner { background: #28323E;color:#fff;border:1px solid #28323E;border-radius: 5px;}
.lefter .el-menu--inline .el-menu-item {height: 40px;margin-top: 1px;line-height: 40px;background: #37464D;color: #ffffff;text-align: left;text-indent: 12px;box-shadow: 0px 0px 2px #313E46;border-top: 1px solid #37464D;}
.lefter .el-menu-item.is-active {background: #1E8570;color: #ffffff;box-shadow: 0px 0px 2px #2E7667;}
.lefter .el-menu-item .el-icon-caret-left {display: none;}
.lefter .el-menu-item.is-active .el-icon-caret-left {display:block;position: absolute;right: 0px;top: 6px;font-size: 26px;}
.lefter .el-menu-item:hover {background: #1E8570;box-shadow: 0px 0px 2px #2E7667;}
.lefter .el-submenu__title,
.lefter .lefter__item--1 {height: 40px;margin-top: 1px;line-height: 40px;background: #3A4C58;color: #ffffff;text-align: left;box-shadow: 0px 0px 2px #313E46;border-top: 1px solid #475665;}
.lefter .lefter__item--1.is-active .el-icon-caret-left {display:block;position: absolute;right: 0px;top: 6px;font-size: 26px;width: 17px; margin: 0;}
.lefter .el-submenu__title:focus,.lefter .el-submenu__title:hover {outline: 0;background: #3A4C58;}
.el-submenu.is-active .el-submenu__title {border-bottom-color: #475665;}
.left__el-menu {background: none;border: 0;}
.lefter .el-menu--inline .el-menu-item:before {content: " ";background: #293241;width: 8px;height: 8px;float: left;border-radius: 50%;margin-top: 16px;}
.lefter .el-submenu__title i {color: #1E8570;}
.lefter .el-menu-item i {color: #1E8570;}
.lefter .el-menu-item.is-active i {color: inherit;}
.lefter .el-menu-item:hover i {color: inherit;}
.lefter .el-icon-arrow-down:before {content: "\E60B";}
.el-submenu__icon-arrow {font-size: 16px;margin-top: -9px;}
/*处理导航关闭文字消失延迟问题*/
.left__el-menu--close span{display: none;}
.left__el-menu--close .el-menu-item.is-active .el-icon-caret-left{display: none;}
.left__el-menu--close .el-menu--inline .el-menu-item{display: none;}
.lefter .el-scrollbar__view{overflow: hidden;}
/*处理导航关闭文字消失延迟问题 end*/
</style>