// JavaScript Document

function Widget(title) {
	// prelimiary init
	var rawHTML;
	$.ajax({
		url: "/widgets/widget.html",
		async: false,
		success: function(data) {
			rawHTML = data;
		}
	});
	
	// Class variables
	//
	this.html = $("<div>").html(rawHTML);
	this.div = $(".widget", this.html)[0];
	
	// Class functions
	//
	this.movable = function(yes) {
		$(this.div).draggable(yes);
		$(this.div).resizable(yes);
	}
	
	// sets the title of the 
	this.setTitle = function(newTitle) {
		$(".widgetTitle", this.html).text(newTitle);
	}
	
	this.showTitle = function(yes) {
		if (yes) {
			$(".widgetTitle", this.html).removeAttr("hidden");
		}
		else {
			$(".widgetTitle", this.html).setAttr("hidden");
		}
	}
	
	this.sizeDivAppropriately = function() {
		var container = $(".widget", this.html);
		var contentDiv = $(".widgetContent", this.html);
		var title = $(".widgetTitle", this.html);
		
		// set the height if it's too large for the container
		var combinedHeight = title.outerHeight() + contentDiv.outerHeight();
		if (combinedHeight > container.height()) {
			container.height(combinedHeight);
		}
	}
	
	// post function definition init
	this.setTitle(title);
	this.movable(true);
}
