$(document).ready( function() {
  
  var xml;
  var xls;
  $.ajax({
   url: "/widgets/widget_names.xml",
   async: false,
   success: function(data) {
     xml = data;
     $.ajax({
       url: "/widgets/widget_names.xslt",
       async: false,
       success: function(data) {
         xls = data;
         xsltProcessor=new XSLTProcessor();
         xsltProcessor.importStylesheet(xls);
         resultDocument = xsltProcessor.transformToFragment(xml,document);
         alert(resultDocument);
         $('.sidebarContent').append(resultDocument);
         //document.getElementById("sidebarContent").appendChild(resultDocument);
       }
     });
    }
  });

 
});
