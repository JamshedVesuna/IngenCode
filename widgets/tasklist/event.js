// JavaScript Document

function addTask(e) {
	// get the class object
	var widgetHTML = $(event.currentTarget).closest(".widget")[0];
	var widget = widgetHTML.object;
	
	widget.addTask(new Task());
}