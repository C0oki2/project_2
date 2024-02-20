
$(function(){
    $(".a").click (function(){
        $(".b").slideToggle();
        
    });
});

$(window).resize(function(){
  if(window.innerWidth >= 768) {
    $('.b').show();
  }
});


/*슬라이더 부분 자바스크립트*/
   
if (window.matchMedia("(max-width: 999px)").matches) { 

    $('.prev').click(function(){
    $('.slide li:last').prependTo('.slide');
    $('.slide').css('margin-left','-100%');
    $('.slide').stop().animate({marginLeft:0},800);});
  
    $('.next').click(function(){
      $('.slide').stop().animate({marginLeft:'-100%'},800, function(){
        $('.slide li:first').appendTo('.slide');
        $('.slide').css({marginLeft:0}); });
     });
}else {
$('.prev').click(function(){
    $('.slide li:last').prependTo('.slide');
    $('.slide').css('margin-left',-1000);
    $('.slide').stop().animate({marginLeft:0},800);});
  
    $('.next').click(function(){
      $('.slide').stop().animate({marginLeft:-1000},800, function(){
        $('.slide li:first').appendTo('.slide');
        $('.slide').css({marginLeft:0}); });
     });

}

  

/*이순신 응용 부분*/

$(function() {
  $("#article_b > div:first").click(function() {
    $("#div1").show().siblings('[id^="div"]').hide();
  });

  $("#article_b > div:eq(1)").click(function() {
    $("#div2").show().siblings('[id^="div"]').hide();
  });

  $("#article_b > div:last").click(function() {
    $("#div3").show().siblings('[id^="div"]').hide();
  });
});
