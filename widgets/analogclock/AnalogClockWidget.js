// JavaScript Document

function AnalogClockWidget() {
	// create a new widget
	var widget = Object.create(new Widget("Clock"));
	
	// put the html into the content div
	var rawHTML;
	$.ajax({
		url: "/widgets/analogclock/content.html",
		async: false,
		success: function(data) {
			rawHTML = data;
		}
	});
	$(".widgetContent", widget.html).append(rawHTML);
	
	// trigger the content loaded event
	$(widget).trigger("widgetContentLoaded");
	
	widget.tickFunction = function() {
		var now = new Date();
		
		var largeRotation = now.getMinutes() / 60 * 360;
		var smallRotation = now.getHours() / 12 * 360 + largeRotation / 12;
		
		$("#largeHand").css("-webkit-transform", "rotate(" + largeRotation.toString() + "deg)");
		$("#smallHand").css("-webkit-transform", "rotate(" + smallRotation.toString() + "deg)");
	}
	
	// turn on the tick function
	widget.tickFunction();
	setInterval(widget.tickFunction, 1000);
	
	return widget;
}