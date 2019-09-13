<?php include("dbconnection.php"); ?> 
<h3>"Is this recyclable?"</h3>;
<?php

$sql = "SELECT sno, name FROM sample LIMIT 1";
$result = $conn->query($sql);
$row1 = $result->fetch_assoc();

echo $row1["sno"]; 
//echo $row1["name"];
echo "data: $mime".$row1["name"];

?>




