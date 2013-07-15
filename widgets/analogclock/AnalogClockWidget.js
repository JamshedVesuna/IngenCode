// JavaScript Document

function AnalogClockWidget() {
	var widget = Object.create(new Widget());
	
	var rawHTML;
	$.ajax({
		url: "/widgets/analogclock/content.html",
		async: false,
		success: function(data) {
			rawHTML = data;
		}
	});
	
	$(".widgetContent", widget.html).append(rawHTML);
}