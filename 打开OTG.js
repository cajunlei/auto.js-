var 设置 = "com.android.settings";
var 文件管理 = "com.coloros.filemanager";
var sleeptime = 500;

console.show();

launch(设置);
sleep(sleeptime);

log('点击搜索框：' + text("搜索设置项").findOne().parent().click());
sleep(sleeptime);

log('输入OTG：' + text("搜索设置项").findOne().setText("OTG"));
sleep(sleeptime);

log('点击OTG 连接：' + text("OTG 连接").findOne().parent().parent().click());
sleep(sleeptime);

var OTG = text("OTG 连接").findOne().bounds();
log('打开OTG开关：' + click(OTG.centerX(), OTG.centerY()));

home();
launch(文件管理);

console.hide();
