// JavaScript Document

function TaskListWidget(title) {
	var widget = Object.create(new Widget(title));
	
	// load the content with async off and add into widget content div
	var rawHTML;
	$.ajax({
		url: "/widgets/tasklist/content.html",
		async: false,
		success: function(data) {
			rawHTML = data;
		}
	});
	$(".widgetContent", widget.html).append(rawHTML);
	
	// init the 
	widget.list = new Array();
	
	// plug the widget in
	widget.div.object = widget;	
	
	widget.itemTemplate = $("#itemTemplate", widget.html)[0];
	$("<table></table>").append(widget.itemTemplate);
	
	return widget;
}

function Task(text) {
	this.text = text;
	this.completed = false;
}