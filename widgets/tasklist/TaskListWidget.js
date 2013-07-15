// JavaScript Document

function TaskListWidget(title) {
	var widget = Object.create(new Widget(title));
	
	// load the content with async off and add into widget content div
	var rawHTML;
	$.ajax({
		url: "/widgets/tasklist/content.html",
		async: false,
		success: function(data) {
			rawHTML = data;
		}
	});
	$(".widgetContent", widget.html).append(rawHTML);
	
	// plug the widget in
	widget.div.object = widget;	
	
	// get the item template and hide it away
	widget.itemTemplate = $("#itemTemplate", widget.html)[0];
	$("<table></table>").append(widget.itemTemplate);
	
	// store an instance of the list table
	widget.table = $(widget.html).find("table")[0];
	
	// fancy member function for widget :D
	widget.addTask = function (task) {
		var newTask = $(widget.itemTemplate).clone();
		$(newTask).attr("id", $(widget.table).find("tr").length.toString());
		$("table", widget.html).append(newTask);
	}
	
	widget.removeCheckedTasks = function(index) {
		// remove checked elements
		$(widget.table).find("tr").each( function(index, value) {
			if (index == 0) {
				return;
			}
			
			var checkbox = $(value).find("input[type=\"checkbox\"]")[0];
			
			if (checkbox.checked) {
				$(value).remove();
			}
		});
		
		// renumber the ID
		$(widget.table).find("tr").each( function(index, value) {
			if (index == 0) {
				return;
			}
			
			$(value).attr("id", index.toString());
		});
	}
	
	return widget;
}

function Task(text) {
	if (text == null) {
		this.text = "";
	}
	else {
		this.text = text;
	}
	this.completed = false;
}