<?php include("dbconnection.php"); ?> 

<?php
echo '<script type= "text/JavaScript"> alert("hi"); </script>';
session_start();
if(isset($_SESSION['username']))
{
echo '<script type= "text/JavaScript"> alert("You have not logedin!!.. LOGIN TO SEE LEADERBOARD"); </script>';
}
else
{
echo '<script type= "text/JavaScript"> alert("You have not logedin!!.. LOGIN TO SEE LEADERBOARD"); </script>'; 
header("refresh:2;url=signin.html");
}
	
?>
