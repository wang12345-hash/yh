//轮播图JS代码
var i=0;
var LIWIDTH=1535;
var DURATION=600;
var LICOUNT=5;
var ulImgs=document.getElementById("ul-imgs");
var ulIdxs=document.getElementById("ul-idxs");
var lis=ulIdxs.children;
function moveTo(to){
  if(to==undefined){
    to=i+1;
  }
  if(i==0){
    if(to>i){
      ulImgs.className="transition";
    }else{
      ulImgs.className="";
      ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
      setTimeout(function(){
        moveTo(LICOUNT-1);
      },100);
      return;
    }
  }
  i=to;
  ulImgs.style.marginLeft=-i*LIWIDTH+"px";
  for(var li of lis){
    li.className=""
  }
  if(i==LICOUNT){
    i=0;
    setTimeout(function(){
      ulImgs.className="";
      ulImgs.style.marginLeft=0;
    },DURATION)
  }
  lis[i].className="active";
}
var btnLeft=document.getElementById("btn-left");
var btnRight=document.getElementById("btn-right");
var canClick=true;
btnRight.onclick=function(){
  move(1)
}
function move(n){
  if(canClick){
    moveTo(i+n);
    canClick=false;
    setTimeout(function(){
      canClick=true;
    },DURATION+100);
  }
}
btnLeft.onclick=function(){
  move(-1);
}
var interval=3000;
var timer=setInterval(function(){
  moveTo()
},5000);
var banner=document.getElementById("banner");
banner.onmouseover=function(){
  clearInterval(timer);
}
banner.onmouseout=function(){
  timer=setInterval(function(){
    moveTo()
  },3000);
}
var ulIdxs=document.getElementById("ul-idxs");
var canClick=true;
ulIdxs.onclick=function(e){
  if(canClick){
    var li=e.target;
    if(li.nodeName=="LI"){
      if(li.className!=="active"){
        for(var i=0;i<lis.length;i++){
          if(lis[i]==li){
            break;
          }
        }
        moveTo(i);
        setTimeout(function(){
          canClick=true;
        },DURATION);
      }
    }
  }
}
//倒计时JS代码
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

window.onscroll=function(){
    var topScroll = get_scrollTop_of_body();//滚动的距离,距离顶部的距离
    //导航栏跟随JS代码
    var bignav = document.getElementById("daohan");//获取到导航栏id
    if(topScroll >= 700){ //当滚动距离大于700px时执行下面的东西
      bignav.style.position = 'fixed';
      bignav.style.display = 'block';
      bignav.style.zIndex = '9999';
    }else{//当滚动距离小于250的时候执行下面的内容，也就是让导航栏恢复原状
      bignav.style.position = 'static';
      bignav.style.display = 'none';
    }
    //宝贝跟随
    var bignav = document.getElementById("baobei");//获取到导航栏id
    if(topScroll >= 700 && topScroll <=1600){ //当滚动距离大于700px时执行下面的东西
      bignav.style.display = 'block';
      bignav.style.zIndex = '9999';
      bignav.style.background = 'rgb(0,0,255)';
    }else{//当滚动距离小于250的时候执行下面的内容，也就是让导航栏恢复原状
      bignav.style.position = 'static';
      bignav.style.background='rgb(122,106,106)';
    }
    //评价跟随
    var bignav = document.getElementById("pingjia");//获取到导航栏id
    if(topScroll >= 1601 && topScroll <=2600){ //当滚动距离大于700px时执行下面的东西
      bignav.style.display = 'block';
      bignav.style.zIndex = '9999';
      bignav.style.background = 'rgb(0,0,255)';
    }else{//当滚动距离小于250的时候执行下面的内容，也就是让导航栏恢复原状
      bignav.style.position = 'static';
      bignav.style.background='rgb(122,106,106)';
    }
    //详情跟随
    var bignav = document.getElementById("xiangqing");//获取到导航栏id
    if(topScroll >= 2601){ //当滚动距离大于700px时执行下面的东西
      bignav.style.display = 'block';
      bignav.style.zIndex = '9999';
      bignav.style.background = 'rgb(0,0,255)';
    }else{//当滚动距离小于250的时候执行下面的内容，也就是让导航栏恢复原状
      bignav.style.position = 'static';
      bignav.style.background='rgb(122,106,106)';
    }
    //购物车跟随JS代码
    var bignav = document.getElementById("gwc");//获取到导航栏id
    if(topScroll >= 700){ //当滚动距离大于700px时执行下面的东西
        bignav.style.display = 'block';
        bignav.style.position = 'fixed';
        bignav.style.zIndex = '9999';
    }else{//当滚动距离小于400的时候执行下面的内容，也就是让导航栏恢复原状
      bignav.style.position = 'static';
      bignav.style.display = 'none';
    }
  }
  /*解决浏览器兼容问题*/
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