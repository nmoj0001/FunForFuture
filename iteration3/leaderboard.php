<?php

//$mysqli = new mysqli($dbServername,$dbUsername,$dbPassword,$dbName);
$conn = new mysqli("waste.cdylivsvnwen.us-east-2.rds.amazonaws.com", "jeyganesh", "jeyganesh", "jeyganesh");
if ($conn->connect_error) {
  exit('Could not connect');
}

$sql1 = "SELECT username, gameScore, RANK() OVER (ORDER BY score) position FROM jeyganesh.score where gameid = 1;";
    $result = $conn->query($sql1);
    if ($result->num_rows > 0) {
        echo"
        <table style='width:100%' border='1'>
        <tr>
        <th>RANK</th>
        <th>NAME</th>
        <th>SCORE</th>
        </tr>";
        // output data of each row
        while($row = $result->fetch_assoc()) {
            echo "<tr>";
            echo "<td>" . $row['position'] . "</td>" . "<td>" . $row['username'] . "</td>" . "<td>" . $row['gameScore'] . "</td>";
            echo "</tr>";
        }
        echo "</table>";
    } 
	Else {
		echo "Unable to load...come back later";
	}
?>