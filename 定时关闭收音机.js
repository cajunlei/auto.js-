var 收音机 = "myradio.radio.fmradio.liveradio.radiostation";
var i = 0;

var options = ["10", "20", "30", "0.05"]
var aa = dialogs.select("请选择倒计时时间", options);
if (aa >= 0) {
    log("将在" + options[aa] + "分钟后关闭收音机");
    var abc = (options[aa]);
} else {
    log("您取消了选择");
    exit();
}

var window = floaty.window(
    <frame gravity="center">
        <text id="text" textSize="16sp" textColor="#f44336" />
    </frame>
);

window.exitOnClose();

window.text.click(() => {
    window.setAdjustEnabled(!window.isAdjustEnabled());
});

setTimeout(function () {
    关闭收音机();
    home();
    exit();
}, abc * 1000 * 60);

setInterval(function () {
    i++;
    ui.run(function () {
        window.setPosition(50, 100);
        window.text.setText(dynamicText());
    });
}, 1000); // 每秒刷新

function dynamicText() {
    var 设定时间 = (abc * 60); // 秒
    var 剩余秒 = (设定时间 - i);
    var 分 = (Math.floor(剩余秒 / 60));
    var 秒 = (剩余秒 - 分 * 60);
    var str = ("将在" + 分 + "分" + 秒 + "秒后关闭收音机");
    return str;
}

function 关闭收音机() {
    var sleeptime = 500;
    app.openAppSetting(收音机);
    sleep(sleeptime);
    if (!text("强行停止").findOne().click()) {
        log("强行停止:" + text("强行停止").findOne().click());
        log("中止任务");
        exit();
    } else {
        log("强行停止:" + text("强行停止").findOne().click());
        log("成功关闭收音机");
    }
}
