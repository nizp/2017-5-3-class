<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>
<style>
*{margin:0; padding:0;}
table{border-collapse:collapse; font-family:"Microsoft YaHei"; width:500px; margin:10px auto;}
td,th{border:solid #000 1px; padding:5px 7px;}
tr:nth-child(2n){background:#EAEAEA;}
thead tr:nth-child(1){background:#CECECE;}
tr:hover{background:#D7D7D7;}
::selection {background-color:#669900; color:#ffffff;}
::-moz-selection {background-color:#669900; color:#ffffff;}
</style>
</head>

<body>
<?php
//创建数据库之类的
$db=mysql_connect('localhost', 'root', '');

mysql_query("set names 'utf8'");
mysql_query('CREATE DATABASE nizp_ajax');

mysql_select_db('nizp_ajax');

$sql= <<< END
CREATE TABLE  `nizp_ajax`.`user` (
`ID` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
`username` VARCHAR( 255 ) NOT NULL ,
`password` VARCHAR( 255 ) NOT NULL
) ENGINE = INNODB CHARACTER SET utf8 COLLATE utf8_general_ci
END;

mysql_query($sql);
?>
<?php
//获取所有用户
$sql='SELECT ID, username, password FROM user ORDER BY ID DESC';

$res=mysql_query($sql);
?>
<table border="0" cellpadding="0" cellspacing="0">
	<thead>
    	<tr>
            <td>ID</td>
            <td>用户名</td>
            <td>密码</td>
        </tr>
    </thead>
    <tbody>
<?php
while($row=mysql_fetch_array($res))
{
?>
    	<tr>
        	<td><?php echo $row[0]; ?></td>
        	<td class="name"><?php echo $row[1]; ?></td>
        	<td><?php echo $row[2]; ?></td>
       </tr>

<?php
}
?>
    </tbody>
</table>
</body>
</html>