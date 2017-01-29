$(document).ready(function(){
  //SmoothScrolling
  // NAVBAR
  $('.navbar-right li').on('click',function(){
    var hash = $(this).children('a').attr('href');
    if (documentEl.scrollTop() > 1) {
      if ($(window).width() > 768) {
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 60
        }, 1100);
      } if ($(window).width() > 414) {
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 70
        }, 1100);
      } else {
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 90
        }, 1100);
      }
    } else {
      $('html, body').animate({
          scrollTop: $(hash).offset().top - 130
        }, 1100);
    }
  });
  $('.dropdown').on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });
  $('.dropdown').on('hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });
  //Navbar fixed
  documentEl = $(document);
  documentEl.on('scroll', function(){
    if (documentEl.scrollTop() > 80){
        $('nav').addClass('navbar-fixed-top');
        $('#backToTop').removeClass('hidden');
    } else {
      $('nav').removeClass('navbar-fixed-top');
      $('#backToTop').removeClass('hidden');
    }
  });
});