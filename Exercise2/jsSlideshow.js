function Previous() {

var img = document.getElementById("mainPic").src;

if (img.endsWith("RTL1.jpg")) {
document.getElementById("mainPic").src = "RTL5.jpg";
}
else if (img.endsWith("RTL5.jpg")) {
document.getElementById("mainPic").src = "RTL4.jpg";
}
else if (img.endsWith("RTL4.jpg")) {
document.getElementById("mainPic").src = "RTL3.jpg";
}
else if (img.endsWith("RTL3.jpg")) {
document.getElementById("mainPic").src = "RTL2.jpg";
}
else if (img.endsWith("RTL2.jpg")) {
document.getElementById("mainPic").src = "RTL1.jpg";
}

}

function Next() {

var img = document.getElementById("mainPic").src;

if (img.endsWith("RTL1.jpg")) {
document.getElementById("mainPic").src = "RTL2.jpg";
}
else if (img.endsWith("RTL5.jpg")) {
document.getElementById("mainPic").src = "RTL1.jpg";
}
else if (img.endsWith("RTL4.jpg")) {
document.getElementById("mainPic").src = "RTL5.jpg";
}
else if (img.endsWith("RTL3.jpg")) {
document.getElementById("mainPic").src = "RTL4.jpg";
}
else if (img.endsWith("RTL2.jpg")) {
document.getElementById("mainPic").src = "RTL3.jpg";
}

}
