<?php include("dbconnection.php"); ?> 

<?php
$username = $_POST['username'];
$psw = $_POST['psw'];
if (!empty($username) || !empty($psw)) {

     $SELECT = "SELECT username From jeyganesh.user Where username = ? Limit 1";
     $INSERT = "INSERT Into jeyganesh.user (username,psw) values(?, ?)";
     //Prepare statement
     $stmt = $conn->prepare($SELECT);
     $stmt->bind_param("s", $username);
     $stmt->execute();
     $stmt->bind_result($username);
     $stmt->store_result();
     $rnum = $stmt->num_rows;
     if ($rnum==0) {
      $stmt->close();
      $stmt = $conn->prepare($INSERT);
      $stmt->bind_param("ss", $username, $psw);
      $stmt->execute();
      echo "Signup sucessfull";
     }
	 else {
     echo "Name already exists. Enter new name";
     }
     $stmt->close();
     $conn->close();
    } 
else {
 echo "All fields are required";
 die();
}
?>