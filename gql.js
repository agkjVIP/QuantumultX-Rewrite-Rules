/******************************

脚本功能：过期啦解锁VIP
下载地址：http://mtw.so/6rCMaa或商店搜索
软件版本：2.9.8
脚本作者：阿甘科技
更新时间：2022-11-4
问题反馈：qq:1565320199
QQ群：773554575

*******************************
[rewrite_local]
^https:\/\/expire\.vanemu\.com\/1\.1\/functions\/getUserInfo url script-response-body https://raw.githubusercontent.com/agkjVIP/QuantumultX-rules/main/gql.js
[mitm] 
hostname = expire.vanemu.com
*******************************/

body = $response.body.replace(/\"user_is_pro":\w+/g, '\"user_is_pro":true').replace(/\"group_is_pro":\w+/g, '\"group_is_pro":true')

$done({body});
