// JavaScript Document
function Bookmark() {
	// instantiate the Widget class
	widget = Object.create(new Widget);
	
	$.ajax({
		url: "/widgets/bookmark/content.html",
		dataType: "html",
		success: function(data) {
			// append the data to widget content
			$(widget.div).find(".widgetContent").append(data);
		}
	});
	
	widget.onDrop(e) {
	}
	
	// set the window.onDrop to listen for drops in widgetContent
	$(widget.div).find(".widgetContent").on("drop", widget.onDrop);
}