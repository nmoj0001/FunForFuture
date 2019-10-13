<?php include("dbconnection.php"); ?> 

<?php
echo '<script type= "text/JavaScript"> alert("hi"); </script>';
session_start();
if (isset($_SESSION['username'])) {
     $game = $_POST['game'];
     $score = $_POST['score'];
     $username = $_SESSION['username'];

     // $game = 1;
     // $score = 9000;
    

     $SELECT = "SELECT username From jeyganesh.score Where username = ? and gameID = ?";
     $INSERT = "INSERT Into jeyganesh.score (gameID,username,gameScore) values(?, ?, ?)";
     $UPDATE = "UPDATE jeyganesh.score SET gameScore = ? where username = ? and gameID = ?";

     $stmt = $conn->prepare($SELECT);
     $stmt->bind_param("si", $_SESSION['username'], $game);
     $stmt->execute();
     $stmt->bind_result($username);
     $stmt->store_result();
     $rnum = $stmt->num_rows;

     echo $rnum;

     if ($rnum == 0) {
          $stmt->close();
          $stmt = $conn->prepare($INSERT);
          $stmt->bind_param("isi", $game, $_SESSION['username'], $score);
          $stmt->execute();

          echo '<script type= "text/JavaScript"> alert("insert"); </script>';
          include_once('leaderboard.html');
     } else {
          $stmt = $conn->prepare($UPDATE);
          $stmt->bind_param("isi", $score, $_SESSION['username'], $game);
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
