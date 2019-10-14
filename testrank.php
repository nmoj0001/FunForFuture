<?php
echo '<script type= "text/JavaScript"> alert("hi"); </script>';
session_start();

$rank = 0;
$sql = "SET @i=0;
Select rank from (SELECT username, @i:=@i+1 AS rank 
 FROM jeyganesh.score where gameID = 1
 ORDER BY gamescore DESC) t where username = 'emily';";

echo "Statement created";

$stmt = $conn->prepare($sql);
$stmt->execute();

echo "Statement executed";

$stmt->bind_result($rank);
$stmt->store_result();
$rnum = $stmt->num_rows;

echo $rnum;
echo "reached end";
?>