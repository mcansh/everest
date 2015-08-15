$(document).ready (function () {
 $(window).scroll (function () {
    var sT = $(this).scrollTop();
        if (sT >= 300) {
            $('nav').addClass('scrolled');
        }else {
            $('nav').removeClass('scrolled');
        }
  });
});
