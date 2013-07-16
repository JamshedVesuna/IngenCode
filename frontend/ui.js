$(document).bind('keydown','s', function (){
  $('.sidebar').animate({width: 'toggle'});
  });


$(document).ready(function() {
  $('#expand').click(function () {
  $('.sidebar').animate({ width: 'toggle'});
 });

});

