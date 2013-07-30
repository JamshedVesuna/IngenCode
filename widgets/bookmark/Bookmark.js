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
			
			// store away the bookmark list
			widget.bookmarkList = $(widget.html).find(".bookmarkList")[0];
		}
	});
	
	widget.addBookmark(linkText) {
		var newItem = $("<li>");
		$(newItem).attr("class", "bookmarkItem");
		$(newItem).text(linkText);
		
		$(widget.bookmarkList).append(newItem);
	}
	
	// set the window.onDrop to listen for drops in widgetContent
	$(widget.div).find(".widgetContent").on("drop", widget.onDrop);
}