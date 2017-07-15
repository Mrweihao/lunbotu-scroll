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
	//��i���������жϵ�����������ĸ���ť
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
  auto(); //������һ�ζ�ʱ�������⿪ͷ�հ�
  function auto(){
    timer = setInterval(function(){
    index ++;
    (index>=$tabLi.length)&&(index=0);
    $tabLi.eq(index).addClass('active').siblings().removeClass('active');
    $picLi.eq(index).fadeIn().siblings().fadeOut();
  },1500);
  }
  
});