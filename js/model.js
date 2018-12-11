(function(exports){
	var notes = [];
	function Note(text) {
		notes.push(text);

		function getNote() {
			var numList = 1;
			document.getElementById("getNote").innerHTML = ""
			for (var i = 0; i < notes.length; i++) {
				document.getElementById("getNote").innerHTML += "<li>"+ numList + "- " + notes[i]+"</li>"
				numList ++;
			}
		}
		return {
			getNote: getNote
		}
	}
	exports.Note = Note;
})(this)