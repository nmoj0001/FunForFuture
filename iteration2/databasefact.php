<?php

$dbServername = "ec2-18-218-62-68.us-east-2.compute.amazonaws.com";
$dbUsername = "root";
$dbPassword = "jeyganesh";
$dbName = "waste";

//$mysqli = new mysqli($dbServername,$dbUsername,$dbPassword,$dbName);
$mysqli = new mysqli("localhost","root","jeyganesh","waste");
if($mysqli->connect_error) {
  exit('Could not connect');
}

$sql = "SELECT factdescription FROM facts ORDER BY RAND(" . date("Ymd") . ") LIMIT 1";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($factdescription);
$stmt->fetch();
$stmt->close();

echo $factdescription;

?>