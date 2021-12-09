let arr1=[0,1,2,3,4,5,6,7,8,9]
for(let i of arr1){
    console.log(i);
}
function Darr1(){
    document.getElementById("content").innerHTML="";
    for(let i of arr1){
        document.getElementById("content").innerHTML+=i +" ";
    }
}
let arr2=[10,11,12,13,14,15,16,17,18,19]
function Darr2(){
    document.getElementById("content").innerHTML="";
    for(let i of arr2){
        document.getElementById("content").innerHTML+=i +" ";
    }
}


for(let i of arr2){
    console.log(i);
}
function Darr3(){
    let arr3;
    arr3=arr1.concat(arr2);
    document.getElementById("content").innerHTML="";
    for(let i of arr3){
        document.getElementById("content").innerHTML+=i +" ";
    }
}
function Reset(){
    document.getElementById("content").innerHTML="";
}