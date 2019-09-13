
<?php

$conn = new mysqli("waste.cdylivsvnwen.us-east-2.rds.amazonaws.com","jeyganesh","jeyganesh","jeyganesh");
if($conn->connect_error) {
  exit('Could not connect');
}

$sql = "SELECT name from sample";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

<h3>"Is this recyclable?"</h3>;

echo '<img src="data:name/jpeg;base64,'.base64_encode($row['name'] ).'" height="200" width="200"/>';

?>

