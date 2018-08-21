<template>
  <div class="header">
    <p class="header__login-info fl">
      <i><img src="" alt=""></i>
      <span>张大仙</span>
      <span class="header__login-info--school">北京学校 中关村校区{{aaa}}</span>
    </p>
    <ul class="header__tool fr">
      <li><a href="javascript:;" title="系统">系统</a></li>
      <li><a class="header__loginout" href="avascript:;" title="退出">退出</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['bbb'],
  data () {
    return {
      aaa: this.bbb
    }
  }
}
</script>

<style >
  .header{height: 50px; background-color: #1F9B83;color: #333;text-align: center;padding: 0px;line-height: 50px;}
  .header__login-info{color:#fff;display: flex;align-items: center;}
  .header__login-info i{float: left;width: 30px;height: 30px;border:1px solid #1F8470;border-radius: 50%;margin-left:15px;}
  .header__login-info span{margin-left: 12px;}
  .header__login-info--school{padding:0 5px;background:#1F8470;border-radius: 10px;line-height: 22px; }
  .header__tool{width:100px;height: 50px;}
  .header__tool li{display:block;width: 50%;float:left;line-height: 50px; text-align: center;}
  .header__tool a{display:block;line-height: 50px; color: #fff;text-decoration: none;background: #1F8F79;font-size:14px;}
  .header__tool .loginout{background: #1F8570;}
</style>
