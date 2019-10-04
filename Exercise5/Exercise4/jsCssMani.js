function updateValues() {

var par = document.getElementById("myPar");

var bordR = document.getElementById("bordR").value;
var bordG = document.getElementById("bordG").value;
var bordB = document.getElementById("bordB").value;
var bordWid = document.getElementById("bordWid").value;
var backR = document.getElementById("backR").value;
var backG = document.getElementById("backG").value;
var backB = document.getElementById("backB").value;

par.style.borderColor = `rgb(${bordR}, ${bordG}, ${bordB})`;
par.style.borderWidth = bordWid;

par.style.backgroundColor = `rgb(${backR}, ${backG}, ${backB})`;

}
