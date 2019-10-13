<script>
     var queryString = decodeURIComponent(window.location.search);
     queryString = queryString.substring(1);
     var queries = queryString.split("&");

     var array = queryString.split('&');
     var game = array[0];
     var username = array[1];
     var score = array[2];
</script>

<?php include("dbconnection.php"); ?>

<?php
echo '<script type= "text/JavaScript"> alert("hi"); </script>';
session_start();
if (isset($_SESSION['username'])) {
     $username = $_SESSION['username'];

     echo "Score  ";
     echo $score_string = "<script>document.write(score)</script>";
     echo "    Game  ";
     echo $game_string = "<script>document.write(game)</script>";

     $score = $score_string + 0;
     $game = $game_string + 0;

     echo "  Score  ";
     echo $score;
     echo "  Game  ";
     echo $game;

     $SELECT = "SELECT username From jeyganesh.score Where username = ? and gameID = ?";
     $INSERT = "INSERT Into jeyganesh.score (gameID,username,gameScore) values(?, ?, ?)";
     $UPDATE = "UPDATE jeyganesh.score SET gameScore = ? where username = ? and gameID = ?";

     $stmt = $conn->prepare($SELECT);
     $stmt->bind_param("si", $_SESSION['username'], $game);
     $stmt->execute();
     $stmt->bind_result($username);
     $stmt->store_result();
     $rnum = $stmt->num_rows;

     echo "Reached after";
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