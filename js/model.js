(function(exports){
	var notes = [];
	function Note(text) {
		notes.push(text);
		var create = new Create;

		function getNote() {
			document.getElementById("getNote").innerHTML = ""
			for (var i = 0; i < notes.length; i++) {
				create.newNote(notes[i]);
			}
		}
		return {
			getNote: getNote
		}
	}
	exports.Note = Note;
})(this)