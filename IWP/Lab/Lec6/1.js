var count=0;
        const color=["aquamarine","grey","lightgreen","bisque"];
        function RNG(){
            //console.log("Hello");
            count++;
            document.querySelector(".personal").style.backgroundColor=color[count%4];
            document.querySelector(".movie").style.backgroundColor=color[(count+1)%4];
            document.querySelector(".parental").style.backgroundColor=color[(count+2)%4];
            document.querySelector(".netlinks").style.backgroundColor=color[(count+3)%4];
        }