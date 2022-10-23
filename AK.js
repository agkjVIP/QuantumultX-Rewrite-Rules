/******************************	
	
	脚本作者：阿甘科技
	更新时间：2022-10-17
	问题反馈：qq:1565320199
	QQ群：773554575
	
	******************************

[rewrite_local]

http:\/\/tingyun\.info\/api\/(user\/(personal|getdevice)|Browse\/add) url script-response-body https://raw.githubusercontent.com/agkjVIP/QuantumultX-rules/main/AK.js


[mitm] 
hostname = tingyun.info
*******************************/

var body = $response.body;
var parse = JSON.parse(body);
parse.vip_time = "2099-01-01";
parse.view_num = 999999;
parse.vip = 1;
parse.msg = "";
parse.code = 200;
body = JSON.stringify(parse);
$done(body);
