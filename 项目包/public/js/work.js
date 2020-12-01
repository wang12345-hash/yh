//注册异步请求
var register=document.getElementById('4');
register.onclick=function(){
    var yhm=document.getElementById('yhm');
    var mm=document.getElementById('mm');
    var mm2=document.getElementById('mm2');
    var sjh=document.getElementById('sjh');
    var aty=document.getElementById('aty');
    if(yhm.innerHTML == '用户名可用' && mm.innerHTML == '密码有效' && mm2.innerHTML == '输入一致' && sjh.innerHTML == '手机号有效' && aty.innerHTML == '验证码正确'){
        register.style.background=' #425f80';
        /*ajax请求*/
        //1、创建异步对象
        var xhr=new XMLHttpRequest();
        //4、创建监听，接收响应
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4 && xhr.status==200){
                var r=xhr.responseText;
                console.log(r);
                if(r==1){
                    alert("注册成功");
                    location.href="login.html";//登录成功实现跳转
                }else{
                    alert("注册失败！请检查您的输入是否符合要求");
                    location.href="register.html";//登录失败刷新
                }
            }
        }
        //2、打开连接，创建请求
        xhr.open("post","http://127.0.0.1:2002/ajax/reg",true);
        //3、发送请求
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        var formdata=`uname=${uname.value}&upwd=${upwd.value}&phone=${phone.value}`
        xhr.send(formdata);
    }else{
        alert('注册失败！请检查您的输入是否符合要求');
        location.href='register.html';
    }
}