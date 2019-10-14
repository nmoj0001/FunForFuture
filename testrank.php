<?php include("dbconnection.php"); ?> 

<?php

$sql = "SET @i=0;
Select rank from (SELECT username, @i:=@i+1 AS rank 
 FROM jeyganesh.score where gameID = 1
 ORDER BY gamescore DESC) t where username = 'emily';";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

echo "Executed Statement";
echo "<h3>" . $row["rank"] . "</h3>";
?>