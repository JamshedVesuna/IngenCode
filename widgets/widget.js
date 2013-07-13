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
	this.html = $(rawHTML);
	
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
	
	// post function definition init
	this.setTitle(title);
}