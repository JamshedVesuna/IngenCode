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
	
	// adds a bookmark to the list
	widget.addBookmark(linkText) {
		var newItem = $("<li>");
		$(newItem).attr("class", "bookmarkItem");
		$(newItem).text(linkText);
		
		$(widget.bookmarkList).append(newItem);
	}

	// removes a bookmark from the list
	widget.removeBookmark(index) {
		var bList = widget.bookmarkList;

		$(bList).eq(index).remove();
	}

	// on drop function runs when an item is placed in the div
	widget.onDrop() {
	}
}