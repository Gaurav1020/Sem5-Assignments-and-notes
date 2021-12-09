$(document).ready(function(){
    console.log("Hello");
    let availseats=10;
    $("#btn").on("click", function(event){
        event.preventDefault();
        let data = new FormData(document.querySelector('form'));
        data['count']=$('#pcnt').val();
        //console.log(data.count);
        if(data.count>10){
            $("#success").hide();
            $("#fail").show();
        }
        else{
            $("#success").show();
            $("#fail").hide();
        }
    })
});