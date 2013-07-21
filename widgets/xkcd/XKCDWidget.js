// JavaScript Document
function XKCDWidget() {
	var widget = Object.create(new Widget("XKCD"));
	
	var comicObject;
	$.ajax({
		url: "http://dynamic.xkcd.com/api-0/jsonp/comic",
		async: false,
		dataType: "jsonp",
		success: function(data) {
			comicObject = data;
			console.log(comicObject);
			
				
			var image = $("<img>");
			//$(image).load(widget.sizeDivAppropriately);
			$(image).load(function() {
				$(widget.div).height($(".widgetContent", widget.html).height() + $(".widgetTitle", widget.html).height());
			});
			image.attr("src", comicObject.img);
			
			$(".widgetContent", widget.html).append(image);
		}
	});
	
	// turn off resizable
	$(widget.div).resizable("destroy");
	
	return widget;
}