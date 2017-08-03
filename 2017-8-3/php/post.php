<?php
header('content-type:text/html;charset=utf-8');
//echo phpinfo();
$username = $_POST['user'];

$users = array('leo','momo','刘伟','妙味');//

//echo $users[0];

if( in_array( $username , $users ) ){
	
	echo '用户名已经被注册了！';

}else{

	echo '可以注册';

}

?>