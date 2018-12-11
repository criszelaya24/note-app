function call() {
	var newText = document.getElementById("text");
	var note = new Note(newText.value);
	note.getNote();
	document.getElementById("text").value = ""
}