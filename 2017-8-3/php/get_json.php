<?php
header('content-type:text/html;charset=utf-8');
//echo phpinfo();
$username = $_GET['user'];

$users = array('leo','momo','dudu','刘伟','妙味');

//echo $users[0];

//echo json_encode( $users );

if( in_array( $username , $users ) ){
	
//	echo '{"code": 1, "msg": "用户名已经被注册了！"}';
	echo "{'code': 1, 'msg': '用户名已经被注册了！'}";

}else{

	echo '{"code": 0, "msg": "用户名可以注册！"}';

}

?>