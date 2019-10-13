<?php include("dbconnection.php"); ?> 

<?php
echo '<script type= "text/JavaScript"> alert("hi"); </script>';
session_start();
if (isset($_SESSION['username'])) {
     $game = $_POST['game'];
     $score = $_POST['score'];
     $username = $_SESSION['username'];

     echo "Rereached 1";

     echo "\ngame id" + $game;
     echo "\nscore" + $score;
     echo "\nusername" + $username;

     echo "Reached after";

     $SELECT = "SELECT username From jeyganesh.score Where username = ? and gameID = ?";
     $INSERT = "INSERT Into jeyganesh.score (gameID,username,gameScore) values(?, ?, ?)";
     $UPDATE = "UPDATE jeyganesh.score SET gameScore = ? where username = ? and gameID = ?";

     $stmt = $conn->prepare($SELECT);
     $stmt->bind_param("ss", $username, $game);
     $stmt->execute();
     $stmt->bind_result($username);
     $stmt->store_result();
     $rnum = $stmt->num_rows;

     if ($rnum == 0) {
          $stmt->close();
          $stmt = $conn->prepare($INSERT);
          $stmt->bind_param("sss", $game, $username, $score);
          $stmt->execute();
          echo '<script type= "text/JavaScript"> alert("insert"); </script>';
          include_once('leaderboard.html');
     } else {
          $stmt = $conn->prepare($UPDATE);
          $stmt->bind_param("sss", $score, $username, $game);
          $stmt->execute();
          echo '<script type= "text/JavaScript"> alert("update"); </script>';
          include_once('leaderboard.html');
     }
     $stmt->close();
     $conn->close();
} else {
     echo '<script type= "text/JavaScript"> alert("You have not logedin!!.. LOGIN TO SEE LEADERBOARD"); </script>';
     header("refresh:2;url=signin.html");
}

?>
