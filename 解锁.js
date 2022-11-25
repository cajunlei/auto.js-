function 解锁1() {
  var sleeptime = 500;
  var w = 300;
  var h = 220;
  var x = 240;
  var y = 1450;

  device.wakeUp(); sleep(sleeptime);
  swipe(500, 2000, 500, 500, 500); sleep(sleeptime);
  click(x + w, y);
  click(x + w, y + h * 2);
  click(x + w, y + h * 2);
  click(x + w, y);
  click(x + w * 2, y + h * 2);
  click(x + w * 2, y + h * 2);
}
function 解锁() {
  var sleeptime = 500;
  device.wakeUp(); sleep(sleeptime);
  swipe(500, 2000, 500, 500, 500); sleep(sleeptime);
  var password = "288299"
  for (var i = 0; i < password.length; i++) {
    var p = desc(password[i].toString()).findOne().bounds();
    click(p.centerX(), p.centerY());
    sleep(10);
  }
}
