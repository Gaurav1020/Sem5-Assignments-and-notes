<?php
    $a=100;
    $b=100;
    $c=95;
    echo "Subject 1 Marks = $a","<br>";
    echo "Subject 2 Marks = $b","<br>";
    echo "Subject 3 Marks = $c","<br>";
    $total=$a+$b+$c;
    echo "Total Marks = ",$total,"<br>";
    
    if($total >= 280){
        echo "<p style=color:green;>";
        echo "Grade : A";
        echo "</p>";
    }
    elseif($total >= 270){
        echo "<p style=color:green;>";
        echo "Grade : B";
        echo "</p>";
    }
    elseif($total >= 260){
        echo "<p style=color:green;>";
        echo "Grade : C";
        echo "</p>";
    }
    elseif($total >= 250){
        echo "<p style=color:green;>";
        echo "Grade : D";
        echo "</p>";
    }
    elseif($total >= 240){
        echo "<p style=color:green;>";
        echo "Grade : E";
        echo "</p>";
    }
    else{
        echo "<p style=color:red;>Grade : F </p><p style=color:red;>Fail!</p>";
    }
?>