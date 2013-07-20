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
	
	this.html = $("<div>").html(rawHTML);
	this.div = $(".widget", this.html)[0];
	
	// Class functions
	//
	this.setTitle = function(newTitle) {
		this.title = newTitle;
		$(".widgetTitle", this.html).text(this.title);
	}
	
	this.hideTitle = function() {
		$(".widgetTitle", this.html).setAttr("hidden");
	}
	
	this.showTitle = function() {
		$(".widgetTitle", this.html).removeAttr("hidden");
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
}
