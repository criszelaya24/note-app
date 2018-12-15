(function(exports){
	var notes = [];
	var numList = 0;
	function Note(text) {
		numList++;
		notes.push({id: numList, text: text});
		var create = new Create;

		function getNote() {
			document.getElementById("getNote").innerHTML = ""
			for (var i = 0; i < notes.length; i++) {
				create.newNote(notes[i]["id"], notes[i]["text"]);
			}
		}

		function showNote(idNote) {
			var id =  parseInt(idNote, 10); // Convert string to integer
			for (var i = 0; i < notes.length; i++) {
				if (id === notes[i]["id"]) {
					create.noteView(notes[i]["id"], notes[i]["text"]);
				}
			}
		}
		return {
			getNote: getNote,
			showNote: showNote
		}
	}
	exports.Note = Note;
})(this)