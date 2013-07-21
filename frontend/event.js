// JavaScript Document

// rig the windows to be displayed
$(document).ready( function() {
	var firstWidget = new TaskListWidget("Tasks");
	$("#widgetContainer").append(firstWidget.html);
	
	var secondWidget = new AnalogClockWidget();
	$("#widgetContainer").append(secondWidget.html);
	
	var thirdWidget = new XKCDWidget();
	$("#widgetContainer").append(thirdWidget.html);
});