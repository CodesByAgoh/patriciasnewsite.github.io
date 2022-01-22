$(document).ready(function(){
  function animation(){
    $('.phone-image').animate({
      top: "-40px"
    },1000,function(){
      $('.phone-image').animate({
        top: "5px"
      },800,animation)
    })
  }
  animation()
});

// ujhiokjok[o]

$(window).scroll(function(){
  $('nav').toggleClass('scrolled', $(this).scrollTop()>50);
});
