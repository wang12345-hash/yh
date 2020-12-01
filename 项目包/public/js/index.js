/*滚轮滚动获取导航栏的JS代码----也就是导航栏脱离文档流跟随下降的JS代码*/
window.onscroll=function(){
  var topScroll = get_scrollTop_of_body();//滚动的距离,距离顶部的距离
  var bignav = document.getElementById("dhl");//获取到导航栏id
  if(topScroll >= 104){ //当滚动距离大于104px时执行下面的东西
    bignav.style.position = 'fixed';
    bignav.style.top = '0';
    bignav.style.zIndex = '20';
    bignav.style.background = "rgba(0,0,0,0.5)";
    bignav.style.color = "#ffffff"
  }else{//当滚动距离小于104的时候执行下面的内容，也就是让导航栏恢复原状
    bignav.style.position = 'static';
    bignav.style.background = "#000000";
  }
}
function get_scrollTop_of_body(){
  var scrollTop;
  if(typeof window.pageYOffset != 'undefined'){//pageYOffset指的是滚动条顶部到网页顶部的距离
    scrollTop = window.pageYOffset;
  }else if(typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat')        {
    scrollTop = document.documentElement.scrollTop;
  }else if(typeof document.body != 'undefined'){
    scrollTop = document.body.scrollTop;
  }
  return scrollTop;
}



/*点击相关按钮实现网页跳转的JS代码*/
function shouji(){/*手机详情页*/
  location.href="../index_2/html_xq/shouji/index.html";
}
function bjbdn(){/*笔记本电脑详情页*/
  location.href="../index_2/html_xq/dianao/index.html";
}


/*折扣中心的倒计时时间内容代码*/
const abcdefg = {
  domList : document.querySelectorAll('.jsTime'),
  formatNumber(n){
    // return n.toString().padStart(2, '0');  // 用padStart方法要注意兼容问题
    n = n.toString();
    return n[1] ? n : '0' + n;
  },
  setTime(dom){
    //获取设置的时间 如：2019-3-28 14:00:00  ios系统得加正则.replace(/\-/g, '/');
    const leftTime = new Date(dom.getAttribute('data-time')/*.replace(/\-/g, '/')*/) - new Date();
    if (leftTime >= 0) {
      const d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
      const h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
      const m = Math.floor(leftTime / 1000 / 60 % 60);
      const s = Math.floor(leftTime / 1000 % 60);
      dom.innerHTML = `${ d > 0 ? d + '天' : '' }${h}小时${m}分${s}秒`;
    } else {
      clearInterval(dom.$timer);
      dom.innerHTML = '优惠时间已结束';
    }
  },
  start(){
    this.domList.forEach((dom) => {
      this.setTime(dom);
      dom.$timer = setInterval(() => {
        this.setTime(dom);
      }, 1e3);
    });
  },
};
abcdefg.start();



/*商城区的点击显示相关内容的JS代码*/
window.onload=function(){
  var oBox=document.getElementById("box");
  var tabr=document.getElementById("tabr");
  var aTabL=document.getElementById("tabl");
  var aTit=aTabL.getElementsByTagName("a");
  var aCon=document.getElementsByClassName("tabr_li");
  for(var i=0;i<aTit.length;i++){
    aTit[i].index=i;
    aTit[i].onclick=function(){//点击右边tab
      for(var i=0;i<aTit.length;i++){
          aTit[i].className="";
          aCon[i].style="display:none";
      }
      this.className="active";
      aCon[this.index].style="display:block" ;
      fn(this.index);
    }
  }
  function fn(index){
      var aTitSign=aCon[index];
      var aTitSignAs=aTitSign.getElementsByTagName("a");
      var aConSignLis=aTitSign.getElementsByTagName("li");
      for(var i=0;i<aTitSignAs.length;i++){
        aTitSignAs[i].index=i;
        aTitSignAs[i].onclick=function(){//点击右边内容里的下面的tab
            var as= tabr.getElementsByTagName("a");
            for(var i=0;i<as.length;i++){
                as[i].className="";
            }
            for(var i=0;i<aTitSignAs.length;i++){
                aConSignLis[i].style="display:none";
            }
            this.className="active";
            aConSignLis[this.index].style="display:block";
        }
      }
  }
}


/*文字轮播JS代码*/
function Scroll() {}
Scroll.prototype.upScroll = function(dom, _h, interval) {
  var dom = document.getElementById(dom);
  var timer = setTimeout(function() {
    var _field = dom.firstElementChild;
    _field.style.marginTop = _h;
    clearTimeout(timer);
  }, 1000)
  setInterval(function() {
    var _field = dom.firstElementChild;
    _field.style.marginTop = "0px";
    dom.appendChild(_field);
    var _field = dom.firstElementChild
    _field.style.marginTop = _h;
  }, interval)
}
var myScroll = new Scroll();
myScroll.upScroll("demo", "-60px", 3000);



/*购物车功能*/
var x=0;
function checkRight(){
  /*这里是提示框JS代码*/
  var box=document.getElementById("tishi");
  x=x+1;
  var arr=document.getElementById('gwc');
  arr.innerHTML = x;
  arr.style.display="block";
  box.style.display='block';
  setTimeout( function codefans(){
    var box=document.getElementById("tishi");
    box.style.display="none";
  },3000);//3秒
}



/*首页注册区域开始*/
var login=document.getElementById('888');
var register=document.getElementById('999');
login.onclick=function(){
    location.href='login.html';
}
register.onclick=function(){
    location.href='register.html';
}
/*首页注册区域结束*/