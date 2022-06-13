// JavaScript source code
function langAtt(){
  let langChoice = document.querySelector('input[name="langatt"]:checked').value;

  switch (langChoice) {
    case 'vallang':
      document.getElementById("sol03").innerHTML = "Correct!";
      break;

    case 'wrong':
      document.getElementById("sol03").innerHTML = "Sorry, this attribute is an abbreviation. Please try again.";
      break;

      default:
      doucment.getElementById("sol03").innerHTML = "Default";
   }
};
