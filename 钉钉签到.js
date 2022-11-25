var 钉钉 = "com.alibaba.android.rimet"
var sleeptime = 1000;
if (!device.isScreenOn()) {
  解锁();
  log("已解锁手机");
}

console.show();

device.wakeUpIfNeeded();
关闭钉钉();

launch(钉钉);
log('打开钉钉');
sleep(sleeptime);

var 工作台 = className("android.widget.TextView").text("工作台").findOne().bounds();
log('进入工作台：' + click(工作台.centerX(), 工作台.centerY()));
sleep(sleeptime);

log("进入签到页面：" + text("签到").findOne().click());
sleep(sleeptime);

text("地点微调").findOne();
log("定位成功");
sleep(sleeptime);

var 签到 = className("android.view.View").text("签到").findOne().bounds();
log("点击签到：" + click(签到.centerX(), 签到.centerY()));
sleep(sleeptime);

text("你的签到信息，仅提交后对你的主管及同事可见").findOne();
sleep(sleeptime);
var 提交 = className("android.widget.Button").text("提交").findOne().bounds();
log("点击提交：" + click(提交.centerX(), 提交.centerY()));
sleep(sleeptime);

var 统计 = text("统计").findOne().bounds();
log("点击统计：" + click(统计.centerX(), 统计.centerY()));
sleep(sleeptime);

// 三指下滑截图
gestures([350, [300, 400], [300, 1400]],
  [350, [600, 400], [600, 1400]],
  [350, [900, 400], [900, 1400]]
);
log("截图签到结果");
sleep(sleeptime);

关闭钉钉();

console.hide();

function 返回桌面() {
  home(); sleep(500);
  log("返回桌面");
}
function 关闭钉钉() {
  返回桌面();
  var sleeptimegb = 500;
  app.openAppSetting(钉钉); sleep(sleeptimegb);
  text("强行停止").findOne().click(); sleep(sleeptimegb);
  text("强行停止").findOne().click(); sleep(sleeptimegb);
  log("关闭钉钉");
  返回桌面();
}

function 解锁() {
  var sleeptimejs = 500;
  device.wakeUp(); sleep(sleeptimejs);
  swipe(500, 2000, 500, 500, 500); sleep(sleeptimejs);
  var password = "288299"
  for (var i = 0; i < password.length; i++) {
    var p = desc(password[i].toString()).findOne().bounds();
    click(p.centerX(), p.centerY());
    sleep(10);
  }
}
