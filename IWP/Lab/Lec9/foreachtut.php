
<?php
	$arr = array(
        100,
        200,
        300,
        400,
        500
    );
    array_push($arr,600);
    foreach($arr as $A){
        print "{$A}<br>";
    }
    $arr1 = array(
        "A" => 1000,
        "B" => 2000,
        "C" => 3000,
        "D" => 4000,
        "E" => 5000
    );
    array_push($arr1, 6000);
    foreach($arr1 as $key => $value){
        print "{$key} => {$value}<br>";
    }
?>

