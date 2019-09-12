<?php

$dbServername = "ec2-18-218-62-68.us-east-2.compute.amazonaws.com";
$dbUsername = "root";
$dbPassword = "jeyganesh";
$dbName = "waste";

//$mysqli = new mysqli($dbServername,$dbUsername,$dbPassword,$dbName);
$conn = new mysqli("waste.cdylivsvnwen.us-east-2.rds.amazonaws.com","jeyganesh","jeyganesh","jeyganesh");
if($conn->connect_error) {
  exit('Could not connect');
}

//$sql = "SELECT fact_description, fact_source FROM Fact ORDER BY RAND(" . date("Ymd") . ") LIMIT 1";
//$sql = "SELECT fact_description FROM Fact ORDER BY RAND() LIMIT 1";
//$sql = "Select fact_description, fact_source from Fact";
//$stmt = $mysqli->prepare($sql);
//$stmt->bind_param("s", $_GET['q']);
//$stmt->execute();
//$stmt->store_result();
//$stmt->bind_result($fact_description,$fact_source);
//$stmt->fetch();
//$stmt->close();

$sql = "SELECT fact_description, fact_source FROM Fact ORDER BY RAND(" . date("Ymd") . ") LIMIT 1";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

echo "Fact";
echo "<h3>".$row["fact_description"]."</h3>";
echo "Source";
echo "<h4>".$row["fact_source"]."</h4>";

//echo "Source";
//echo "<h4>".$fact_source."</h4>";

?>