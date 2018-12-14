function Create() {
	this.color = 'red';
	this.colorSquare = ['red', 'yellow'];
	Create.prototype.newNote = function(id,value) {
		document.getElementById("getNote").innerHTML += "<div style='background-color:;margin-left: 1em;' class='jumbotron jumbotron-fluid' style='margin-left: 5em;'>"
    				+ "<div class='container'>" +
    					"<h1 class='display-4'> Note#: "+ id +"</h1>" +
    					"<p class='lead'>"+value+"</p>"+
    				"</div>"+
    			"</div>"
		
	};
}