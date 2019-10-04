<?php include("dbconnection.php"); ?> 

<?php
$username = $_POST['username'];
$psw = $_POST['psw'];
if (!empty($username) || !empty($psw)) {

     $SELECT = "SELECT username, psw From jeyganesh.user Where username = ? and psw = ? Limit 1";
     //$INSERT = "INSERT Into jeyganesh.user (username,psw) values(?, ?)";
     //Prepare statement
     $stmt = $conn->prepare($SELECT);
     $stmt->bind_param("ss", $username, $psw);
     $stmt->execute();
     $stmt->bind_result($username);
     $stmt->store_result();
     $rnum = $stmt->num_rows;
     if ($rnum==1) {
      echo '<script type= "text/JavaScript"> alert("Signin successful"); </script>';
	  session_start();
  $_SESSION['logged']=true;
  $_SESSION ['username']=$username;
  header("refresh:1;url=index.html");
     }
	 else {
     echo '<script type= "text/JavaScript"> alert("Invalid username and psw"); </script>';
	    $_SESSION['logged']=false;
   header("refresh:2;url=signin.html");
	 //include_once('signin.html');
	 //echo '<script type= "text/JavaScript"> alert("Welcome $username"); </script>';
     }
     $stmt->close();
     $conn->close();
    } 

else {
 echo "All fields are required";
 die();
}
?>