
$(window).scroll(function(){
    let st = $(window).scrollTop();

    let foot = $('#wrap7').offset().top - $(window).innerHeight();
    
    if (st > foot) {
        $('#sub_wrap2').hide();
    } else {
        $('#sub_wrap2').fadeIn();
    }
});

/*nav */
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

/*연회비 */
$(function(){
    $("#sub_wrap3 h2").click(
    function(){
     $("#sub_wrap3 img").toggleClass("click");
     
     $("#sub_wrap3 > div ").stop().slideToggle();
    });
});

/*할인 한 눈 슬라이드*/
$(window).scroll(function(){
        
    let ws = $(this).scrollTop();

   let fixWrap = $('#leftWrap').offset().top; 

   let move = ws - fixWrap;  

   let end = $('.content').width() - $(window).innerWidth(); 

   if(ws > fixWrap && ws < fixWrap+end){      

     $('.content').css('transform',`translateX(-${move}px)`);

   }else if(ws >= fixWrap+end) {

     $('.content').css('transform',`translateX(-${end}px)`);
   }

 });

 /*팝업창*/
     $(function(){

      $('#content_box > img').click(function(){
        $('#boxWrap').fadeIn();

      });

      $('#close').click(function(){
        $('#boxWrap').fadeOut();
      });

    });


