// JavaScript Document

// rig the windows to be displayed
$(document).ready( function() {
	var firstWidget = new TaskListWidget("Tasks");
	$("#widgetContainer").append(firstWidget.html);
});