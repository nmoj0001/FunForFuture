<?php include("dbconnection.php"); ?> 

<?php

session_start();
if(isset($_SESSION['username']))
{
//conversion
$game =	$_SESSION['gameID'];
$user = $_SESSION['username'];	
$score = $_SESSION['score'];

	 $SELECT = "SELECT username From jeyganesh.score Where username = $user and gameID = $game";
     $INSERT = "INSERT Into jeyganesh.score (gameID,username,gameScore) values($game, $user, $score)";
	 $UPDATE = "UPDATE jeyganesh.score SET gameScore = $score where username = $user and gameID = $game";
     //Prepare statement
     $stmt = $conn->prepare($SELECT);
     $stmt->bind_param("s", $user);
     $stmt->execute();
     $stmt->bind_result($user);
     $stmt->store_result();
     $rnum = $stmt->num_rows;
     if ($rnum==0) {
      $stmt->close();
      $stmt = $conn->prepare($INSERT);
      $stmt->bind_param("isi", $game, $user, $score);
      $stmt->execute();
      //echo '<script type= "text/JavaScript"> alert("Signup successful"); </script>';
	  //include_once('sigin.html');
     }
	 else {
	$stmt = $conn->prepare($UPDATE);
      $stmt->bind_param("isi", $game, $user, $score);
      $stmt->execute();
     //echo '<script type= "text/JavaScript"> alert("Name already exists. Enter new name."); </script>';
	 //include_once('signup.html');
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
