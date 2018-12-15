window.addEventListener('hashchange', function(event){
	event.preventDefault()
	if (window.location.hash === "") {
		showForm();
		note.getNote();
	}else{
		var idNote = window.location.hash.split('#note/')[1]
		this.note.showNote(idNote);
		hideForm();
	}
});

window.addEventListener('load', function(event){
	console.log('Load Function active')
	// document.getElementById('btn').onclick = function(){
	// 	return false
	// 	getIndex()
	// }
});

function call() {
	var newText = document.getElementById("text");
	if (newText.value === '') {
		alert('No valid emty string')

	}else{
		this.note = new Note(newText.value);
		this.note.getNote();
		document.getElementById("text").value = ""
	}
}

function hideForm() {
	document.getElementById("text").style.display = "none";
	document.getElementById("add-note").style.display = "none";
}

function showForm() {
	document.getElementById("text").style.display = "block";
	document.getElementById("add-note").style.display = "block";
}