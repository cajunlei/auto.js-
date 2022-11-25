var dateh = 16;
var datem = 44;
var dates = 00;
var date = new Date();
var xth = date.getHours();
var xtm = date.getMinutes();
var xts = date.getSeconds();
var xtsj = (xth + ":" + xtm + ":" + xts);
log("系统时间:" + xtsj);

var m = 60;
var h = 60 * 60;
var xt总秒数 = (xts + xtm * m + xth * h);
log("系统总秒数:" + xt总秒数);
var sd总秒数 = (dates + datem * m + dateh * h);

sdh = parseInt(sd总秒数 / 60 / 60 % 24)//计算小时
sdm = parseInt(sd总秒数 / 60 % 60);//计算分数
sds = parseInt(sd总秒数 % 60);//计算秒数
var sdsjs = (sdh + ":" + sdm + ":" + sds);
log("设定时间:" + sdsjs);
log("设定总秒数:" + sd总秒数);

var djs秒数1 = (sd总秒数 - xt总秒数);
if (djs秒数1 < 0) {
  var djs秒数2 = (djs秒数1 + 86400);
} else {
  var djs秒数2 = djs秒数1;
}
log("倒计时秒数:" + djs秒数2);
log(typeof djs秒数2);
var djshm = (djs秒数2 * 1000);
log("倒计时毫秒:" + djshm);
log(typeof djshm);

sleep(djshm);
log("将在" + djs秒数2 + "秒后开始打卡");

// engines.execScriptFile("/sdcard/脚本/钉钉签到.js");
