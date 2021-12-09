$(document).ready(function(){
    for (var i = 0; i < 10; i++) {
        var n = Math.round(Math.random() * 1000) + 1;
        $('#buttons').append("<button class=\"btns\" value=" + n + ">" + n + "</button>");
    }
    //console.log("AAA")
    var Dbts = $("#Dbtns");
    console.log(Dbts)
    Dbts.on("click",function(e){
        //e.preventDefault();
        var nu = Number($("#query").val());
        console.log(nu);
        bts= $(".btns");
        for (var i = 0; i < 10; i++) {
            var d = bts[i]; 
            //console.log(d.getAttribute("value"));
            if (Number(d.getAttribute("value")) % nu == 0){
                console.log(d.text);
                d.style.display = "none"; 
                console.log("deleted");
            }
        }
    })
});