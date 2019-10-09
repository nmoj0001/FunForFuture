<?php 


$uid = mysql_real_escape_string($_GET['a']);
$firstname = mysql_real_escape_string($_GET['b']);
$username = mysql_real_escape_string($_GET['c']);
echo $uid;

?>