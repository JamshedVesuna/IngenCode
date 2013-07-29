// JavaScript Document

function IframeWidget(title) {
	var widget = Object.create(new Widget(title));
	
	$(".widgetContent", widget.html).load("/widgets/iframe/content.html");
	
	return widget;
}