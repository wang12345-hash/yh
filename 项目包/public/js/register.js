/* 点击登录时执行跳转到登录页面 */
var login=document.getElementById('1');
login.onclick=function(){
    location.href='login.html';
}


var yz=document.getElementById('2');
yz.onclick=function (){
    code = "";
	var codeLength = 4; //验证码的长度   
	var checkCode = document.getElementById("3");
	var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'); //所有候选组成验证码的字符，当然也可以用中文的     
	for(var i = 0; i < codeLength; i++) {
		var charIndex = Math.floor(Math.random() * 52); //Math.random得到0-36中随机的一个数,floor取整数部分
		code += selectChar[charIndex];
	}
	if(checkCode) {
		checkCode.value = code;
	}
    checkCode.innerHTML=code;
    yz.innerHTML='更换验证码';
    yz.style.color="rgb(51, 51, 136)"
}


/* 用户名操作 */
var uname=document.getElementById('uname');
var yhm=document.getElementById('yhm');
/*获取焦点时*/
uname.onfocus=function(){
    yhm.innerHTML='用户名6~12位';
    yhm.style.backgroundColor="#38B0DE";
    yhm.style.color="#FFFFFF";
}
/*失去焦点时*/
uname.onblur=function(){
    var ua=/^[0-9a-zA-Z]{6,12}$/;
    /*非空验证*/
    if(!uname.value){
        yhm.innerHTML='用户名不能为空！';
        yhm.style.backgroundColor='#FFFFFF';
        yhm.style.color='#FF0000';
    }else if(ua.test(uname.value)){
        yhm.innerHTML='用户名可用';
        yhm.style.backgroundColor='#32CD99';
        yhm.style.color='#0000FF';
    }else{
        yhm.innerHTML='用户名错误';
        yhm.style.backgroundColor="#0000FF";
        yhm.style.color='#FF0000';
    }
}


/*密码操作*/
var upwd=document.getElementById('upwd');
var mm=document.getElementById('mm');
upwd.onfocus=function(){
    mm.innerHTML='密码6位';
    mm.style.backgroundColor='#38B0DE';
    mm.style.color="#FFFFFF";
}
upwd.onblur=function(){
    var ua=/^[0-9a-zA-Z]{6}$/;
    if(!upwd.value){
        mm.innerHTML='密码不能为空！';
        mm.style.backgroundColor='#FFFFFF';
        mm.style.color='#FF0000';
    }else if(ua.test(upwd.value)){
        mm.innerHTML='密码有效';
        mm.style.backgroundColor='#32CD99';
        mm.style.color='#0000FF';
    }else{
        mm.innerHTML='密码错误';
        mm.style.backgroundColor="#0000FF";
        mm.style.color='#FF0000';
    }
}


/*确认密码操作*/
var cpwd=document.getElementById('cpwd');
var mm2=document.getElementById('mm2');
cpwd.onfocus=function(){
    mm2.innerHTML='请确认密码';
    mm2.style.backgroundColor='#38B0DE';
    mm2.style.color="#FFFFFF";
}
cpwd.onblur=function(){
    if(!cpwd.value){
        mm2.innerHTML='请确认密码';
        mm2.style.backgroundColor='#FFFFFF';
        mm2.style.color='#FF0000';
    }else if(cpwd.value==upwd.value){
        mm2.innerHTML='输入一致';
        mm2.style.backgroundColor='#32CD99';
        mm2.style.color='#0000FF';
    }else{
        mm2.innerHTML='两次密码不一致';
        mm2.style.backgroundColor="#0000FF";
        mm2.style.color='#FF0000';
    }
}


/*手机号操作*/
var phone=document.getElementById('phone');
var sjh=document.getElementById('sjh');
phone.onfocus=function(){
    sjh.innerHTML='请输入手机号';
    sjh.style.backgroundColor='#38B0DE';
    sjh.style.color="#FFFFFF";
}
phone.onblur=function(){
    if(!phone.value){
        sjh.innerHTML='手机号不能为空';
        sjh.style.backgroundColor='#FFFFFF';
        sjh.style.color='#FF0000';
    }else if(!(/^1[3456789]\d{9}$/.test(phone.value))){
        sjh.innerHTML='手机号无效';
        sjh.style.backgroundColor="#0000FF";
        sjh.style.color='#FF0000';
    }else{
        sjh.innerHTML='手机号有效';
        sjh.style.backgroundColor='#32CD99';
        sjh.style.color='#0000FF';
    }
}


/*验证码操作*/
var yzm=document.getElementById('yzm');
var yzm3=document.getElementById('3');
var aty=document.getElementById('aty');
yzm.onfocus=function(){
    if(yzm3.innerHTML==''){
        aty.innerHTML='请先获取验证码';
        aty.style.backgroundColor='#38B0DE';
        aty.style.color="#FFFFFF";
    }else{
        aty.innerHTML='请输入验证码';
        aty.style.backgroundColor='#38B0DE';
        aty.style.color="#FFFFFF";
    }
}
yzm.onblur=function(){
    if(!yzm.value){
        if(yzm3.innerHTML==''){
            aty.innerHTML='请先获取验证码';
            aty.style.backgroundColor='#38B0DE';
            aty.style.color="#FFFFFF";
        }else{
            aty.innerHTML='请输入验证码';
            aty.style.backgroundColor='#38B0DE';
            aty.style.color="#FFFFFF";
        }
    }else if(yzm.value == yzm3.innerHTML){
            aty.innerHTML='验证码正确';
            aty.style.backgroundColor="#32CD99";
            aty.style.color='#0000FF';
    }else{
            aty.innerHTML='请输入正确的验证码';
            aty.style.backgroundColor="#0000FF";
            aty.style.color='#FF0000';
    }
}