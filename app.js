window.onscroll = function() {
  showNavLogo();
};

function showNavLogo() {
  var scrollHeight = $(this).scrollTop();
  if (scrollHeight > 300) {
    $('nav .logo').css('display', 'inline-block');
    $('nav').css('justify-content', 'space-between');
 } else {
    $('nav .logo').css('display', 'none');
    $('nav').css('justify-content', 'flex-end');
  }
};