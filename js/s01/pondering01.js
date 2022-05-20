
function pondering01(){

  const h = document.getElementById('h');
  const t = document.getElementById('t');
  const m = document.getElementById('m');
  let sol01 = document.getElementById('sol01');

  if(h.value == "hyper" && t.value == "text" && m.value == "markup"){
    sol01.innerHTML="Correct! A Very Important Abbreviation!<br>HTML describes the contents, purpose and hierarchy of the text. <br>It is up to the browser to decide what and how to do with that text.";

  }
  else{
    sol01.innerHTML="What a pity! The correct answer is: hyper text markup language";
  }
}