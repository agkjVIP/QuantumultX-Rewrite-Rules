/******************************

脚本功能：91视频解锁VIP无限看
下载地址：https://app.phwbk.site/i-2XRJY9
软件版本：*
脚本作者：阿甘科技
更新时间：2023-7-1
问题反馈：qq:1565320199
QQ群：773554575
数据来自：阿甘科技

*******************************

[rewrite_local]
^https?:\/\/.*\/m_user\/info url request-header (\r\n)X-AUTH-TOKEN:.+(\r\n) request-header $1X-AUTH-TOKEN: eyJhbGciOiJIUzUxMiIsImlhdCI6MTY4ODE4MjA2MCwiZXhwIjoxNzAzNzM0MDYwfQ.eyJpZCI6ODkyOTQ0NjF9.0kU5jqKwZ0y8RY0SkjaWceIkekunNJIlfKvSOiqx4_MW0KC2-YIo8W1SfcD_78qywXzxKr8f7lCqKC1qBtrbRg
$2
^https?:\/\/.*\/m_sns\/(film|video|short_video)\/(film_detail|detail_list|apply_play) url request-header (\r\n)X-AUTH-TOKEN:.+(\r\n) request-header $1X-AUTH-TOKEN: eyJhbGciOiJIUzUxMiIsImlhdCI6MTY4ODE4MjA2MCwiZXhwIjoxNzAzNzM0MDYwfQ.eyJpZCI6ODkyOTQ0NjF9.0kU5jqKwZ0y8RY0SkjaWceIkekunNJIlfKvSOiqx4_MW0KC2-YIo8W1SfcD_78qywXzxKr8f7lCqKC1qBtrbRg
$2
^https?:\/\/.*\/(common\/splash_config|m_user\/(check_phone|behavior_verification_code)) url reject-200

[mitm] 
hostname = app.weilaixushi.com, api.orientlion.com, app.qdjdswkj.com, api.0954auto.com, appapi.xmblgg.com, api.czbt.cc, api.jtshuzhiwa.com, appapi.17gwl.com, api.saiyijiaju.com, api.ddoukids.com, appapi.mnghx.info, appapi.zdxclr.com
*******************************/
$notify("阿甘科技提醒您91脚本已注入成功，严禁转载，支持原创，群友专享");
