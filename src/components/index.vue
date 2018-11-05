<template>
    <!--搜索学员-->
    <el-scrollbar class="page-component__scroll">
      <div style="height: 100%">
      <div class="search-user box10">
        <el-input  autofocus class="search-user__text" size="small"
          placeholder="请输入学员号/手机号/姓名/听课证号/身份证号"
          v-model="input23">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-button type="primary" size="small" class="search-user__btn">查找</el-button>
        <span class="search-user__abs">新学员？</span>
        <a class="search-user__btn2" href="javascript:;">新建学员信息</a>
      </div>
      <!--搜索学员 end-->
      <!--搜索课程-->
      <div class="search-class box10">
        <el-select v-model="value8" class="search-class__select" size="small" filterable placeholder="请选择">
          <el-option
            v-for="item in select1"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="value8" class="search-class__select" size="small" filterable placeholder="班级">
          <el-option
            v-for="item in select2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="value8" class="search-class__select"  size="small" filterable placeholder="年级">
          <el-option
            v-for="item in select2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="value8" class="search-class__select"  size="small" filterable placeholder="学科">
          <el-option
            v-for="item in select1"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button type="primary" size="small" class="search-class__btn">搜索</el-button>
      </div>
      <!--搜索课程 end-->
      <!--常用功能-->
      <div class="my-function box10">
        <p class="my-function__title">常用功能</p>
        <div class="my-function__list">
          <el-badge is-dot class="my-function__item">
            <a href="javascript:;" title="">
              <i class="el-icon-search"></i>
              <span>报班</span>
            </a>
          </el-badge>
          <el-badge is-dot class="my-function__item">
            <a href="javascript:;" title="">
              <i class="el-icon-search"></i>
              <span>报班</span>
            </a>
          </el-badge>
          <el-badge is-dot class="my-function__item">
            <a href="javascript:;" title="">
              <i class="el-icon-search"></i>
              <span>报班</span>
            </a>
          </el-badge>
          <el-badge is-dot class="my-function__item">
            <a href="javascript:;" title="">
              <i class="el-icon-search"></i>
              <span>报班</span>
            </a>
          </el-badge>
          <el-badge is-dot class="my-function__item">
            <a href="javascript:;" title="">
              <i class="el-icon-search"></i>
              <span>报班</span>
            </a>
          </el-badge>
          <div class="my-function__item my-function__item--add">
            <i class="el-icon-plus "></i>
          </div>
        </div>
      </div>
      <!--常用功能 end-->
      <div style="margin:10px;" >
        <el-row :gutter="10">
          <el-col :span="12">
            <div class="news_box">
              <p class="news_box__title">最近打开</p>
              <div class="news_box__list">
                <ul>
                  <li class="news_box__item">
                    <a class="news_box__item__title" href="" title="">ladsjfl，卡萨丁就好啦收到就好，L接电话那是ladsjfl，卡萨丁就好啦收到就好，L接电话那是</a>
                    <a class="news_box__item__btn news_box__item__btn--green" href="" title="">一键退班</a>
                  </li>
                  <li class="news_box__item">
                    <a class="news_box__item__title" href="" title="">ladsjfl，卡萨丁就好啦收到就好，L接电话那是ladsjfl，卡萨丁就好啦收到就好，L接电话那是</a>
                    <a class="news_box__item__btn news_box__item__btn--green" href="" title="">一键退班</a>
                  </li>
                  <li class="news_box__item">
                    <a class="news_box__item__title" href="" title="">ladsjfl，卡萨丁就好啦收到就好，L接电话那是ladsjfl，卡萨丁就好啦收到就好，L接电话那是</a>
                    <a class="news_box__item__btn news_box__item__btn--green" href="" title="">一键退班</a>
                  </li>
                  <li class="news_box__item">
                    <a class="news_box__item__title" href="" title="">ladsjfl，卡萨丁就好啦收到就好，L接电话那是ladsjfl，卡萨丁就好啦收到就好，L接电话那是</a>
                    <a class="news_box__item__btn news_box__item__btn--green" href="" title="">一键退班</a>
                  </li>
                  <li class="news_box__item">
                    <a class="news_box__item__title" href="" title="">ladsjfl，卡萨丁就好啦收到就好，L接电话那是ladsjfl，卡萨丁就好啦收到就好，L接电话那是</a>
                    <a class="news_box__item__btn news_box__item__btn--green" href="" title="">一键退班</a>
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="news_box">
              <p class="news_box__title">公告</p>
              <div class="news_box__list">
                <ul>
                  <li class="news_box__item">
                    <a class="news_box__item__title" href="" title="">ladsjfl，卡萨丁就好啦收到就好，L接电话那是ladsjfl，卡萨丁就好啦收到就好，L接电话那是</a>
                    <a class="news_box__item__btn news_box__item__btn--green" href="" title="">一键退班</a>
                  </li>
                  <li class="news_box__item">
                    <a class="news_box__item__title" href="" title="">ladsjfl，卡萨丁就好啦收到就好，L接电话那是ladsjfl，卡萨丁就好啦收到就好，L接电话那是</a>
                    <a class="news_box__item__btn news_box__item__btn--green" href="" title="">一键退班</a>
                  </li>
                  <li class="news_box__item">
                    <a class="news_box__item__title" href="" title="">ladsjfl，卡萨丁就好啦收到就好，L接电话那是ladsjfl，卡萨丁就好啦收到就好，L接电话那是</a>
                    <a class="news_box__item__btn news_box__item__btn--green" href="" title="">一键退班</a>
                  </li>
                  <li class="news_box__item">
                    <a class="news_box__item__title" href="" title="">ladsjfl，卡萨丁就好啦收到就好，L接电话那是ladsjfl，卡萨丁就好啦收到就好，L接电话那是</a>
                    <a class="news_box__item__btn news_box__item__btn--green" href="" title="">一键退班</a>
                  </li>
                  <li class="news_box__item">
                    <a class="news_box__item__title" href="" title="">ladsjfl，卡萨丁就好啦收到就好，L接电话那是ladsjfl，卡萨丁就好啦收到就好，L接电话那是</a>
                    <a class="news_box__item__btn news_box__item__btn--green" href="" title="">一键退班</a>
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
            </div>
    </el-scrollbar>
</template>
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      input23:'',
      value8:'',
      select1: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      select2: [
        {
          value: '选项1',
          label: '一年级'
        }, {
          value: '选项2',
          label: '二年级'
        }, {
          value: '选项3',
          label: '三年级'
        }, {
          value: '选项4',
          label: '四年级'
        }, {
          value: '选项5',
          label: '五年级'
        }]
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.search-user{height:98px;display: flex;align-items: center;}
.search-user__text{width:390px;margin-left:20px;margin-right:10px;}
.search-user__btn,.search-class__btn{width:75px;font-size:14px;background: #1F9B83;padding:8px;border:1px solid #14846E;}
.search-user__btn:active .search-class__btn:active{
    background: #177E69;
    border-color: #177E69;
}
.search-user__btn:hover,.search-user__btn:focus ,.search-class__btn:hover,.search-class__btn:focus {
    background: #1CAF93;
    border-color: #1CAF93;
}
.search-user__abs{margin-left:30px;color:#676769;}
.search-user__btn2{color:#1F9B83;text-decoration: underline;}
.search-class{height:68px;display: flex;align-items: center;padding-left:20px;}
.search-class__select{width:158px;margin-right:9px;}
.search-class__select .el-input.is-focus .el-input__inner {
    border-color: #14846E;
}
.my-function{background: #FFFFFF;}
.my-function__title{background: #F8F9FB; font-size:18px;color:#333;line-height: 48px;border-bottom:1px solid #DDDDDD;padding-left:20px;
}
.my-function__list{padding:29px;overflow: hidden;}
.my-function__item{width:118px;height:118px;border:1px solid #D4E5F7;margin-right:18px;float:left;}
.my-function__item a{text-align:center;text-decoration: none;}
.my-function__item a i{width:60px;height:60px;display: block;margin:auto;margin-top:20px;}
.my-function__item a span{line-height: 20px;display:block;margin:auto;text-align: center;font-size:16px;color:#333;}
.my-function__item .el-badge__content.is-fixed.is-dot { right: 10px;}
.my-function__item .el-badge__content.is-dot {height: 18px;width: 18px;background: #D8534E;}
.my-function__item--add .el-icon-plus{font-size:26px;cursor: pointer;color:#CECECE;font-weight: bold;}
.my-function__item--add{ display: flex;align-items: center;justify-content: center;background: #F5F5F5;border-color:#F5F5F5;}
.news_box{border:1px solid #DDDDDD;}
.news_box__title{background: #F8F9FB; font-size:18px;color:#333;line-height: 48px;border-bottom:1px solid #DDDDDD;padding-left:20px;
}
.news_box__list{padding:20px 20px 0 20px;background: #FFFFFF;}
.news_box__item{line-height: 50px;font-size:15px;position:relative;background: #F8F9FB;margin-bottom:10px;}
.news_box__item__title{text-decoration:none;color:#333;margin-right:120px;display: block;text-indent:1em;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.news_box__item__btn{border:1px solid #F8F9FB;border-radius:5px;width:86px;height:30px;text-align:center;line-height:30px;position: absolute;right:10px;top:10px;text-decoration: none;}
.news_box__item__btn--green{background: #21B38F;color:#f5f5f5;border-color:#008B8E;}
.page-component__scroll {
    height: calc(100% - 100px);
}
.page-component__scroll>.el-scrollbar__wrap{overflow-x: hidden;}



</style>
