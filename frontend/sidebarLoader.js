$(document).ready( function() {
  
  var xml;
  var xls;
  $.ajax({
   url: "/widgets/widget_names.xml",
   success: function(data) {
     xml = data;
     $.ajax({
       url: "/widgets/widget_names.xslt",
       success: function(data) {
         xls = data;
         xsltProcessor=new XSLTProcessor();
         xsltProcessor.importStylesheet(xls);
         resultDocument = xsltProcessor.transformToFragment(xml,document);
         //alert(resultDocument);
         $('.sidebarContent').append(resultDocument);
         //document.getElementById("sidebarContent").appendChild(resultDocument);
       }
     });
    }
  });


$.get('/widgets/widget_names.xml')
 .done(function(data){    
  // this function is executed if the request was sucessfull
  //alert("yay!");
 })
 .fail(function(){
 //alert("Oh no!");
 // this function is executed if the request fails
 });
            


$.get('/widgets/widget_names.xml')
.done(function(data){
  // parse the xml
  data = $.parseXML(data);
 // do anything you want with the parsed data
 //alert(data);
 $('.sidebarContent').append(data);
  })
  .fail(function(){
  //alert('something went wrong!');
   })    ;
  
 
});
