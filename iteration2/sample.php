<?php include("dbconnection.php"); ?> 
<h3>"Is this recyclable?"</h3>;
<?php

$sql = "SELECT sno, name FROM sample LIMIT 1";
$result = $conn->query($sql);
$row1 = $result->fetch_assoc();

echo $row1["sno"]; 
//echo $row1["name"];
echo '<img src="data:image/jpeg;base64,'.base64_encode($row1['name']->load()) .'" />';

/*

echo '<img src="data:name/jpeg;base64,'.base64_encode($row1["name"] ).'" height="200" width="200"/>';
(isset($_POST["submit2"]))

$res=mysqli_query($conn,"select * from sample");
  
$row=mysqli_fetch_array($res);
echo "quiz game";
echo $row['sno']; 
 echo '<img src="data:name/jpeg;base64,'.base64_encode($row['name']).'" height="200" width="200"/>';
   
*/
?>





