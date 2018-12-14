function call() {
	var newText = document.getElementById("text");
	if (newText.value === '') {

	}else{
		var note = new Note(newText.value);
		note.getNote();
		document.getElementById("text").value = ""
	}
}

window.addEventListener('load', function(e){
	console.log('Load Function active')
});