// JavaScript Document
function XKCDWidget() {
	var widget = Object.create(new Widget("XKCD"));
	
	// get the JSON information from xkcd.com
	var comicObject;
	$.ajax({
		url: "http://dynamic.xkcd.com/api-0/jsonp/comic",
		async: false,
		dataType: "jsonp",
		success: function(data) {
			comicObject = data;			
			
			// create the image object	
			var image = $("<img>");
			// once the image has finished loading, resize the div to fit the content
			$(image).load( function() {
				var widgetTitle = $(".widgetTitle", widget.html);
				var widgetContent = $(".widgetContent", widget.html);
				
				$(widget.div).height(widgetTitle.height() + widgetContent.height());
				$(widget.div).width($("img",widget.html).width());
			});
			image.attr("src", comicObject.img);
			
			// append inside the content container
			$(".widgetContent", widget.html).append(image);
			
			// and change the title
			widget.setTitle("XKCD - " + comicObject.safe_title);
		}
	});
	
	// turn off resizable
	$(widget.div).resizable("destroy");
	
	return widget;
}