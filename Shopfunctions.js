status = "off";

function activatesearchbar() {
  if (status = "off") {
    console.log(status)
    document.getElementById('searchbar').style.display = 'block';
  var  status = "on";
    console.log (status)
  } else if (status = "on") {
    document.getElementById('searchbar').style.display = 'none'
    console.log("why?")
  }
};




/*
function activatelanguagebar(){
  document.getElementById('languageicon').onmousedown = 'deactivatelanguagebar()';
  document.getElementById('languagecontainer').style.display= 'flex';
  document.getElementById('selectedflag').onmousedown='deactivatelanguagebar()';
};
function deactivatelanguagebar(){
  document.getElementById('languagecontainer').style.display='none'

};
*/
