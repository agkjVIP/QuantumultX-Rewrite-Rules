/******************************

脚本功能：91视频解锁VIP
下载地址：https://app.fcbl.xyz/i-2XRJY9
软件版本：*
脚本作者：阿甘科技
更新时间：2022-12-12
问题反馈：qq:1565320199
QQ群：773554575
数据来自：欧阳熙
*******************************

[rewrite_local]
# > 91视频解锁会员
^https?:\/\/.*\/m_sns\/(film|video|short_video)\/(film_detail|detail_list|apply_play) url request-header (\r\n)X-AUTH-TOKEN:.+(\r\n) request-header $1X-AUTH-TOKEN: eyJhbGciOiJIUzUxMiIsImlhdCI6MTY3MDU3Njg4MCwiZXhwIjoxNjg2MTI4ODgwfQ.eyJpZCI6NzQ5NDI5OTR9.JprriMU4EBYExWABbQU32bf7tDTwPCPm7gIJRzrDfto6J7oXXQ0U5PDfpNJWKKZTuIohgjX04Xhi84VwkKaWKg
$2
^https?:\/\/.*\/(common\/splash_config|m_user\/(check_phone|behavior_verification_code)) url reject-200
[mitm] 
hostname = app.weilaixushi.com, api.orientlion.com, app.qdjdswkj.com, api.0954auto.com, appapi.xmblgg.com, api.*.*
*******************************/
