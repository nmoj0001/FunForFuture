<?php include("dbconnection.php"); ?> 

<?php

$sql = "SELECT fact_description, fact_source FROM Fact ORDER BY RAND(" . date("Ymd") . ") LIMIT 1";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

echo "Fact";
echo "<h3>".$row["fact_description"]."</h3>";
echo "Source";
echo "<h4>".$row["fact_source"]."</h4>";

?>