// JavaScript Document

// rig the windows to be displayed
$(document).ready( function() {
	var firstWidget = new TaskListWidget("test frame");
	$("#widgetContainer").append(firstWidget.html);
	
	// enable movement of windows
	$(".widget").draggable();
	$(".widget").resizable();
});