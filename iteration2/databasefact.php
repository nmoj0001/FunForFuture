<? include("dbconnection.php"); ?> 

<?

//$mysqli = new mysqli($dbServername,$dbUsername,$dbPassword,$dbName);
//$conn = new mysqli("waste.cdylivsvnwen.us-east-2.rds.amazonaws.com","jeyganesh","jeyganesh","jeyganesh");
//if($conn->connect_error) {
//  exit('Could not connect');
//}

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