/******************************
脚本功能：Milk全解锁
下载地址：https://milk.kzk61yo.cn/?qcode=mm793609
软件版本：*
脚本作者：阿甘科技
更新时间：2022-12-5
问题反馈：qq:1565320199
QQ群：773554575

*******************************

[rewrite_local]
^http[s]?:\/\/ppt.fuaybr.cn\/\/Api\/(getmovexiangqing|getmhepisodesimg).*$ url request-body sign_token=[a-zA-Z0-9]+ request-body sign_token=3dab9d6b0eecfd74299b5f843dcee351
^https:\/\/ppt.fuaybr.cn\/\/(Api|Milk)\/(getuserinfo|getstartup|getvideotop) url script-response-body https://raw.githubusercontent.com/agkjVIP/QuantumultX-Rewrite-Rules/main/milk.js
[mitm]
hostname = *fuaybr*

*******************************/

$notify("阿甘科技提醒您milk脚本已注入成功");
var __encode = 'jsjiami.com',
    _a = {},
    _0xb483 = ["_decode", "http://www.sojson.com/javascriptobfuscator.html"];
(function(_0xd642x1) {
    _0xd642x1[_0xb483[0]] = _0xb483[1]
})(_a);
var __Oxf10b9 = ["body", "parse", "获取用户数据成功", "", "1", "3dab9d6b0eecfd74299b5f843dcee351", "1670081075", "3", "https://s1.ax1x.com/2022/11/02/xH6oef.png", "阿甘科技QQ群：773554575", "0", "119902", "ZCbiYyAuc9n-KdcF7i801994012", "https://ppt.fuaybr.cn?qr_code=mm792871", "阿甘科技带你飞", "阿甘科技QQ群：773554575", "111", "mm792871", "https://ppt.fuaybr.cn", "88888888", "阿甘科技QQ群：773554575", "stringify", "undefined", "log", "删除", "版本号，js会定", "期弹窗，", "还请支持我们的工作", "jsjia", "mi.com"];
var body = $response[__Oxf10b9[0x0]];
let obj = JSON[__Oxf10b9[0x1]]($response[__Oxf10b9[0x0]]);
obj = {
    "msg": __Oxf10b9[0x2],
    "user_info": {
        "description": __Oxf10b9[0x3],
        "grades": __Oxf10b9[0x4],
        "sign_token": __Oxf10b9[0x5],
        "app_uuid": __Oxf10b9[0x3],
        "last_login_time": __Oxf10b9[0x6],
        "status": __Oxf10b9[0x4],
        "login_type": __Oxf10b9[0x7],
        "zhanghaobj": __Oxf10b9[0x8],
        "mfseett": __Oxf10b9[0x9],
        "qrpassword": __Oxf10b9[0x3],
        "sex": __Oxf10b9[0xa],
        "invitshow": 0,
        "share_id": __Oxf10b9[0xb],
        "account_token": __Oxf10b9[0xc],
        "ke_id": 1,
        "share_url": __Oxf10b9[0xd],
        "balance": __Oxf10b9[0xa],
        "point": __Oxf10b9[0xa],
        "mf_see": __Oxf10b9[0xa],
        "level_expire": __Oxf10b9[0xe],
        "id": __Oxf10b9[0xf],
        "userhead": __Oxf10b9[0x8],
        "level": __Oxf10b9[0x10],
        "invit_code": __Oxf10b9[0x11],
        "qr_code": __Oxf10b9[0x12],
        "mobile": __Oxf10b9[0x13],
        "zhanghaoerwmbj": __Oxf10b9[0x8],
        "dl": __Oxf10b9[0xa],
        "login_banben": __Oxf10b9[0x7],
        "username": __Oxf10b9[0x14]
    },
    "code": 10000
};
$done({
    body: JSON[__Oxf10b9[0x15]](obj)
});;;
(function(_0xd8e4x3, _0xd8e4x4, _0xd8e4x5, _0xd8e4x6, _0xd8e4x7, _0xd8e4x8) {
    _0xd8e4x8 = __Oxf10b9[0x16];
    _0xd8e4x6 = function(_0xd8e4x9) {
        if (typeof alert !== _0xd8e4x8) {
            alert(_0xd8e4x9)
        };
        if (typeof console !== _0xd8e4x8) {
            console[__Oxf10b9[0x17]](_0xd8e4x9)
        }
    };
    _0xd8e4x5 = function(_0xd8e4xa, _0xd8e4x3) {
        return _0xd8e4xa + _0xd8e4x3
    };
    _0xd8e4x7 = _0xd8e4x5(__Oxf10b9[0x18], _0xd8e4x5(_0xd8e4x5(__Oxf10b9[0x19], __Oxf10b9[0x1a]), __Oxf10b9[0x1b]));
    try {
        _0xd8e4x3 = __encode;
        if (!(typeof _0xd8e4x3 !== _0xd8e4x8 && _0xd8e4x3 === _0xd8e4x5(__Oxf10b9[0x1c], __Oxf10b9[0x1d]))) {
            _0xd8e4x6(_0xd8e4x7)
        }
    } catch (e) {
        _0xd8e4x6(_0xd8e4x7)
    }
})({})
