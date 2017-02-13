document.getElementById("btnMult").onclick=multi;
document.getElementById("btnAdd").onclick=add;
document.getElementById("btnSub").onclick=sub;
document.getElementById("btnDiv").onclick=div;
document.getElementById("btnMod").onclick=mod;

function multi(e){
  e.preventDefault();
 var first= parseInt(document.getElementById("first").value);
  var second= parseInt(document.getElementById("second").value);
 document.getElementById("result").value= first*second;
}
function add(e){
  e.preventDefault();
  var first= parseInt(document.getElementById("first").value);
  var second= parseInt(document.getElementById("second").value);
  document.getElementById("result").value= first+second;
}
function sub(e){
  e.preventDefault();
  var first= parseInt(document.getElementById ("first").value);
  var second= parseInt(document.getElementById("second").value);
  document.getElementById("result").value= first-second;
}
function div(e){
  e.preventDefault();
  var first= parseInt(document.getElementById("first").value);
  var second= parseInt(document.getElementById("second").value);
  document.getElementById("result").value=first/second;
}
function mod(e){
  e.preventDefault();
  var first= parseInt(document.getElementById("first").value);
  var second= parseInt(document.getElementById("second").value);
  document.getElementById("result").value=first%second;
}
