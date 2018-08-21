/**
 * [将订单信息提交到ga统计;订单信息包括报名学校、班级相关信息，通过与本地cookie 的订单数组比较判断订单有没有提交过]
 */
var _gaq = _gaq || [];
var xdf_ga = {}
xdf_ga.config = {
  cookie_name:'baoming_cookie',//订单数据
  options: {
    path: '/',
    expires: 1
  }
}
xdf_ga.init = function(obj) {//初始化订单
  var newobj = {
    "order_id": "",
    "school_id": "",
    "school_name": "",
    "order_money": "",
    "class_list": [{
      "class_id": "",
      "class_name": "",
      "class_fees": "",
      "student_num": ""
    }]
  }
  if (!!obj && obj.ClassListInfo && obj.ClassListInfo.length) {
    try {
      newobj.order_id=obj.Id;
      newobj.school_id=obj.SchoolId;
      newobj.school_name=obj.SchoolName;
      newobj.order_money=obj.PayMoney;
      newobj.class_list=[];
      for (var i = 0,len=obj.ClassListInfo.length; i < len; i++) {
        newobj.class_list.push({
          "class_id": obj.ClassListInfo[i].Code,
          "class_name": obj.ClassListInfo[i].Name,
          "class_fees": obj.ClassListInfo[i].Fees,
          "student_num": 1
        })
      }
      //console.log(newobj);
      xdf_ga.init_gaq(newobj);
    } catch (e) {
      console.log("xdf_ga: "+e)
    }
  }
}
xdf_ga.is_set_cookie = function(orderid) { //判断cookie有没有订单id
  var cookie_orderid=$.cookie(xdf_ga.config.cookie_name)||["000"];
  cookie_orderid=cookie_orderid.toString().split(/,/)
  if (!!cookie_orderid && 0<=cookie_orderid.indexOf(orderid)) {
    console.log("订单已提交过");
    return true;
  }else {
    cookie_orderid.push(orderid);//存最近5次订单
    $.cookie(xdf_ga.config.cookie_name,cookie_orderid.slice(-5),xdf_ga.config.options);
    console.log("新订单");
    return false;
  }
}
xdf_ga.init_gaq = function(orderinfo) {//初始化提交ga的数据
  if (!xdf_ga.is_set_cookie(orderinfo.order_id)) {
    _gaq.push(['_setAccount', 'UA-20005525-1']);
    _gaq.push(['_setDomainName', '.xdf.cn']);
    _gaq.push(['_setAllowLinker', true]);
    _gaq.push(['_setAllowHash', false]);
    _gaq.push(['_addOrganic', 'baidu', 'word']);
    _gaq.push(['_addOrganic', '360', 'q']);
    _gaq.push(['_addOrganic', 'so.com', 'q']);
    _gaq.push(['_addOrganic', 'soso', 'w']);
    _gaq.push(['_addOrganic', 'yodao', 'q']);
    _gaq.push(['_addOrganic', 'sogou', 'query']);
    _gaq.push(['_addOrganic', 'gougou', 'search']);
    _gaq.push(['_addOrganic', 'so.360.cn', 'q']);
    _gaq.push(['_addOrganic', 'haosou', 'q']);
    _gaq.push(['_setLocalGifPath', 'http://ads.staff.xdf.cn/_.gif']);
    _gaq.push(['_setLocalRemoteServerMode']);
    _gaq.push(['_trackPageview']);
    if (orderinfo.school_id == 1) { //北京
      try {
        _gaq.push(['t3._setAccount', 'UA-8946782-1']);
        _gaq.push(['t3._setDomainName', '.xdf.cn']);
        _gaq.push(['t3._setAllowLinker', true]);
        _gaq.push(['t3._setAllowHash', false]);
        _gaq.push(['t3._addOrganic', 'soso', 'w']);
        _gaq.push(['t3._addOrganic', 'yodao', 'q']);
        _gaq.push(['t3._addOrganic', 'sogou', 'query']);
        _gaq.push(['t3._addOrganic', 'gougou', 'search']);
        _gaq.push(['t3._trackPageview']);
        _gaq.push([
          't3._addTrans', //北京学校订单基本信息跟踪器
          orderinfo.order_id, //订单号（动态调用）
          '新东方',
          orderinfo.order_money, //支付总价（动态调用）
          '0',
          '0',
          '北京市',
          '北京',
          '中国'
        ]);
        for (var i = 0, len = orderinfo.class_list.length; i <= len; i++) {
          _gaq.push([
            't3._addItem', //北京学校订单明细跟踪器，订单中一个班号一个跟踪器，多个班级多个跟踪器
            orderinfo.order_id, //订单号（动态调用）
            orderinfo.class_list[i].class_id, //班号（动态调用）
            orderinfo.class_list[i].class_name, //班级名称（动态调用）
            '正常报名', //固定值
            orderinfo.class_list[i].class_fees, //原始单价（动态调用）
            orderinfo.class_list[i].student_num //学生数量，即购买该班的数量，一班多报需累加（动态调用）
          ]);
        }
        _gaq.push(['t3._trackTrans']);
      } catch (err) {}
    }
    _gaq.push([
      '_addTrans', //集团订单基本信息跟踪器
      orderinfo.order_id, //订单号（动态调用）
      '新东方',
      orderinfo.order_money, //支付总价（动态调用）
      '0',
      '0',
      '北京市',
      '北京',
      '中国'
    ]);
    for (var i = 0, len = orderinfo.class_list.length; i < len; i++) {
      //console.log(orderinfo.class_list);
      _gaq.push([
        '_addItem', //北京学校订单明细跟踪器，订单中一个班号一个跟踪器，多个班级多个跟踪器
        orderinfo.order_id, //订单号（动态调用）
        orderinfo.class_list[i].class_id, //班号（动态调用）
        orderinfo.class_list[i].class_name, //班级名称（动态调用）
        orderinfo.school_name, //学校名称（动态调用）
        orderinfo.class_list[i].class_fees, //原始单价（动态调用）
        orderinfo.class_list[i].student_num //学生数量，即购买该班的数量，一班多报需累加（动态调用）
      ]);
    }
    _gaq.push(['_trackTrans']);
    xdf_ga.add_gajs(); //加载ga.js
  }
}
xdf_ga.add_gajs = function() { //加载ga.js
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = 'http://file.xdf.cn/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
};
