function digitalclock(){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById("clock").innerHTML="Time- "+time;
}
setInterval(digitalclock, 1000);

function Format(){
    var form= new FormData(document.getElementById("form"));
    var color= form.get("color");
    var family= form.get("family");
    var size= form.get("size");
    var bstyle=document.querySelector("body").style;
    bstyle.backgroundColor=color;
    bstyle.fontFamily= family;
    bstyle.fontSize = size;
}

var imgarr=["testimg.jpg", "testimg1.jpg", "testimg2.jpg"];
var count=0;
var imgselector=document.getElementById("ximg");
function back(){
    count--;
    imgselector.src=imgarr[Math.abs(count)%3];
}
function next(){
    count++;
    imgselector.src=imgarr[Math.abs(count)%3];
}