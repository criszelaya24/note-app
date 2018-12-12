function Create() {
	this.numList = 0;
	this.color = 'red';
	this.colorSquare = ['red', 'yellow'];
	Create.prototype.newNote = function(value) {
		this.numList ++;
		document.getElementById("getNote").innerHTML += "<div style='background-color:;margin-left: 3em;' class='jumbotron jumbotron-fluid' style='margin-left: 5em;'>"
    				+ "<div class='container'>" +
    					"<h1 class='display-4'> Note#: "+ this.numList +"</h1>" +
    					"<p class='lead'>"+value+"</p>"+
    				"</div>"+
    			"</div>"
		
	};
}