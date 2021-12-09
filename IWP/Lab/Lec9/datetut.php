<?php
    date_default_timezone_set( 'Asia/Kolkata' );
	echo date("d/m/y"); 
    echo "<br>";
    echo date('l jS') . '<br>';
    echo date("d/m/y", mktime(0, 0, 0, 3, 3, 21)) . "<br>";
    $nextWeek = time() + 7 * 24 * 60 * 60;
    echo 'Today: ' . date('d/m/y') . "<br>";
    echo 'Next Week:' . date('d/m/y', $nextWeek) . "<br>";
    echo 'time(): '. time(); //seconds from 1st Jan 1970
?>

