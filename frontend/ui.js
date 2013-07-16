$(document).ready(function() {
  $('#expand').click(function () {
  $('.sidebar').animate({ width: 'toggle'});
 });
});

$(document).on('keydown', "s", function open_sidebar(){
  $('.sidebar').animate({
    width: 'toggle'});
  });
