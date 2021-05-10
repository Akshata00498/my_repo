// 1) Write a program to add span tag inside div tag.

var d = document.createElement("SPAN");               
var s = document.createTextNode("this is a simple span tag inside div");         
d.appendChild(s);                             
document.getElementById("myId").appendChild(d); 

