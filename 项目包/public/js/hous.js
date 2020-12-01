//登录异步请求
var login=document.getElementById('5');
login.onclick=function(){
    var yhm=document.getElementById('yhm');
    var mm=document.getElementById('mm');
    var $uname=uname.value;
    var $upwd=upwd.value;
    console.log(`用户名为${$uname}，密码为${$upwd}`);
    if(yhm.innerHTML=='用户名可用' || mm.innerHTML=='密码有效'){
        //1、创建异步对象
        var xhr=new XMLHttpRequest();
        //4、创建监听，接收响应
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4 && xhr.status==200){
                var r=xhr.responseText;
                if(r==1){
                    alert("登录成功");
                    location.href="index.html";//登录成功实现跳转
                }else{
                    alert("登录失败！您还没有注册，请先注册账号");
                    location.href="login.html";//登录失败刷新
                }
            }
        }
        //2、打开连接，创建请求
        xhr.open("get","http://127.0.0.1:2002/ajax/http?uname="+$uname+"&upwd="+$upwd,true);
        //3、发送请求
        xhr.send();
    }else{
        alert("登录失败！请确保您输入的数据是符合要求的");
    }
}