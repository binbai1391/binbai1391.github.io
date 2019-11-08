$(document).ready(function(){

  $(window).scroll(function(){
    if($(window).scrollTop() === 0){
      $('#animate-about').removeClass('animated slideInLeft');
      $('#services').removeClass('animated slideInRight')
         $('footer').removeClass('animated slideInUp');
    }
  })

  $('a').smoothScroll();

// Navbar Collapse Click//

const blackToggler = function(){
  if (  $('.navbar').hasClass('black-off')){
      $('.navbar').removeClass('black-off');
        $('.navbar').addClass('black-on');
  }
  else{
      $('.navbar').removeClass('black-on');
    $('.navbar').addClass('black-off');
  }
}

$('#toggler').click(function(e){
    blackToggler();

})

$('.navbar-collapse').click(function(e){
  if($(e.target).is('.hide')){
    $(this).collapse('hide');
    $('.navbar').removeClass('black-on');
  $('.navbar').addClass('black-off');
  }
  else if($(e.target).is('.no-hide')){
  $('.navbar').addClass('black-on');
  }
});


//Landing Page//

const shake = function(){
  $('#handdown').effect('shake',{times:3, distance:10, direction: 'down'},3000);
}

 $('#handdown').hover(function(e){
   shake();
 });


 // Animation Scroll effect.

 $(window).scroll(function(){
   let position = $(window).scrollTop();
   if((position > 80) && (position <688)){
     $('#animate-about').addClass('animated slideInLeft');
   }
   if((position > 500) && (position <1000)){
     $('#services').addClass('animated slideInRight');
   }
   if(position > 1000){
     $('footer').addClass('animated slideInUp');
   }
 })





});
