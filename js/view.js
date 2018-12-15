function Create() {
	Create.prototype.newNote = function(id,text) {
		document.getElementById("getNote").innerHTML += "<div style='background-color:;margin-left: 1em;' class='jumbotron jumbotron-fluid' style='margin-left: 5em;'>"
    				+ "<div class='container'>" +
    					"<h1 class='display-4'><a href='#note/"+id+"'> Note#: "+ id +"</a></h1>" +
    					"<p class='lead'>"+text+"</p>"+
    				"</div>"+
    			"</div>"
		
	};

	Create.prototype.noteView = function(id, text) {
		document.getElementById("getNote").innerHTML = ""
		document.getElementById("getNote").innerHTML = "<div style='background-color:;margin-left: 1em;' class='jumbotron jumbotron-fluid' style='margin-left: 5em;'>"
    				+ "<div class='container'>" +
    					"<h1 class='display-4'> Note#: "+ id +"</h1>" +
    					"<p class='lead'>"+text+"</p>"+
    				"</div>"+
    			"</div>"
	};
}