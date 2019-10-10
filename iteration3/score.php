<?php include("dbconnection.php"); ?> 

<?php
echo '<script type= "text/JavaScript"> alert("hi"); </script>';
session_start();
if(isset(rithika))
{
$game =	1;	
$score = 2323;

	$SELECT = "SELECT username From jeyganesh.score Where username = 'rithika' and gameID = 1";
     $INSERT = "INSERT Into jeyganesh.score (gameID,username,gameScore) values(1, 'rithika', 2323)";
	 $UPDATE = "UPDATE jeyganesh.score SET gameScore = 2222 where username = 'rithika' and gameID = 1";
	 
	 $stmt = $conn->prepare($SELECT);
     $stmt->bind_param("s", 'rithika');
     $stmt->execute();
     $stmt->bind_result($user);
     $stmt->store_result();
     $rnum = $stmt->num_rows;
     if ($rnum==0) {
		echo '<script type= "text/JavaScript"> alert("insert"); </script>'; 
      $stmt->close();
      $stmt = $conn->prepare($INSERT);
      $stmt->bind_param("isi", $game, 'rithika' , $score);
      $stmt->execute();
      echo '<script type= "text/JavaScript"> alert("insert"); </script>';
	  include_once('leaderboard.html');
     }
	 else {
	$stmt = $conn->prepare($UPDATE);
      $stmt->bind_param("isi", $game, 'rithika', $score);
      $stmt->execute();
     echo '<script type= "text/JavaScript"> alert("update"); </script>';
	 include_once('leaderboard.html');
     }
     $stmt->close();
     $conn->close();

}
else
{
echo '<script type= "text/JavaScript"> alert("You have not logedin!!.. LOGIN TO SEE LEADERBOARD"); </script>'; 
header("refresh:2;url=signin.html");
}
	
?>
