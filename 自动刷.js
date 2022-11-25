var sleeptime = 500;
var 快手 = "com.kuaishou.nebula";

log("当前媒体音量:" + device.getMusicVolume());
log("媒体音量的最大值:" + device.getMusicMaxVolume());
log("当前通知音量:" + device.getNotificationVolume());
log("通知音量的最大值:" + device.getNotificationMaxVolume());
log("当前闹钟音量:" + device.getAlarmVolume());
log("闹钟音量的最大值:" + device.getAlarmVolume());

device.setMusicVolume(0);
log("设置媒体音量为：0");
log("当前媒体音量:" + device.getMusicVolume());

//一直保持屏幕常亮
device.keepScreenOn();
log("一直保持屏幕常亮");

launch(快手);
log('打开快手');

var i = 0;
var hd间隔时间 = random(10, 20);
setInterval(function () {
  i++;
  xs滑动();
  log("滑动" + i + "次");
  if (i < 3) {
    gb青少年模式();
  }
}, hd间隔时间 * 1000); // 每10秒刷新

function xs滑动() {
  var x1 = random(400, 600);
  var y1 = random(1800, 2000);
  var x2 = random(400, 600);
  var y2 = random(400, 600);
  var duration = random(200, 400);
  swipe(x1, y1, x2, y2, duration);
  log("x1:" + x1 + " y1:" + y1 + " x2:" + x2 + " y2:" + y2 + " time:" + duration);
}
function gb青少年模式() {
  if (text("开启青少年模式").findOne(10 * 1000)) {
    text("我知道了").findOne().click();
    log("关闭青少年模式弹窗");
  } else {
    log("无青少年模式弹窗");
  }
}
