function inputTextBox1() {
  var x = document.getElementById("password1").value;
}

function inputTextBox2() {
  var y = document.getElementById("password2").value;
}


function checkIfValid() {

  var x = document.getElementById("password1").value;
  var y = document.getElementById("password2").value;

  if ( x.length < 8 || y.length < 8 ) {
  alert("The password must be at least eight characters long!");
}
  else if ( !(x == y) ) {
  alert("The passwords don't match!");
}
  else if ( x == y ) {
  alert("The password is valid!");
}

}
