<template>
  <div class="umbox box10">
    <div class="umbox__img fl">
      <img src="/static/img/test_01.jpg" alt="" style="width:120px;height:120px;">
    </div>
    <div class="umbox__info">
      <p class="umbox__list">
        <span class="umbox__info__item"><i class="icon-bm-shenfen"></i><span>B1239912</span></span>
        <span class="umbox__info__item"><i class="icon-bm-dianhua"></i>13587678765</span>
        <span class="umbox__info__item"><i class="icon-bm-icon--"></i>二年级一班</span>
        <span class="umbox__info__item"><i class="icon-bm-dizhiguanli"></i>北京海淀区中关村XXX小区<i class="el-icon-edit"></i></span>
      </p>
      <p class="umbox__num"><span>账户余额</span><span class="umbox__num--bg1">4800</span><span class="umbox__num--bg2">充值</span><span  class="umbox__num--bg2">提现</span></p>
      <p class="umbox__name">韩梅梅</p>
    </div>
    <div class="umbox__btn">
      <a href="" title="">增加班级</a><a class="umbox__btn--shop" href="" >购物车(0)</a><a class="umbox__btn--del" href="" title="">删除</a><a href="" title="">订单信息(3)</a>
    </div>
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
.umbox{padding: 20px;position: relative;}
.umbox__info{font-size:16px;line-height:20px;color:#333;min-height:120px;margin-left: 140px;display: flex; flex-direction: column-reverse;}
.umbox__name{font-size:22px;color:#333;line-height: 60px;}
.umbox__list{line-height: 20px;margin-top:20px;}
.umbox__info__item {display: flex;float: left;margin-right:15px;}
.umbox__info__item i{color:#A1C4BE;font-size: 20px;margin-right:5px;}
.umbox__info__item .el-icon-edit{margin-left: 5px;}
.umbox__num{}
.umbox__num--bg1{font-size: 13px;background: #DADADA;padding: 1px 8px;border-radius: 2px;margin-left: 10px;margin-right:30px;}
.umbox__num--bg2{font-size: 13px;background: #D19002;padding: 1px 8px;border-radius: 2px;color:#fff;margin-left: 10px;}
.umbox__btn{position: absolute;right:20px;top: calc(50% - 10px);text-align: right;font-size: 18px;}
.umbox__btn a{color:#1F9B83;text-decoration: none;line-height: 20px;display: inline-block;padding: 0px 12px;}
.umbox__btn--del{border-left:2px solid #E4E4E4;border-right:2px solid #E4E4E4;}
.umbox__btn .umbox__btn--shop{color:#333;}
</style>