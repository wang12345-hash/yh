const express=require('express');
// 引入链接池对象
const pool=require('../pool.js');
// 创建路由器对象
const c=express.Router();
// 添加路由
// 所有的get方法，可以在浏览器地址栏直接验证接口，其他的方法都不行
// 写完get接口，先在浏览器地址栏验证接口正确，然后写前台ajax
//原生http的get请求——带参数查询字符串
//登录后台
c.get("/http",(req,res)=>{
	//接收参数
	var $uname=req.query.uname;
	var $upwd=req.query.upwd;
	console.log(`用户名为${$uname}，密码为${$upwd}`);
	//操作数据库
	var sql='SELECT * FROM yijiao_user WHERE uname=? AND upwd=?';
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		console.log(result);
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//注册后台
c.post('/reg',(req,res)=>{
	var zhuce=req.body;
	console.log(zhuce);
	var sql='INSERT INTO yijiao_user SET ?'
    pool.query(sql,[zhuce],(err,result)=>{
		if(err) throw err;
		// console.log(err);
        console.log(result);
        if(result.affectedRows==0){
			res.send("0");
		}else{
			res.send("1");
		}
    });
});
// 导出路由器对象
module.exports=c;
