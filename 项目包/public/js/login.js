//用户名操作
var uname=document.getElementById('uname');
var yhm=document.getElementById('yhm');
uname.onfocus=function(){
    yhm.innerHTML='用户名6~12位';
    yhm.style.backgroundColor="#38B0DE";
    yhm.style.color="#FFFFFF";
}
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


//点击注册按钮时
var register=document.getElementById('register');
register.onclick=function(){
    location.href='register.html';
}