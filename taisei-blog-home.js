$(function(){

  $('.slide-button').click(function(){
    var slide = $('.active');
    $(slide).removeClass('active');
    if($(this).hasClass('next')){
      $(slide).next().addClass('active');
    }else{
      $(slide).prev().addClass('active');
    }
    var slideIndex = $('.slide').index($('.active'));
    $('.slide-button').show();
    if(slideIndex == 0){
      $('.previous').hide();
    }else if(slideIndex == $('.slide').length-1){
      $('.next').hide();
    }
  })

  $('aside button').click(function(){
    if($('aside').hasClass('open')){
      $('aside').removeClass('open');
      $('aside button').removeClass('opening');
      $('aside').stop(true).animate({
        left:'-350px'
      },500);
      $('.open-index').attr('src','open.png');
    }else{
      $('aside').addClass('open');
      $('aside button').addClass('opening');
      $('aside').stop(true).animate({
        left:'0px'
      },400);
      $('.open-index').attr('src','close.png');
    }
  })

  $('.header-title').each(function(){

     var $window = $(window);
     var $header = $('.header-title');
     headerOffsetTop = $header.offset().top;

     $window.on('scroll',function(){
       if($window.scrollTop() > headerOffsetTop){
         $header.addClass('sticky');
         $('.twitter-icon').addClass('twitter-sticky');
         $('.instagram-icon').addClass('instagram-sticky');
       }else{
         $header.removeClass('sticky');
         $('.twitter-icon').removeClass('twitter-sticky');
         $('.instagram-icon').removeClass('instagram-sticky');
       }
     })
    $window.trigger('scroll');
  })

  $('.header-background').each(function(){

     currentIndex = 0;
     countIndex = $('.background').length;

     $('.background').eq(currentIndex).fadeIn();

     setInterval(slideShow,2500);

     function slideShow(){
       var nextIndex = (currentIndex + 1)% countIndex;

       $('.background').eq(currentIndex).fadeOut();
       $('.background').eq(nextIndex).fadeIn();

       currentIndex = nextIndex;

     }


  })
})
