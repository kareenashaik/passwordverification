func=()=>
{
var pw=document.getElementById("pwd").value;
var cpwd=document.getElementById("cpwd").value;
if(pw!=cpwd||pw=="")
document.getElementById("kar").textContent=("Please Check Your Password");
else
{
document.getElementById("kar").textContent=("Password is saved");
window.open("./suc sin.html","_blank");
}
}
