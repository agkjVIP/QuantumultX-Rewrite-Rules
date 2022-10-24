/******************************	
	
	脚本作者：阿甘科技
	更新时间：2022-10-17
	问题反馈：qq:1565320199
	QQ群：773554575
	
	******************************

[rewrite_local]

#AK视频全解锁
^http:\/\/tingyun\.info\/api\/community\/edit url response-body "code":\d+, response-body "code":200,
^http:\/\/tingyun\.info\/api\/user\/personal url response-body .+ response-body {   "code": 200,   "msg": "个人信息",   "time": "1666534199",   "data": {     "id": 108267,     "group_id": 0,     "parentid": 0,     "area": "",     "imei": "",     "xqx": "",     "is_change": 0,     "hl": "",     "jyyx": "",     "guanzhu": 0,     "fensi": 0,     "number": "JSJYJE",     "photo": "http:\/\/yfui.club0",     "num_t": 0,     "num": "-1",     "t_number": "208",     "vip_time": "2099-09-08",     "integral": 0,     "power": 0,     "agent": 0,     "username": "Mango_444603",     "nickname": "Mango_444603",     "password": "6ec639b8718fdc65201c1ec0a6bc9308",     "salt": "l05aGW",     "email": "",     "mobile": "14725836920",     "avatar": "http:\/\/tupian.ds9rsqa.cn\/mrtx\/48_1588741687.jpg",     "level": 1,     "gender": 0,     "birthday": null,     "bio": "",     "money": "0.00",     "fencheng": 0,     "weichat": "客服QQ\/微信：928355547",     "yitian": "",     "yitianyuan": "",     "qitian": "",     "qitianyuan": "",     "shiwu": "",     "shiwuyuan": "",     "yiyue": "",     "yiyueyuan": "",     "sanyue": "",     "sanyueyuan": "",     "liuyue": "",     "liuyueyuan": "",     "yinian": "",     "yinianyuan": "",     "yongjiu": "",     "yongjiuyuan": "",     "yitianurl": "",     "qitianurl": "",     "shiwuurl": "",     "yiyueurl": "",     "sanyueurl": "",     "liuyueurl": "",     "yinianurl": "",     "yongjiuurl": "",     "url8": "",     "url9": "",     "score": 0,     "successions": 1,     "maxsuccessions": 1,     "prevtime": 1663603948,     "logintime": 1663603948,     "loginip": "120.235.69.55",     "loginfailure": 0,     "joinip": "120.235.69.55",     "jointime": 1663603948,     "createtime": 1663603948,     "updatetime": 1663603948,     "token": "",     "status": "normal",     "verification": "",     "age": 0,     "is_okami": 0,     "view_num": 0,     "is_verifyed": 0,     "v_num": 0,     "device_code": "acb1616e2f8e3130b32ff868773eb8a2",     "tj_user_count": 0,     "video": 0,     "fabu": 0,     "today_invite_number": 0,     "invite_number": 0,     "vip": 1,     "read": 0,     "prevtime_text": null,     "logintime_text": null,     "jointime_text": null,     "avatar_text": "http:\/\/tupian.ds9rsqa.cn\/mrtx\/48_1588741687.jpg"   } }

[mitm] 
hostname = tingyun.info
*******************************/
