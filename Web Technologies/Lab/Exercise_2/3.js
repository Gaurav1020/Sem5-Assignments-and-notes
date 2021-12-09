function validate(){
name(document.getElementById("name").value);
reg(document.getElementById("regno").value);
mail(document.getElementById("email").value);
num(document.getElementById("phoneno").value);
}

function name(name){
nl=name.length;
flag=1;
for(i=0;i<nl;i++){
c=name.charAt(i);
if(!((c>='A' && c<='Z') || (c>='a' && c<='z') || c==' '))
flag=0;
}
if(flag==0)
alert("Name should contain alphabets");
}
function reg(regno)
{
flag=1;
for(i=0;i<regno.length;i++){
c=regno.charAt(i);
if(!((c>='A' && c<='Z') || (c>='a' && c<='z') || (c>='0' && c<='9')))
flag=0;
}
if(flag==0)
alert("Register number should be in alphabets and number");
}
function mail(email)
{
atp=email.indexOf("@");
dotp=email.lastIndexOf(".");
if (atp<1 || dotp<atp+2 || dotp+2>=email.length)
alert("Enter a valid E-mail ID");
}
function num(phoneno)
{
if(phno.length<10)
alert("Enter a valid phoneno");
}
function disable()
{
if(document.getElementById("check").checked)
{
document.getElementById("permadd").value=document.getElementById("tempadd").value;
document.getElementById("permadd").disabled=true;
}
else
{
document.getElementById("permadd").disabled=false;
document.getElementById("permadd").value="";
}
}