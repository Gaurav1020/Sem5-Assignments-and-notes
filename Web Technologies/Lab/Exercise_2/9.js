$(document).ready(function(){
    $("#city").on("click",function(){
        var tags = [ 
            "Ajmer", "Jaipur", "Mumbai",
            "Nagpur", "Ahmedabad", 
            "Gwalior", "Bhopal", "Udaipur", "Ujjain" 
        ];
        $(this).autocomplete({
            source: tags
        });
    })


    $('#form').on('submit',function(e){
        e.preventDefault();
        formData = new FormData(this);
        formData['fname']=$('#fname').val();
        formData['lname']=$('#lname').val();
        formData['maddr']=$('#maddr').val();
        formData['city']=$('#city').val();
        formData['state']=$('#state').val();
        formData['zcode']=$('#zcode').val();
        formData['speaker']=$('input[name="speaker"]:checked').val();
        formData['pass']=$('input[name="pass"]:checked').val();
        formData['mealpref']=$('#mealpref').val();
        console.log(formData);
        nzcode=Number(formData['zcode']);
        var count=0;
        if (nzcode >= 1) ++count;

        while (nzcode / 10 >= 1) {
            nzcode /= 10;
            ++count;
        }
        if(count!=5){
            //console.log("as");
            $('#err').show();
            return false;
        }
        else{
            $('#err').hide();
        }

        return $('#form')[0].submit();

    })

});