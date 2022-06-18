// JavaScript source code
function jsChange(){
	let attributename = document.getElementById("attribute-name");
	let attributenamejudge = document.getElementById("attribute-namejudge");
	if(attributename.checked == true)
		attributenamejudge.innerHTML = "Oops! attribute name cannot be changed by js";
	else{attributenamejudge.innerHTML = "Correct!";
	}

	let attributevalue = document.getElementById("attribute-value");
	let attributevaluejudge = document.getElementById("attribute-valuejudge");
	if(attributevalue.checked == true)
		attributevaluejudge.innerHTML = "Correct!";
	else{attributevaluejudge.innerHTML = "Oops! Js can change the attribute value";
	}
	
	let enclosedtagcontent = document.getElementById("enclosed-tag-content");
	let enclosedtagcontentjudge = document.getElementById("enclosed-tag-contentjudge");
	if(enclosedtagcontent.checked == true)
		enclosedtagcontentjudge.innerHTML = "Correct! ";
	else{enclosedtagcontentjudge.innerHTML = "Oops! Js can change the enclosed tag content";
	}

	let stylevalue = document.getElementById("style-value");
	let stylevaluejudge = document.getElementById("style-valuejudge");
	if(stylevalue.checked == true)
		stylevaluejudge.innerHTML = "Correct! ";
	else{stylevaluejudge.innerHTML = "Oops! style calue can be changed by Js.";
	}
};