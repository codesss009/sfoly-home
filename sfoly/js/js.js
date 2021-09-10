$(document).ready(function() {


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 60) {
        //clearHeader, not clearheader - caps H
        $(".navbar").addClass("bg-light");
    } else {
      $(".navbar").removeClass("bg-light");
    }
}); //missing );
  
  
  
  

  
// document ready  
});$(document).ready(function(){

  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('nav').toggleClass('nav-toggle');
  });

  $(window).on('load scroll',function(){

  if($(window).scrollTop() > 20){

  $('#header').css('top','0');
  
  $('.fa-bars').removeClass('fa-times');
  $('nav').removeClass('nav-toggle');

  }else{
  $('#header').css('top','-100%');
  }
 }
 );

});