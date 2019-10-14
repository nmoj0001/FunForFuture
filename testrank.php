<?php include("dbconnection.php"); ?> 

<?php

$sql = "SELECT (SELECT COUNT(*)+1  FROM jeyganesh.score B WHERE gameID = 1 and A.gamescore<B.gamescore) AS Rank FROM jeyganesh.score A where gameID = 1 and username = 'emily'
ORDER BY gamescore DESC";

$stmt = $conn->query($sql);
$stmt = $result->fetch_assoc();
$stmt->bind_result($rank);
$stmt->store_result();
$rnum = $stmt->num_rows;

echo "Executed Statement";
echo $rank;
echo "Done";
?>