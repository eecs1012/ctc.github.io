// JavaScript source code
function inlinecheckbox(){
	let tagspan = document.getElementById("tagspan");
	let tagspanjudge = document.getElementById("tagspanjudge");
	if(tagspan.checked == true)
		tagspanjudge.innerHTML = "Oops!";
	else{tagspanjudge.innerHTML = "Correct!";
	}

	let taga = document.getElementById("taga");
	let tagajudge = document.getElementById("tagajudge");
	let tagareason = document.getElementById("tagareason");
	if(taga.checked == true)
		tagajudge.innerHTML = "Correct!";
	else{taga.innerHTML = "Oops! ";
	}
	tagareason.innerHTML = "tag a is the only inline element that can wrap blcok elements.";
	
	let tagcite = document.getElementById("tagcite");
	let tagcitejudge = document.getElementById("tagcitejudge");
	if(tagcite.checked == true)
		tagcitejudge.innerHTML = "Oops!.";
	else{tagcitejudge.innerHTML = "Correct!";
	}

	let tagstrong = document.getElementById("tagstrong");
	let tagstrongjudge = document.getElementById("tagstrongjudge");
	if(tagstrong.checked == true)
		tagstrongjudge.innerHTML = "Oops!.";
	else{tagstrongjudge.innerHTML = "Correct!";
	}

};