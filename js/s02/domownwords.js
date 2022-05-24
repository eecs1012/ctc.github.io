// JavaScript source code
function domownwords(){
	let domownwords = document.getElementById("domownwords");
	domownwords.innerHTML = "Here is a brief answer for your reference: <br>DOM stands for Document Object Model. It is a programming interface that allows us to create, change, or remove elements from the document. We can also add events to these elements to make our page more dynamic.<br>The DOM views an HTML document as a tree of nodes. A node represents an HTML element.";
	let img = document.getElementById("domtree");
    img.style.visibility = 'visible';
	img.style.width = '800px';
	img.style.height='601px';
};