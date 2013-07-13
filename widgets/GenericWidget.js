// JavaScript Document

function GenericWidget() {
	var ajaxData;
	$.ajax({
		url: "generic/generic.html",
		async: false,
		success: function(data) {
			ajaxData = $(data);
		}
	});
	
	this.html = ajaxData;
}