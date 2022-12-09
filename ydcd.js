/******************************

脚本功能：网易有道词典永久VIP
下载地址：商店搜索
软件版本：9.10.06
脚本作者：阿甘科技
更新时间：2022-10-24
问题反馈：qq:1565320199
QQ群：773554575

*******************************
[rewrite_local]
^http[s]?:\/\/dict.youdao.com\/vip\/user\/status*.+$ url script-response-body https://raw.githubusercontent.com/agkjVIP/QuantumultX-Rewrite-Rules/main/ydcd.js
[mitm] 
hostname = *.youdao.*
*******************************/

var obj = JSON.parse($response.body);
    obj.data..+ =  [
 {
    "planIds": ["22"],
    "auto": true,
    "svipExpire": 0,
    "permissions": [
        "ONE_MONTH",
        "AUTO_SUBSCRIPTION"
    ],
    "expire": 4093844524891,
    "purchasedPlanIds": ["22"],
    "firstAuto": false,
    "tag": "TAG_RENEW_EXPECTED",
    "vip": true,
    "svip": false,
    "open": true,
    "copyWritings": [
        "阿甘科技",
        "qq群773554575"
    ]
}
    ]
};
    $done({body: JSON.stringify(obj)});
