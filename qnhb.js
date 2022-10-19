

/******************************

脚本功能：青柠海报设计解锁VIP
下载地址：http://mtw.so/6rCMaa或商店搜索
软件版本：1.5.9
脚本作者：阿甘科技
更新时间：2022-10-16
问题反馈：qq:1565320199
QQ群：773554575

*******************************

[rewrite_local]

^https:\/\/api\.qingning6\.com\/api\/user\/getUserInfo url script-response-body qnhb.js

[mitm] 

hostname = api.qingning6.com


*******************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const agkj = '/getUserInfo';


if (url.indexOf(agkj) != -1) {
    obj.result.hasPayVip = 1;
    obj.result.isForeverVip = 1;
    obj.result.isVip = 1;
    obj.result.VipExpireTime = 9999999999999;
obj.result.userName = "阿甘科技破解";
    obj.result.isTeamUserVip = 1;

	body = JSON.stringify(obj);
}


$done({body});