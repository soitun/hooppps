// toggle content div and about div visibility
// also toggle button text about/close
// ------------------------------------------
$(function() {
  $('.about').toggle(function() {
    $('#content').fadeOut(400, function() {
      $('.about').text('close');
      $('#about').slideDown(400);
    });
  }, function() {
    $('#about').slideUp(400, function() {
      $('.about').text('about');
      $('#content').fadeIn('fast');
    });
  });
});