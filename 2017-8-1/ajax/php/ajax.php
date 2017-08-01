<?php
header('content-type:text/html;charset=utf-8');

$username = $_GET['user'];
$noname = true;

$aData = array(
	array("name"=>"小明","age"=>"18","hobby"=>"编程","info"=>"我是一个快乐的小清新"),
	array("name"=>"小红","age"=>"16","hobby"=>"逛街","info"=>"生命在于运动,逛街就是最好的运动方式"),
	array("name"=>"小华","age"=>"17","hobby"=>"打游戏","info"=>"这个家伙很懒,什么都没有留下..."),
	array("name"=>"小赵","age"=>"20","hobby"=>"篮球","info"=>"看我三步上篮..."),
	array("name"=>"小李","age"=>"19","hobby"=>"耍帅","info"=>"明天早上都会被帅醒...")
);


foreach( $aData as $key => $val ){
	if( in_array( $username , $val ) ){
		echo '{"code": 0, "data": '. json_encode( $val ) . '}';
		$noname = false;
		break;
	}
}

if( $noname ) echo '{"code": 1, "data": "查无此人！"}';


?>