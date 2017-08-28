<?php
error_reporting(0);

$f = $_GET['f'];

$filename = './'. $f .'.jpg';

if (!file_exists($filename)) {
    header('content-type:text/html;charset=utf-8');
    echo '图片不存在';
    exit;
}

$fp = fopen($filename, 'rb');
header("Content-Type: image/jpg");
header("Content-Length: " . filesize($filename));
fpassthru($fp);
exit;