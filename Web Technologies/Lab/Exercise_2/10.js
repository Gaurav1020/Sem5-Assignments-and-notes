function loadjson(){
    var json = '{"h1": "Select the items : Quantity"}'; 
    var obj = JSON.parse(json);
    document.getElementById("heading").innerHTML=obj.h1;
    document.getElementById("heading").innerText=obj.h1;
}
var pay;
function info(){
    if(document.getElementById('r1').checked){ pay=document.getElementById('r1');
    }
    else if(document.getElementById('r2').checked){ pay=document.getElementById('r2');
    }
    else if(document.getElementById('r3').checked){ pay=document.getElementById('r3');
    }
    document.getElementById("result").innerHTML =
    "User name:"+document.getElementById("name").value + "<br/>"+ "<h2>You have ordered following items</h2></br>"+
    "<table border=2px><tr>" + "<td><b>Item</b></td>"+ "<td><b>Qty</b></td>"+
    "<td><b>Price</b></td>"+ "<td><b>Total</b></td>"+ "</tr>"+
    "<tr>"+
    "<td>Four 100 watt bulbs for Rs. 20.39</td>"+"<td>"+document.getElementById("q1").value+"</td>"+ "<td>20.39</td>"+
    "<td>"+document.getElementById("q1").value*20.39+"</td>"+ "</tr>"+
    "<tr>"+"<td>Eight 100watt bulbs for Rs 40.20</td>"+ "<td>"+
    document.getElementById("q2").value+"</td>"+ "<td>40.20</td>"+
    "<td>"+document.getElementById("q2").value*40.20+"</td>"+ "</tr>"+
    "<tr>"+
    "<td>Four 100watt long life bulbs for Rs. 30.95</td>"+
    "<td>"+document.getElementById("q3").value+"</td>"+ "<td>30.95</td>"+
    "<td>"+document.getElementById("q3").value*30.95+"</td>"+ "</tr>"+
    "<tr>"+
    "<td>Eight 100watt long life bulbs for Rs 70.49</td>"+
    "<td>"+document.getElementById("q4").value+"</td>"+ "<td>70.49</td>"+
    "<td>"+document.getElementById("q4").value*70.49+"</td>"+ 
    document.getElementById("q3").innerHTML*30.95 + document.getElementById("q4").innerHTML*70.49+"</table><br>"+
    "Total bill including 13.5% tax :<b>"+
    1.135*(document.getElementById("q1").value*20.39 + document.getElementById("q2").value*40.20 + 
    document.getElementById("q3").value*30.95 + document.getElementById("q4").value*70.49) + 
    "</b> payment mode: " + pay.value;
}