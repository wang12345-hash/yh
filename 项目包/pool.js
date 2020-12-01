// 引入MySQL模块
const mysql=require('mysql');
// 创建链接池对象
const pool=mysql.createPool({
    host:'127.0.0.1',//域名或者ip
    port:'3306',//端口
    user:'root',//用户名
    password:'',//密码
    database:'yijiao',//进入数据库
    connectTimeout:20//设置链接池大小
});
// 导出链接池对象
module.exports=pool;