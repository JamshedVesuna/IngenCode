function bindS(){
  $(document).bind('keydown', 's', function (){
    alert("worked");
    $('.sidebar').animate({width: 'toggle'});

  });
}

$(document).bind('keydown','s', function (){

  $('.sidebar').animate({width: 'toggle'});
  });


$(document).ready(function() {
  $('#bindS').bind('click', bindS);
  $('#expand').click(function () {
  $('.sidebar').animate({ width: 'toggle'});
 });

});

