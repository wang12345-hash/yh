/*客户端连接数据库时使用的编码utf8*/
SET NAMES UTF8;
/*#丢弃数据库，如果存在*/
DROP DATABASE IF EXISTS yijiao;
/*创建数据库使用的编码utf8*/
CREATE DATABASE yijiao CHARSET=UTF8;
/*进入创建的数据表*/
USE yijiao;
/*创建保存用户注册的表*/
CREATE TABLE yijiao_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,/*编号*/
    uname VARCHAR(12),/*用户名*/
    upwd VARCHAR(6),/*密码*/
    phone VARCHAR(11)/*手机*/
);

/*插入用户数据（注：该内容仅供测试，请注册再登录）*/
INSERT INTO yijiao_user VALUES
    ('1', '123456', '987654', '18287326974'),
    ('2', 'xiaowang', '336985', '15988073326');