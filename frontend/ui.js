function bindS(){
  $(document).bind('keydown', 'alt+s', function (){
    $('.sidebar').animate({width: 'toggle'});

  });
}

//$(document).bind('keydown','s', function (){

  //$('.sidebar').animate({width: 'toggle'});
 // });


$(document).ready(function() {
  $('#bindS').bind('click', bindS);
  $('#expand').click(function () {
  $('.sidebar').animate({ width: 'toggle'});
 });

});

