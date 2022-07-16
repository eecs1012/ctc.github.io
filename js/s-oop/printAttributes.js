
function printAttributes(){
    var element = document.getElementById("intro");
    var attribs = element.attributes;
    for(var i = 0; i < attribs.length; i++) {
        console.log(attribs[i]);
    }
}
