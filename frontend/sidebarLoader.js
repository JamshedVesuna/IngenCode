$(document).ready( function() {
  
  var xml;
  $.ajax({
   url: "/widgets/widget_names.xml",
   async: false,
   success: function(data) {
     xml = data;
  }
  });

  var xls;
  $.ajax({
    url: "/widgets/widget_names.xslt",
    async: false,
    success: function(data) {
      xls = data;
    }
  });
 
   xsltProcessor=new XSLTProcessor();
   xsltProcessor.importStylesheet(xls);
   resultDocument = xsltProcessor.transformToFragment(xml,document);
   document.getElementById("sidebarContent").appendChild(resultDocument);
});
