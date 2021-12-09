function Rev(){
    let form= new FormData(document.getElementById("form"));
    op= document.getElementById("OP")
    //op.innerHTML("");
    phrase=form.get("phrase");
    filter=form.get("filter");
    var x=phrase.length;
    //op.innerHTML=filter;
    var arr= new Array();
    var j=0;
    var temp="";
    for(var i=0;i<x;i++){
        if(phrase[i]==' '){
            temp="";
        }
        else{
            while(phrase[i]!=' ' && i<x){
                temp+=phrase[i];
                i++;
            }
            arr[j]=temp;
            j++;
            i--;
        }
    }
    var y=filter.length;
    x=arr.length;
    if(y==0){
        filter=null;
    }
    for(var i=0;i<x;i++){
        if(filter!=arr[i].substr(0,y)){
            op.innerHTML=arr[i]+" "+op.innerHTML ;
        }
    }



    //op.innerHTML=x;
}