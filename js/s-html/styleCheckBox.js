// JavaScript source code
function styleCheckBox(){
	let doctype = document.getElementById("doctype");
	let doctypejudge = document.getElementById("doctypejudge");
	let doctypereason = document.getElementById("doctypereason");
	if(doctype.checked == true)
		doctypejudge.innerHTML = "Correct!";
	else{doctypejudge.innerHTML = "Oops! Declare the document type is indeed important.";
	}
	doctypereason.innerHTML = "1.&nbsp;The DOCTYPE declaration is an instruction to the web browser about what version of HTML the page is written in. This ensures that the web page is parsed the same way by different web browsers.<br>";
	

	let lowercase = document.getElementById("lowercase");
	let lowercasejudge = document.getElementById("lowercasejudge");
	let lowercasereason = document.getElementById("lowercasereason");
	if(lowercase.checked == true)
		lowercasejudge.innerHTML = "Correct!";
	else{lowercasejudge.innerHTML = "Oops! Using mixture of uppercase and lowercase when dealing with attributes and elements may cause trouble.";
	}
	lowercasereason.innerHTML = "1.&nbsp;simplifies implementation; you'll only have to look for one variant to match a tag, not all its case-sensitive variants. <br>";
	lowercasereason.innerHTML += "2.&nbsp;XHTML documents must use lower case for all HTML element and attribute names. This difference is necessary because XML is case-sensitive e.g. &#60;li/> and &#60;LI/> are different tags.The HTML document type declaration, also known as DOCTYPE, the first line of code required in every HTML or XHTML document.<br>";

	
	let space = document.getElementById("space");
	let spacejudge = document.getElementById("spacejudge");
	let spacereason = document.getElementById("spacereason");
	if(space.checked == true)
		spacejudge.innerHTML = "Oops! HTML is a markup language, not a coding language.";
	else{spacejudge.innerHTML = "Correct!";
	}
	spacereason.innerHTML = "Adding unnecessary space will add to the page size, so if bandwidth and performance are concerns, try to limit the amount of whitespace you use.<br>";


	let altimg = document.getElementById("altimg");
	let altimgjudge = document.getElementById("altimgjudge");
	let altimgreason = document.getElementById("altimgreason");
	if(altimg.checked == true)
		altimgjudge.innerHTML = "Correct!";
	else{altimgjudge.innerHTML = "Adding alt attribute is a better styling.";
	}
	altimgreason.innerHTML = "This text helps screen-reading tools describe images to visually impaired readers and allows search engines to better crawl and rank your website<br>";

};