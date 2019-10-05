<?php include("dbconnection.php"); ?> 
<?php
session_start();
?>

<?php

<html>
<head>
  <title>Signin</title>

<link rel="stylesheet" href="css/sign.css" />
<link rel="stylesheet" href="css/main.css" />

</head>

<body>

<header id="header-inner">
      <div class="container" position:Relative>
        <nav id="main-nav">
          <img src="img/Teamlogo4.png" alt="My Portfolio" id="logo" />

          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">Statistics</a></li>
            <li><a href="work.html">Games</a></li>
			<li><a href="signin.html" class="current" border-color: #ffbc00;>Signin</a></li>           
          </ul>
        </nav>
	</div>
</header>

<div class="abc" style="background-image: url('img/homepagefull.png');">
</div>
<div class='def'>
 <form action="auth.php" method="POST">
 <h3>Login To FunForFuture</h3>
  <table>
   <tr>
    <td>Name :</td>
    <td><input type="text" name="username" required></td>
   </tr>
   <tr>
   </tr>
   <tr>
    <td>Password :</td>
    <td><input type="password" name="psw" required></td>
   </tr>
   </tr>
   <tr>
   <tr>
    <td><input type="submit" value="Login"></td>
   </tr>
  </table>
 </form>
</div>
</body>
</html>

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
     
  $_SESSION['logged']=true;
  $_SESSION ['username']=$username;

	echo '<script type= "text/JavaScript"> alert("welcome"); </script>';
	echo $_SESSION ['username'];
    //header("refresh:1;url=index1.html");
	
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