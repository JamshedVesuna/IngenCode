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
			image.attr("src", comicObject.img);
			
			$(".widgetContent", widget.html).append(image);
		}
	});
	
	return widget;
}