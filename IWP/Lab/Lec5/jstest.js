// const form = document.getElementById('diform');
// let dividend=form.elements['divid'].value;
// let divisor=form.elements['divis'].value;
// console.log(dividend);
let dividend=123;
let divisor=13;
document.getElementById("dividend").innerHTML="Dividend = "+ dividend;
document.getElementById("divisor").innerHTML="Divisor = "+divisor;
// document.getElementById("quotient").innerHTML="Quotient = "+Math.floor(dividend/divisor);
// document.getElementById("remainder").innerHTML="Remainder = "+dividend%divisor;
function resq(){
    document.getElementById("quotient").innerHTML="Quotient = "+Math.floor(dividend/divisor);
    //document.getElementById("remainder").innerHTML="Remainder = "+dividend%divisor;
}
function resr(){
    //document.getElementById("quotient").innerHTML="Quotient = "+Math.floor(dividend/divisor);
    document.getElementById("remainder").innerHTML="Remainder = "+dividend%divisor;
}