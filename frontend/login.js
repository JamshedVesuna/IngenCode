// JavaScript Document
function loginSubmit(e) {
	var table = $("#loginBox").find("table");
	
	var valueList = []	
	table.find("input").each( function() {
		if ($(this).val() == "") {
			$(this).css("background-color", "red");
			$(this).click(unHighlight);
			return;
		}
		
		var inputEntry = new Object();
		inputEntry.id = $(this).attr("id");
		inputEntry.value = $(this).val();
				
		valueList.push(inputEntry);
	});
	
	alert(JSON.stringify(valueList));
}

// to unhighlight items that were required for a form input
function unHighlight(e) {
	$(e.currentTarget).css("background-color", "white");
	event.currentTarget.onclick = null;
}