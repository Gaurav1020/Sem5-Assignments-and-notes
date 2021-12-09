var currentCustomer = 0;
var totalCharges = 0;
  function calculate_Charges(hrs){
    var charges = 2;
    if (hrs > 3)
        charges += Math.ceil(hrs - 3) * 0.5; 
    if (charges > 10) 
        charges = 10;
    totalCharges += charges;
    return charges;
  }
  function doCalculation(){
        var hrsParked = parseFloat(document.getElementById("hrsParked").value);
        var charges = calculate_Charges(hrsParked);
        document.getElementById("charges").value = charges;
  }

function calculateChargesForOneCustomer() 
{
currentCustomer++;
var hrsParked = parseFloat(prompt("Please enter the hours parked for customer: ", ""));
var charges = calculate_Charges(hrsParked);


document.write("<tr><td>Customer " + currentCustomer + "</td><td align='right'>" + hrsParked + "</td><td align='right'>" + charges.toString() + "</td></tr>");
}

function inputData() 
{
document.write("<table><th>Customer</th><th>Hours Parked</th><th>Charges</th>");
var addCustomer = 'Y';
while (addCustomer == "Y")
{
    calculateChargesForOneCustomer()
    addCustomer = prompt("Add a Customer? ", "Y");
}
document.write("<tr><td/><td/><td align='right'><b>$" + totalCharges.toString() + "</b></td></tr>");
document.write("</table>");
}