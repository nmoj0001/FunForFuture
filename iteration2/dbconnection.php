<?

//$mysqli = new mysqli($dbServername,$dbUsername,$dbPassword,$dbName);
$conn = new mysqli("waste.cdylivsvnwen.us-east-2.rds.amazonaws.com","jeyganesh","jeyganesh","jeyganesh");
if($conn->connect_error) {
  exit('Could not connect');
}

?>