var xo=false, a=["", "", "", "", "", "", "", "", ""], p=false, ab=0, vor="0-0", vorx=0, voro=0;
Object.prototype.text=function(v) {
this.innerText=v;
};
Object.prototype.cl=function() {
if(p || this.textv()) {return;}
this.text(xof());
this.style.backgroundColor="red";
this.style.color="white";
a[this.id.charAt(1)-1]=xo?"x":"0";
switch(true){
case a[0]+a[1]+a[2]==="xxx" : s("x"); return; break;
case a[3]+a[4]+a[5]==="xxx" : s("x"); return; break;
case a[6]+a[7]+a[8]==="xxx" : s("x"); return; break;
case a[0]+a[3]+a[6]==="xxx" : s("x"); return; break;
case a[1]+a[4]+a[7]==="xxx" : s("x"); return; break;
case a[2]+a[5]+a[8]==="xxx" : s("x"); return; break;
case a[0]+a[4]+a[8]==="xxx" : s("x"); return; break;
case a[2]+a[4]+a[6]==="xxx" : s("x"); return; break;
case a[0]+a[1]+a[2]==="000" : s("0"); return; break;
case a[3]+a[4]+a[5]==="000" : s("0"); return; break;
case a[6]+a[7]+a[8]==="000" : s("0"); return; break;
case a[0]+a[3]+a[6]==="000" : s("0"); return; break;
case a[1]+a[4]+a[7]==="000" : s("0"); return; break;
case a[2]+a[5]+a[8]==="000" : s("0"); return; break;
case a[0]+a[4]+a[8]==="000" : s("0"); return; break;
case a[2]+a[4]+a[6]==="000" : s("0"); return; break;
}
ab++;
if(ab===9){s(""); return;}
};
Object.prototype.textv=function() {
if(this.innerText=="x" || this.innerText=="0") {
return true;
}
return false;
};
function $(v) {
return document.getElementById(v);
}
window.onload=function() {
$("t1").setAttribute("onclick", "c(this)");
$("t2").setAttribute("onclick", "c(this)");
$("t3").setAttribute("onclick", "c(this)");
$("t4").setAttribute("onclick", "c(this)");
$("t5").setAttribute("onclick", "c(this)");
$("t6").setAttribute("onclick", "c(this)");
$("t7").setAttribute("onclick", "c(this)");
$("t8").setAttribute("onclick", "c(this)");
$("t9").setAttribute("onclick", "c(this)");
$("or").text(vor);
}
function pr() {
$("t1").text("");
$("t2").text("");
$("t3").text("");
$("t4").text("");
$("t5").text("");
$("t6").text("");
$("t7").text("");
$("t8").text("");
$("t9").text("");
$("t1").oc();
$("t2").oc();
$("t3").oc();
$("t4").oc();
$("t5").oc();
$("t6").oc();
$("t7").oc();
$("t8").oc();
$("t9").oc();
xo=false;
a=["", "", "", "", "", "", "", "", ""];
ab=0;
vor=vorx+"-"+voro;
$("or").text(vor);
p=false;
}
Object.prototype.oc=function(){
this.style.backgroundColor="white";
this.style.color="black";
}
function c(v) {
if(p || v.textv()) {return;}
v.text(xof());
v.style.backgroundColor="orange";
v.style.color="white";
a[v.id.charAt(1)-1]=xo?"x":"0";
switch(true){
case a[0]+a[1]+a[2]==="xxx" : s("x"); return; break;
case a[3]+a[4]+a[5]==="xxx" : s("x"); return; break;
case a[6]+a[7]+a[8]==="xxx" : s("x"); return; break;
case a[0]+a[3]+a[6]==="xxx" : s("x"); return; break;
case a[1]+a[4]+a[7]==="xxx" : s("x"); return; break;
case a[2]+a[5]+a[8]==="xxx" : s("x"); return; break;
case a[0]+a[4]+a[8]==="xxx" : s("x"); return; break;
case a[2]+a[4]+a[6]==="xxx" : s("x"); return; break;
case a[0]+a[1]+a[2]==="000" : s("0"); return; break;
case a[3]+a[4]+a[5]==="000" : s("0"); return; break;
case a[6]+a[7]+a[8]==="000" : s("0"); return; break;
case a[0]+a[3]+a[6]==="000" : s("0"); return; break;
case a[1]+a[4]+a[7]==="000" : s("0"); return; break;
case a[2]+a[5]+a[8]==="000" : s("0"); return; break;
case a[0]+a[4]+a[8]==="000" : s("0"); return; break;
case a[2]+a[4]+a[6]==="000" : s("0"); return; break;
}
ab++;
if(ab===9){s("d"); return;}
if(a[0]+a[1]+a[2]==="00") {$("t"+np(0, 1, 2)).click(); return;}
else if(a[3]+a[4]+a[5]==="00") {$("t"+np(3, 4, 5)).cl(); return;}
else if(a[6]+a[7]+a[8]==="00") {$("t"+np(6, 7, 8)).cl(); return;}
else if(a[0]+a[3]+a[6]==="00") {$("t"+np(0, 3, 6)).cl(); return;}
else if(a[1]+a[4]+a[7]==="00") {$("t"+np(1, 4, 7)).cl(); return;}
else if(a[2]+a[5]+a[8]==="00") {$("t"+np(2, 5, 8)).cl(); return;}
else if(a[0]+a[4]+a[8]==="00") {$("t"+np(0, 4, 8)).cl(); return;}
else if(a[2]+a[4]+a[6]==="00") {$("t"+np(2, 4, 6)).cl(); return;}
else if(a[0]+a[1]+a[2]==="xx") {$("t"+np(0, 1, 2)).cl(); return;}
else if(a[3]+a[4]+a[5]==="xx") {$("t"+np(3, 4, 5)).cl(); return;}
else if(a[6]+a[7]+a[8]==="xx") {$("t"+np(6, 7, 8)).cl(); return;}
else if(a[0]+a[3]+a[6]==="xx") {$("t"+np(0, 3, 6)).cl(); return;}
else if(a[1]+a[4]+a[7]==="xx") {$("t"+np(1, 4, 7)).cl(); return;}
else if(a[2]+a[5]+a[8]==="xx") {$("t"+np(2, 5, 8)).cl(); return;}
else if(a[0]+a[4]+a[8]==="xx") {$("t"+np(0, 4, 8)).cl(); return;}
else if(a[2]+a[4]+a[6]==="xx") {$("t"+np(2, 4, 6)).cl(); return;}
else if(a[0]+a[1]+a[2]==="x0") {$("t"+np(0, 1, 2)).cl(); return;}
else if(a[3]+a[4]+a[5]==="x0") {$("t"+np(3, 4, 5)).cl(); return;}
else if(a[6]+a[7]+a[8]==="x0") {$("t"+np(6, 7, 8)).cl(); return;}
else if(a[0]+a[3]+a[6]==="x0") {$("t"+np(0, 3, 6)).cl(); return;}
else if(a[1]+a[4]+a[7]==="x0") {$("t"+np(1, 4, 7)).cl(); return;}
else if(a[2]+a[5]+a[8]==="x0") {$("t"+np(2, 5, 8)).cl(); return;}
else if(a[0]+a[4]+a[8]==="x0") {$("t"+np(0, 4, 8)).cl(); return;}
else if(a[2]+a[4]+a[6]==="x0") {$("t"+np(2, 4, 6)).cl(); return;}
else if(a[0]+a[1]+a[2]==="0x") {$("t"+np(0, 1, 2)).cl(); return;}
else if(a[3]+a[4]+a[5]==="0x") {$("t"+np(3, 4, 5)).cl(); return;}
else if(a[6]+a[7]+a[8]==="0x") {$("t"+np(6, 7, 8)).cl(); return;}
else if(a[0]+a[3]+a[6]==="0x") {$("t"+np(0, 3, 6)).cl(); return;}
else if(a[1]+a[4]+a[7]==="0x") {$("t"+np(1, 4, 7)).cl(); return;}
else if(a[2]+a[5]+a[8]==="0x") {$("t"+np(2, 5, 8)).cl(); return;}
else if(a[0]+a[4]+a[8]==="0x") {$("t"+np(0, 4, 8)).cl(); return;}
else if(a[2]+a[4]+a[6]==="0x") {$("t"+np(2, 4, 6)).cl(); return;}
else if(a[4]==="x" || a[4]==="0") {
if(a[1]==="x" || a[1]==="0") {
if(a[3]==="x" || a[3]==="0") {$("t1").cl(); return;}
else {$("t4").cl(); return;}
}
else {$("t2").cl(); return;}
}
else {$("t5").cl(); return;}
}
function np(v1, v2, v3) {
if(a[v1]=="") {return v1+1;}
if(a[v2]=="") {return v2+1;}
if(a[v3]=="") {return v3+1;}
}
function xof() {
xo=!xo;
return xo?"x":"0";
}
function s(v) {
if(v==="x") {
vorx++;
$("or").innerText="You win!";}
else if(v==="0") {
voro++;
$("or").innerText="You lose!";}
else {
vorx++;
voro++;
$("or").innerText="DRAW!";}
p=true;
window.setTimeout("pr()", 1500);
}
function sm(v) {
switch(v){
case "x" : 
$("tbl").style.animation="spinx 10s linear infinite"; break;
case "y" : 
$("tbl").style.animation="spiny 10s linear infinite"; break;
case "z" : 
$("tbl").style.animation="spinz 10s linear infinite"; break;
case "0" : 
$("tbl").style.animation="none"; break;
case "all" : 
$("tbl").style.animation="spinall 10s linear infinite"; break;
}
}
