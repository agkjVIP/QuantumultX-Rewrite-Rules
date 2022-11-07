# QuantumultX-Rewrite-Rules

## 关于rewrite及其基础小白教程

### 1. 了解重写 / MITM解密

- 简单来说，重写 和 mitm解密 主要用来去广告以及某些重定向，去广告就不用说了，至于什么叫重定向咱也不太懂，反正我在网上看的就是：比如将 `google.cn` 重定向 `google.hk`
- 配置文件中对应的模块：**`[rewrite]` / `[mitm]`  ** 

### 2. MITM解密

- 官方解释：mitm 根证书用于 https 解析，只有配置了主机名的请求才会被 mitm 模块进行解析。

  > - 主机名：对应配置文件中 `[mitm]` 模块下的 `hostname=` 后面的内容
  > - 我的理解，它就是一个本地证书，反正开启就行：先生成证书、再配置证书(安装证书、信任证书)、然后打开开关。
  > - 想要使用 Quantumult X `解锁TikTok` 等高级玩法，就必须开启 `mitm`。

- 开启步骤：

  > Quantumult X `设置` > `MitM` > `生成证书` > `配置证书`(安装并信任、参考 `安装网易云音乐证书`)
  >
  > 证书安装完成、打开 `MitM` 开关

### 3. 重写脚本(网上其它教程习惯叫做 `复写脚本`)

- 官方解释(我也不懂)：用于修改 HTTP 或 HTTPS 请求和响应

  > 不需要也没必要搞懂，对于我们这样的小白用户，直接引用各位大佬的重写规则就好了，要啥自行车？

- 添加 `[rewrite_remote]` 远程重写脚本订阅

  > - 小白应该也不会自己写脚本，建议直接引用`远程重写订阅`
  >
  >   `设置` > `重写` > `引用` > 右上角 `添加` > 输入远程重写订阅地址
  >
  >   > 举例 `神机通用重写订阅`
  >   >
  >   > ```
  >   > https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Rewrite/General.conf
  >   > ```
  >   >
  >   > 规则内包含主机名 `hostname` 以及重写 `rewrite` 规则
  >
  > - 当然也可以引用下载到 iCloud / 本机路径下的 `.conf` 配置文件
  >
  >   > `iCloud` 文件路径：`iCloud/Quantumult X/Profiles/`
  >   >
  >   > `本地` 文件路径：`我的iPhone/Quantumult X/Profiles/`
  >   >
  >   > 导入方法：直接输入  `文件名.conf`
  >
  >   ⚠️ 开启iCloud资源文件夹后，默认使用`iCloud`路径下的文件，`我的iPhone`路径不被读取
  >
  >   ⚠️ 下载回来的脚本需要定期手动下载新版本进行替换

- 添加 `[rewrite_local]` 本地重写脚本

  > - `设置` > `配置文件` > `编辑` >  `[rewrite_local]` 模块
  >
  > - 支持引用 iCloud / 本地 / 远程路径，文件格式为 .js
  >
  >   - iCloud / 本地  `.js `文件 (开启iCloud资源文件夹后默认使用iCloud路径下的配置文件)
  >
  >     > - 脚本文件在哪里弄？
  >     >
  >     >   > 自己写 > 会么？不会！
  >     >   >
  >     >   > 各位大佬无私奉献，可以下载保存至 iCloud 或者 本地
  >     >
  >     > - 脚本文件储存路径
  >     >
  >     >   > iCloud 文件路径：`iCloud/Quantumult X/Scripts/`
  >     >   >
  >     >   > 本地 文件路径：`我的iPhone/Quantumult X/Scripts/`
  >
  >   >   >脚本引用方法：直接输入 `脚本文件名.js`
  >   >
  >   >   ⚠️ 开启iCloud资源文件夹后，默认使用`iCloud`路径下的文件，`我的iPhone`路径不被读取
  >
  >   - 远程路径 `.js` 文件 `Store版本 1.0.5+版本可用`
  >
  >     > 举例 `获取Netflix剧集评分(by yichahucha)`
  >     >
  >     > ```
  >     > ^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-request-header https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
  >     > ^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
  >     > ```
  >     >
  >     > MitM模块下，hostname后添加`ios.prod.ftl.netflix.com`
  >
  >   - 修改路径+正则表达式
  >
  >     > 举例 `AK视频重写规则`
  >     >
  >     > ```
  >     > ^http:\/\/tingyun\.info\/api\/community\/edit url response-body "code":\d+, response-body "code":200
  >     > ^http:\/\/tingyun\.info\/api\/user\/personal url response-body .+ response-body {   "code": 200,   "msg": "个人信息",   "time": "1666534199",   "data": {     "id": 108267,     "group_id": 0,     "parentid": 0,     "area": "",     "imei": "",     "xqx": "",     "is_change": 0,     "hl": "",     "jyyx": "",     "guanzhu": 0,     "fensi": 0,     "number": "JSJYJE",     "photo": "http:\/\/yfui.club0",     "num_t": 0,     "num": "-1",     "t_number": "208",     "vip_time": "2099-09-08",     "integral": 0,     "power": 0,     "agent": 0,     "username": "Mango_444603",     "nickname": "Mango_444603",     "password": "6ec639b8718fdc65201c1ec0a6bc9308",     "salt": "l05aGW",     "email": "",     "mobile": "14725836920",     "avatar": "http:\/\/tupian.ds9rsqa.cn\/mrtx\/48_1588741687.jpg",     "level": 1,     "gender": 0,     "birthday": null,     "bio": "",     "money": "0.00",     "fencheng": 0,     "weichat": "客服QQ\/微信：928355547",     "yitian": "",     "yitianyuan": "",     "qitian": "",     "qitianyuan": "",     "shiwu": "",     "shiwuyuan": "",     "yiyue": "",     "yiyueyuan": "",     "sanyue": "",     "sanyueyuan": "",     "liuyue": "",     "liuyueyuan": "",     "yinian": "",     "yinianyuan": "",     "yongjiu": "",     "yongjiuyuan": "",     "yitianurl": "",     "qitianurl": "",     "shiwuurl": "",     "yiyueurl": "",     "sanyueurl": "",     "liuyueurl": "",     "yinianurl": "",     "yongjiuurl": "",     "url8": "",     "url9": "",     "score": 0,     "successions": 1,     "maxsuccessions": 1,     "prevtime": 1663603948,     "logintime": 1663603948,     "loginip": "120.235.69.55",     "loginfailure": 0,     "joinip": "120.235.69.55",     "jointime": 1663603948,     "createtime": 1663603948,     "updatetime": 1663603948,     "token": "",     "status": "normal",     "verification": "",     "age": 0,     "is_okami": 0,     "view_num": 0,     "is_verifyed": 0,     "v_num": 0,     "device_code": "acb1616e2f8e3130b32ff868773eb8a2",     "tj_user_count": 0,     "video": 0,     "fabu": 0,     "today_invite_number": 0,     "invite_number": 0,     "vip": 1,     "read": 0,     "prevtime_text": null,     "logintime_text": null,     "jointime_text": null,     "avatar_text": "http:\/\/tupian.ds9rsqa.cn\/mrtx\/48_1588741687.jpg"   } }
  >     > ```
  >     >
  >     > MitM模块下，hostname后添加`tingyun.info`
  
