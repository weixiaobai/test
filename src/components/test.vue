<template>
  <div>
    <user-msg-box></user-msg-box>
    <div class="box10" style="border-top:0;margin-top:0px;padding:14px 20px;">
      <el-button type="primary" class=" btn-color1">报班</el-button>
      <el-button type="primary" class=" btn-color1">优惠重算</el-button>
      <el-button type="primary" class=" btn-color1">教材</el-button>
      <el-button type="primary" class=" btn-color1">优惠</el-button>
      <el-button type="primary" class=" btn-color1">未支付订单</el-button>
    </div>
    <!--班级检索-->
    <div style="padding: 20px 0 0 10px;">
       <el-checkbox v-model="input" class="checkbox-color1" true-label="11"><span>团报优惠：卡收到货了，阿斯蒂芬蓝色大海</span></el-checkbox>
       
    </div>
    <div class="class-list box10">
      <el-row class="class-list__item">
        <el-col :span="4">
          <div class="">
            <p class="class-list__item__id">BJ1010293</p>
            <p class="class-list__item__title">小学英语暑期提高班</p>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="">
            <span class="class-list__item__text1">开课日期：<a>2018-12-12/1021-12-12</a></span>
            <span class="class-list__item__text1">上课时间：<a>12:00—16:00</a></span>
            <span class="class-list__item__text1">地点：<a>科贸大厦A座1201</a></span>
            <span class="class-list__item__text1">教师：<a>曾漂亮</a></span>
            <span class="class-list__item__text1">总课时：<a>32</a></span>
            <span class="class-list__item__text1">以上总课次：<a>2/32</a></span>
            <span class="class-list__item__text1">教材费：<a>100</a></span>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="class-list__align-r">
            <p class="class-list__item__text2">学费<a>￥3000</a></p>
            <p><span class="class-list__item__text3">可报名额20/32</span></p>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="class-list__align-r">
            <el-button type="primary" class="class-list__item__btn btn-color1">加入购物车</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row class="class-list__item" type="flex" justify="space-between">
        <el-col :span="4">
          <div class="">
            <p class="class-list__item__id">BJ1010293</p>
            <p class="class-list__item__title">小学英语暑期提高班</p>
          </div>
        </el-col>
        <el-col :span="13">
          <div class="">
            <span class="class-list__item__text1">开课日期：<a>2018-12-12/1021-12-12</a></span>
            <span class="class-list__item__text1">上课时间：<a>12:00—16:00</a></span>
            <span class="class-list__item__text1">地点：<a>科贸大厦A座1201</a></span>
            <span class="class-list__item__text1">教师：<a>曾漂亮</a></span>
            <span class="class-list__item__text1">总课时：<a>32</a></span>
            <span class="class-list__item__text1">以上总课次：<a>2/32</a></span>
            <span class="class-list__item__text1">教材费：<a>100</a></span>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="class-list__align-r">
            <p class="class-list__item__text2">学费<a>￥3000</a></p>
            <p><span class="class-list__item__text3">可报名额20/32</span></p>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="class-list__align-r">
            <el-button type="primary" class="class-list__item__btn btn-color1">加入购物车</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row class="class-list__item">
      	<el-col :span="1">
          <div class="">
            <el-checkbox v-model="input" class="checkbox-color1" true-label="11"></el-checkbox>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="">
            <p class="class-list__item__id">BJ1010293</p>
            <p class="class-list__item__title">小学英语暑期提高班</p>
          </div>
        </el-col>
        <el-col :span="13">
          <div class="">
            <span class="class-list__item__text1">开课日期：<a>2018-12-12/1021-12-12</a></span>
            <span class="class-list__item__text1">上课时间：<a>12:00—16:00</a></span>
            <span class="class-list__item__text1">地点：<a>科贸大厦A座1201</a></span>
            <span class="class-list__item__text1">教师：<a>曾漂亮</a></span>
            <span class="class-list__item__text1">总课时：<a>32</a></span>
            <span class="class-list__item__text1">以上总课次：<a>2/32</a></span>
            <span class="class-list__item__text1">教材费：<a>100</a></span>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="class-list__align-r">
            <p class="class-list__item__text2">学费<a>￥3000</a></p>
            <p><span class="class-list__item__text3">可报名额20/32</span></p>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="class-list__align-r">
            <el-button type="primary" class="class-list__item__btn btn-color1">加入购物车</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <!--班级检索end-->
    <div class="order-notes" >
    	<div class="order-notes__box fl">
    		<p>
    			<el-checkbox v-model="input" class="checkbox-color1" true-label="11">发送短信</el-checkbox>
				<el-checkbox v-model="input" class="checkbox-color1" true-label="11">开具发票</el-checkbox>
    		</p>
    		<p>
	    		<el-checkbox v-model="input" class="checkbox-color1" true-label="11">发送短信</el-checkbox>
				<el-checkbox v-model="input" class="checkbox-color1" true-label="11">配送地址：北京胜利大街铝合金阿森纳</el-checkbox>
    		</p>
    	</div>
    	<div class="order-notes__box fr">
    		<span class="order-notes__box__tag">备注：</span>
    		<el-input type="textarea" :rows="2" placeholder="请输备注" v-model="textarea">
			</el-input>
    	</div>
		
    </div>
    <!--优惠券-->
    <div class="box0 coupon-msg">
      <div class="">
        <p class="coupon-msg__pop">优惠券： 
        	<el-popover placement="bottom"  trigger="click" title="可用优惠券（4）">
			  <div class="coupon-cardbox">
			  	<div class="coupon-card__item fl">
			  		<p class="coupon-card__item__id">代金券<span>(JBS1283912)</span></p>
			  		<p class="coupon-card__item__title">小学数学专用</p>
			  		<p class="coupon-card__item__time">有效期<span>2017.09.30-2018.03.22</span></p>
			  		<p class="coupon-card__item__num">$200</p>
			  	</div>
			  	<div class="coupon-card__item fl">
			  		<p class="coupon-card__item__id">代金券<span>(JBS1283912)</span></p>
			  		<p class="coupon-card__item__title">小学数学专用</p>
			  		<p class="coupon-card__item__time">有效期<span>2017.09.30-2018.03.22</span></p>
			  		<p class="coupon-card__item__num">$200</p>
			  	</div>
			  	<div class="coupon-card__item fl">
			  		<p class="coupon-card__item__id">代金券<span>(JBS1283912)</span></p>
			  		<p class="coupon-card__item__title">小学数学专用</p>
			  		<p class="coupon-card__item__time">有效期<span>2017.09.30-2018.03.22</span></p>
			  		<p class="coupon-card__item__num">$200</p>
			  	</div>
			  	<div class="coupon-card__item fl">
			  		<p class="coupon-card__item__id">代金券<span>(JBS1283912)</span></p>
			  		<p class="coupon-card__item__title">小学数学专用</p>
			  		<p class="coupon-card__item__time">有效期<span>2017.09.30-2018.03.22</span></p>
			  		<p class="coupon-card__item__num">$200</p>
			  	</div>
			  	<div class="coupon-card__item fl">
			  		<p class="coupon-card__item__id">代金券<span>(JBS1283912)</span></p>
			  		<p class="coupon-card__item__title">小学数学专用</p>
			  		<p class="coupon-card__item__time">有效期<span>2017.09.30-2018.03.22</span></p>
			  		<p class="coupon-card__item__num">$200</p>
			  	</div>
			  	<div class="coupon-card__item fl">
			  		<p class="coupon-card__item__id">代金券<span>(JBS1283912)</span></p>
			  		<p class="coupon-card__item__title">小学数学专用</p>
			  		<p class="coupon-card__item__time">有效期<span>2017.09.30-2018.03.22</span></p>
			  		<p class="coupon-card__item__num">$200</p>
			  	</div>
			  </div>
			  <el-button  slot="reference">可用优惠券（4）</el-button>
			</el-popover>
		</p>
		<p class="coupon-msg__item1">
		  <span>手动添加</span>
		  <el-input placeholder="请输验证码" v-model="input" class="coupon-msg__select" size="small" >
		    <el-select v-model="select" slot="prepend" placeholder="请选择" size="small" >
		      <el-option label="代金券1" value="1"></el-option>
		      <el-option label="代金券2" value="2"></el-option>
		      <el-option label="代金券3" value="3"></el-option>
		    </el-select>
		    <el-button slot="append" size="small" >确定</el-button>
		  </el-input>
		</p>
		<p class="coupon-msg__coupon">
			<div class="coupon-card__item coupon-card__item--2 fl">
		  		<p class="coupon-card__item__id">代金券<span>(JBS1283912)</span></p>
		  		<p class="coupon-card__item__title">小学数学专用</p>
		  		<p class="coupon-card__item__time">有效期<span>2017.09.30-2018.03.22</span></p>
		  		<p class="coupon-card__item__num">$200</p>
		  		<i class="el-icon-close"></i>
		  	</div>
		  	<div class="coupon-card__item coupon-card__item--2 fl">
		  		<p class="coupon-card__item__id">代金券<span>(JBS1283912)</span></p>
		  		<p class="coupon-card__item__title">小学数学专用</p>
		  		<p class="coupon-card__item__time">有效期<span>2017.09.30-2018.03.22</span></p>
		  		<p class="coupon-card__item__num">$200</p>
		  		<i class="el-icon-close"></i>
		  	</div>
		  	
		</p>
	</div>
	<div class="coupon-msg__r">
        <div>
          <p class="coupon-msg__item2">合计：<a>￥3000</a></p>
          <p class="coupon-msg__item3"><a href="" title="">费用详情</a><span>原价￥5600</span><span>已优惠￥5600</span></p>
        </div>
        <el-button type="primary" class="coupon-msg__btn btn-color1">追加优惠</el-button>
        <el-button type="primary" class="coupon-msg__btn btn-color1">确认支付</el-button>
      </div>
    </div>
    <!--优惠券end-->
  </div>
</template>
<script>
import usermsgbox from '../components/common/user-msg-box'
import lefter from '../components/common/lefter'
export default {
  name: 'App',
  data() {
    return {
      input:'',
      select:''
    };
  },
  components: {
    'user-msg-box': usermsgbox,
    'v-lefter': lefter
  }
}

</script>
<style>
.class-list{background: #F9FFFE;}
.class-list .class-list__item:nth-child(1){border: 0;}
.class-list__item{color: #333; display: flex; align-items: center; padding: 16px 20px; border-top: 1px solid #E9ECEB; line-height: 26px;}
.class-list__item__text1{margin-right: 10px; display: inline-block;}
.class-list__item__text1 a{text-decoration: none; font-size: 13px; font-weight: bold; background: #DDDDDD; padding: 0px 5px; border-radius: 2px;}
.class-list__item__id{color: #1F9B83; font-size: 18px;}
.class-list__item__title{font-size: 16px;}
.class-list__item__text2 a{color: #1F9B83; font-size: 18px; font-weight: bold;}
.class-list__item__text3{color: #f5f5f5; text-decoration: none; font-size: 12px; font-weight: bold; background: #D08F03; padding: 0px 5px; border-radius: 2px;}
.class-list__item__btn{padding: 15px 10px;}
.class-list__align-r{text-align: right;}
.coupon-msg{padding: 20px 5%;background: #fff;line-height: 36px;font-size: 16px;position: relative;}
.coupon-msg__r{display: flex; align-items: center;position:absolute;right:5%;top: calc(50% - 40px);}
.coupon-msg__pop {}
.coupon-msg__pop button{border:0;padding: 0;font-size: 16px;text-decoration: underline;background: none;color:#1F9B83;}
.coupon-msg__pop button:hover{background:none;color:#1CAF93;}
.coupon-msg__item1{}
.coupon-msg__item1 .coupon-msg__select{width:400px;margin-left:10px;}
.coupon-msg__item1 .el-select{width:120px;}
.coupon-msg__item2,.coupon-msg__item3{text-align: right;}
.coupon-msg__item2 a{color:#E14F1E;font-size: 36px;}
.coupon-msg__item3 a{color:#1F9B83;text-decoration: none;}
.coupon-msg__item3 span{padding: 0 8px;border-left:1px solid #DDDDDD;}
.coupon-msg__item3 span:nth-child(2){border:0;}
.coupon-msg__btn{padding: 15px 15px;margin-left:20px;}
.coupon-cardbox{margin:-10px 0px 0px -10px;max-width: 480px;}
.coupon-card__item{margin:10px 0 0 10px;width: 230px;height:100px;background: #EFF0F5;font-size:16px;line-height: 26px;position: relative;}
.coupon-card__item:hover{background: #CEE7E1;}
.coupon-card__item__id{font-size: 14px;margin-left:10px;color:#333;line-height: 32px;}
.coupon-card__item__id span{color:#999;}
.coupon-card__item__title{font-size: 16px;color:#000;margin:15px 0 0 10px;}
.coupon-card__item__time{font-size: 12px;margin-left:10px;color:#333;}
.coupon-card__item__num{position: absolute;line-height: 100px;right:20px;top:0;color:#1F9B83;font-size:22px;}
.coupon-msg__coupon{margin-top:10px;}
.coupon-card__item--2{width: 230px;height:80px;line-height: 22px;margin:0 10px 0 0;}
.coupon-card__item--2  .coupon-card__item__title{margin:0 0 0 10px;}
.coupon-card__item--2  .coupon-card__item__num{line-height: 80px;}
.coupon-card__item--2 .el-icon-close{cursor:pointer;background: #DEDEDE;position: absolute;top:4px;right:4px; }
.coupon-card__item--2:hover .el-icon-close{background: #ADD6CE;}
.order-notes{padding: 40px;font-size: 16px;}
.order-notes:after {content:""; clear:both; display:block;}
.order-notes__box{width:48%;}
.order-notes__box label{line-height: 30px;}
.order-notes__box__tag{float: left;width: 50px;color:#333;}
.order-notes .el-textarea{display:block;margin-left:50px;width:auto;}
.order-notes .el-textarea__inner:focus{border-color:#1F9B83;}
</style>
