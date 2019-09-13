<?php include("dbconnection.php"); ?> 

<?php

$sql = "SELECT name from sample";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

<h3>"Is this recyclable?"</h3>;

echo '<img src="data:name/jpeg;base64,'.base64_encode($row['name'] ).'" height="200" width="200"/>';

?>

