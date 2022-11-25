设置 --> 开发者选项 --> 

adb shell pm grant org.autojs.autojs6 android.permission.WRITE_SECURE_SETTINGS

adb shell pm grant '$org.autojs.autojs6$' android.permission.WRITE_SECURE_SETTINGS

adb shell appops set org.autojs.autojs6 PROJECT_MEDIA allow

