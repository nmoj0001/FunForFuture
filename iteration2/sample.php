<?php include("dbconnection.php"); ?> 

<?php

//$sql = "SELECT * FROM sample LIMIT 1";
//$result = $conn->query($sql);
//$row1 = $result->fetch_assoc();
<h3>"Is this recyclable?"</h3>;
//echo " ".$row1["sno"]." "; 
//echo '<img src="data:name/jpeg;base64,'.base64_encode($row1['name'] ).'" height="200" width="200"/>';
//(isset($_POST["submit2"]))

$res=mysqli_query($conn,"select * from sample");
  
$row=mysqli_fetch_array($res);
echo "quiz game";
   echo $row['sno']; 
  // echo '<img src="data:name/jpeg;base64,'.base64_encode($row['name']).'" height="200" width="200"/>';
   
?>

