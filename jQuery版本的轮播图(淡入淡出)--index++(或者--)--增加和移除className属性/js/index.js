$(function(){
  var $tabLi = $('#banner .tab li');
  var $picLi = $('#banner .pic li');
  var $btnDiv = $('#banner .btn div');
  var $btn = $('#banner .btn');
  var $banner = $('#banner');
  var index = 0;
  var timer;

  $tabLi.hover(function(){
    index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $picLi.eq(index).fadeIn().siblings().fadeOut();
  });
  $banner.hover(function(){
    $btn.show();
    clearInterval(timer);
  },function(){
    $btn.hide();
    auto();
  });
  $btnDiv.click(function(){
    var i = $(this).index();
    // console.log(i)
	//用i的正负来判断点击的是左右哪个按钮
    if( i >0){
      index ++;
      (index>=$tabLi.length)&&(index=0)
    }else{
      index --;
      //if( index < 0 ){
       // index = $tabLi.length - 1; 
      //}
	  (index<0)&&(index=$tabLi.length - 1)   
    }
    $tabLi.eq(index).addClass('active').siblings().removeClass('active');
    $picLi.eq(index).fadeIn().siblings().fadeOut();
  });
  auto(); //先启动一次定时器，避免开头空白
  function auto(){
    timer = setInterval(function(){
    index ++;
    (index>=$tabLi.length)&&(index=0);
    $tabLi.eq(index).addClass('active').siblings().removeClass('active');
    $picLi.eq(index).fadeIn().siblings().fadeOut();
  },1500);
  }
  
});