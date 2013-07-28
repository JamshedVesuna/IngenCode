$(document).ready(function() {

  $(document).keypress(function(j){
    if(j.which == 13){
    $('.sidebar').animate({width: 'toggle'});
    }
  });
  $('#expand').click(function () {
  $('.sidebar').animate({ width: 'toggle'});
 });

});

