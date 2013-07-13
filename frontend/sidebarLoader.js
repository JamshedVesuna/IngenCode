$(document).ready( function() {
	var xmlData;
	$.ajax({
		url: "/widgets/widget_names.xml",
		dataType: "xml",
		async: false,
		success: function(data) {
			xmlData = data;
		}
	});
	
	var xsltData;
	$.ajax({
		url: "/widgets/widget_names.xslt",
		dataType: "xml",
		async: false,
		success: function(data) {
			xsltData = data;
		}
	});
	
	xsltProcessor = new XSLTProcessor();
	xsltProcessor.importStylesheet(xsltData);
	var resultDocument = xsltProcessor.transformToFragment(xmlData, document);
	
	$(".sidebarContent").append(resultDocument);
});
