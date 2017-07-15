var imgs=document.getElementsByTagName("img");
var divs=document.getElementById("save");
var lis=document.getElementsByTagName("li");
//设置任务函数（每两秒显示一张图片）
function show(){
    var img=document.querySelector("#save>img.show");
    var li=document.querySelector("#sex>li.bak");
    img.className="";
    li.className="";
    if(img.nextElementSibling!=null){
        img.nextElementSibling.className="show";
        li.nextElementSibling.className="bak";
    }
    else{
        img.parentNode.firstElementChild.className="show";
        li.parentNode.firstElementChild.className="bak";
    }
}
//开启定时器
var timer=setInterval(show,2000);
//绑定鼠标移入时停用计时器 鼠标移出启用定时器
divs.onmouseover=function(){
    clearInterval(timer);
    timer=null;
}
divs.onmouseout=function(){
    timer=setInterval(show,2000);

}
//绑定图片索引事件
for(i=0;i<lis.length;i++) {
    lis[i].index = i;
	lis[i].onmouseover =change;
}
function change() {
    var img = document.querySelector("#save>img.show");
    img.className = "";
    clearInterval(timer);
    var i=this.index;
    imgs[i].className = "show";
    var li = document.querySelector("#sex>li.bak");
    li.className="";
    lis[i].className="bak";
}

//绑定左右图标切换图片事件
var divl=document.getElementById("left");
var divr=document.getElementById("right");
divl.onclick=function() {
    var img = document.querySelector("#save>img.show");
    var li=document.querySelector("#sex>li.bak");
    img.className ="";
    li.className="";
    clearInterval(timer);
    if (img.previousElementSibling != null) {
        img.previousElementSibling.className = "show";
        li.previousElementSibling.className="bak";
    }
    else{
        img.parentNode.lastElementChild.className="show";
        li.parentNode.lastElementChild.className="bak";
    }
}
divr.onclick=function(){
    var img=document.querySelector("#save>img.show");
    var li=document.querySelector("#sex>li.bak");
    img.className="";
    li.className="";
    clearInterval(timer);
    if (img.nextElementSibling != null) {
        img.nextElementSibling.className = "show";
        li.nextElementSibling.className="bak";

    }
    else{
        img.parentNode.firstElementChild.className="show";
        li.parentNode.firstElementChild.className="bak";

    }
}