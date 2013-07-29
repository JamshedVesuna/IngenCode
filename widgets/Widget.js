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
	
	this.bringToFront = function() {
		// get the widget div
		var currentIndex = parseInt($(this).css("z-index"));
		
		// search for the highest index
		var newIndex = currentIndex + 10;
		$(".widget").each(function() {
			var index = parseInt($(this).css("z-index"));
			
			if (index > newIndex) {
				newIndex = index + 10;
				console.log(newIndex);
			}
		});
		
		console.log(newIndex);
		
		$(this).css("z-index", newIndex);
		$(this).find("*").each(function() {
			itemIndex = parseInt($(this).css("z-index"));
			if (isNaN(itemIndex)) {
				$(this).css("z-index", newIndex);
			}
			else {
				$(this).css("z-index", itemIndex - currentIndex + newIndex);
			}
		});
	}
	
	// post function definition init
	this.setTitle(title);
	this.movable(true);
	
	$(this.div).on("mousedown", this.bringToFront);
}
