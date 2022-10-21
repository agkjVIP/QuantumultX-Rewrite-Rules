

/******************************

脚本功能：滴答清单解锁PRO
下载地址：商店搜索
软件版本：1.5.9
脚本作者：阿甘科技
更新时间：2022-10-17
问题反馈：qq:1565320199
QQ群：773554575

*******************************

[rewrite_local]

^https:\/\/api\.dida365\.com\/api\/v2\/user\/status url script-response-body https://raw.githubusercontent.com/agkjVIP/QuantumultX-rules/main/ddqd.js


[mitm] 

hostname = dida365.com  




*******************************/

var body = $response.body;
var parse = JSON.parse(body);
parse.proEndDate = "2999-01-01T00:00:00.000+0000";
parse.needSubscribe = false;
parse.pro = true;
body = JSON.stringify(parse);
$done(body);
