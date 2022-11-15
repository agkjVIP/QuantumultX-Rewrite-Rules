/******************************

脚本功能：Lifeviewer解锁订阅
下载地址：https://is.gd/viKS2G或商店搜索
软件版本：2.8.9
脚本作者：阿甘科技
更新时间：2022-11-15
问题反馈：qq:1565320199
QQ群：773554575

*******************************
[rewrite_local]
^https:\/\/api\.apphud\.com\/v1\/subscriptions url script-response-body https://raw.githubusercontent.com/agkjVIP/QuantumultX-Rewrite-Rules/main/Lifeviewer.js
[mitm] 
hostname = api.apphud.com
*******************************/


var objc = JSON.parse($response.body);

    objc = 
{
  "data" : {
    "results" : {
      "locale" : "zh_CN",
      "id" : "2873ed7a-a65b-4471-abd0-2a9219fbdc67",
      "created_at" : "2022-11-10T12:24:00.157Z",
      "subscriptions" : [
        {
          "id" : "c48cd6ad-0fb8-4bac-89f6-68360fac6d15",
          "unit" : "year",
          "group_id" : "9a06b455",
          "autorenew_enabled" : true,
          "expires_at" : "9999-11-17T13:12:02.000Z",
          "in_retry_billing" : false,
          "introductory_activated" : true,
          "cancelled_at" : null,
          "platform" : "ios",
          "product_id" : "002",
          "retries_count" : 0,
          "started_at" : "2022-11-10T13:12:03.000Z",
          "local" : false,
          "next_check_at" : "2022-11-17T13:19:02.000Z",
          "kind" : "autorenewable",
          "units_count" : 1,
          "environment" : "production",
          "status" : "trial"
        }
      ],
      "user_id" : "6959A321-8369-4C2E-AFEC-39D81B11557F",
      "currency" : {
        "id" : "a5604c08-9833-4d8b-a677-f31e7717d8e5",
        "country_code" : "CN",
        "code" : "CNY"
      },
      "devices" : [

      ]
    },
    "meta" : null
  },
  "errors" : null
}
$done({body : JSON.stringify(objc)});
