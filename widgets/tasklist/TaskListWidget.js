// JavaScript Document

function TaskListWidget(title) {
	var widget = Object.create(new Widget(title));
	
	// put the task list inside the thingy
	$(".widgetContent", widget.html).load("/widgets/tasklist/content.html");
	widget.list = new Array();
	
	// plug the widget in
	widget.div.object = widget;
	
	return widget;
}

function Task(text) {
	this.text = text;
	this.completed = false;
}