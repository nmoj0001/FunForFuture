<?php include("dbconnection.php"); ?> 

<?php
echo '<script type= "text/JavaScript"> alert("hi"); </script>';
session_start();
if(isset($_SESSION['username']))
{
$user = $_SESSION['username'];	
$game =	1;	
$score = 2323;
echo $_SESSION['username'];
echo $user + $game;
}
else
{
echo '<script type= "text/JavaScript"> alert("You have not logedin!!.. LOGIN TO SEE LEADERBOARD"); </script>'; 
header("refresh:2;url=signin.html");
}
	
?>
