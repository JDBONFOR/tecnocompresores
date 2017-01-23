$(document).ready(function(){
  //SmoothScrolling
  // NAVBAR
  $('.navbar-right li').on('click',function(){
    var hash = $(this).children('a').attr('href');
    if ($(window).width() > 768) {
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 60
      }, 'slow');
    } if ($(window).width() > 414) {
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 70
      }, 'slow');
    } else {
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 90
      }, 'slow');
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
    if (documentEl.scrollTop() > 0){
        $('.header-main').addClass('fixed');
        $('#backToTop').removeClass('hidden');
    } else {
      $('.header-main').removeClass('fixed');
      $('#backToTop').removeClass('hidden');
    }
  });
});