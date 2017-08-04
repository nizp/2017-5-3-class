<?php
error_reporting(0);
$callback = $_GET['callback'];
$num = $_GET['num'];

$arr1 = array('1111', '2222222', '3333333', '44444444444');
$arr2 = array('aaaaa', 'bbbbbb', 'ccccc', 'ddddd');
$arr3 = array('3213cxzcz', 'bbbbbb', 'ccccc', 'ddddd');
//echo $callback . ' && ' . $callback . '('. json_encode($arr1) .');';
//echo $callback . '('. json_encode($arr1) .');';
//echo 'fn3([1,2,3,4,5]);';    
//sleep( 2 );
if ($num == 'number') {
	echo $callback . '('. json_encode($arr1) .');';
} else {
	echo $callback . '('. json_encode($arr2) .');';
}