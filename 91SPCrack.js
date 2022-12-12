/******************************

脚本功能：91视频解锁VIP
下载地址：
软件版本：*
脚本作者：阿甘科技
更新时间：2022-12-12
问题反馈：qq:1565320199
QQ群：773554575

*******************************

[rewrite_local]
# > 91视频解锁会员
^https?:\/\/.*\/m_sns\/(film|video|short_video)\/(film_detail|detail_list|apply_play) url request-header (\r\n)X-AUTH-TOKEN:.+(\r\n) request-header $1X-AUTH-TOKEN: eyJhbGciOiJIUzUxMiIsImlhdCI6MTY1ODU4NzYxMSwiZXhwIjoxNjc0MTM5NjExfQ.eyJpZCI6OTg1MTU4MDV9.fA63_1SLzMNKvknO3Mcz2K-swMbrEe4rBW7HtlpH0hFcexF_5zXs6B9quX0LMJTKJyR5y2zBkHskOEjhr-ME6Q$2
^https?:\/\/.*\/(common\/splash_config|m_user\/(check_phone|behavior_verification_code)) url reject-200
[mitm] 
hostname = app.weilaixushi.com, api.orientlion.com, app.qdjdswkj.com, api.0954auto.com, appapi.xmblgg.com, api.*.*
*******************************/
