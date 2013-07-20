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
	
	// Member functions
	//
	// Adds a task to the list
	widget.addTask = function (task) {
		var newTask = $(widget.itemTemplate).clone();
		$(newTask).attr("id", $(widget.table).find("tr").length.toString());
		$("table", widget.html).append(newTask);
		
		widget.sizeDivAppropriately();
	}
	
	// removes all checked tasks from the list
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
	
	// converts the list into a nice JSON file
	widget.exportToJSON = function() {
		// generate the container object and the list
		var outObject = new Object();
		outObject.tasks = [];
		
		var checks = $("input[type=\"checkbox\"]", widget.html);
		var inputs = $("input[type=\"text\"]", widget.html);
		
		if (checks.length != inputs.length) {
			alert("Error: something is seriously wrong");
			return;
		}
		
		// save away the list
		for (var n = 0; n < checks.length; n++) {
			var tempObject = new Object();
			tempObject.completed = checks[n].checked;
			tempObject.text = $(inputs[n]).val();
			
			outObject.tasks.push(tempObject);
		}
		
		// stringify the object
		return JSON.stringify(outObject);
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