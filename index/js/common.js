// 导航栏的出现与隐藏

$(document).ready(function(){
  $("#subnav").on('click','li',function(){
    var typename = $(this).data('type');
    $(this).addClass('active').siblings('li').removeClass('active');
    var ele = $(".acticals a");
    setList(ele,typename);
  })

  function setList(ele,type){
    console.log(ele);
    if(ele.length==0) return;
    for(var i=0; i<ele.length; i++){
      if($(ele[i]).hasClass(type)){
        $(ele[i]).fadeIn();
      }else{
         $(ele[i]).hide();
      }
    }
  }



})
