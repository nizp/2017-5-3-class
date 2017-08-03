<?php
header('content-type:text/html;charset=utf-8');
//echo phpinfo();
$username = $_GET['user'];

$users = array('leo','momo','dudu','刘伟','妙味','ni真胖');

//echo $users[0];

echo $username;


if( in_array( $username , $users ) ){
	
	echo '用户名已经被注册了！';

}else{

	echo '用户名可以注册';

}


?>