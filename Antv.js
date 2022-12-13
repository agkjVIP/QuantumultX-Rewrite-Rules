/******************************

脚本功能：Antv解锁
下载地址：https://an2.somi7.xyz/?antvinvite=xboQDqkYeg
软件版本：所有
脚本作者：阿甘科技
更新时间：2022-12-13
问题反馈：qq:1565320199
QQ群：773554575
数据来自：king
*******************************

[rewrite_local]
#antv
^http[s]?:\/\/.+antvapp.+\/api\/videos\/.*$ url script-request-header https://raw.githubusercontent.com/agkjVIP/QuantumultX-rules/main/Antv.js
[mitm] 
hostname = *.antvapp.com

*******************************/

var $request_headers = $request.headers;
$request_headers.Authorization = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaTIuYW50dmFwcC5jb206ODA4MC9hcGkvYXV0aC9yZXN0b3JlIiwiaWF0IjoxNjcwMjk0MzIzLCJleHAiOjE3MDEzOTgzMjMsIm5iZiI6MTY3MDI5NDMyMywianRpIjoiMTdmdXVkN0dLeUxCRHRGbyIsInN1YiI6IjEwMjUxMDQ1IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.-CJfM7Zg-Wpl-t4LDUk8qi2YlauhZe8chB6yc6kGFw8";
_0xb935e3.headers = $request_headers;
$done(_0xb935e3);
