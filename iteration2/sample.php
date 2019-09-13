<?php include("dbconnection.php"); ?> 
<h3>Is this recyclable?</h3>
<?php

$sql = "SELECT sno, name FROM sample LIMIT 1";
$result = $conn->query($sql);
$row1 = $result->fetch_assoc();
$image = $row1["name"];

?>
<form name="quiz" method="post" action="sample.php"> 
<img src="data:image/jpeg;base64,'.base64_encode($image).'" height="200" width="200"/>
</form>

<?php
echo $row1["sno"]; 

//echo '<img src="data:name/jpeg;base64,'.base64_encode($row['name']).'" height="200" width="200"/>';
//echo $row1["name"];

//echo "<div class='caption'><h3><img src='http://placehold.it/150x150' alt=''><center>" . $row1['name'] . "</h3></div>";
//$image = getImageFromDatabase($row1["name"]);
//echo $image;

/*

echo '<img src="data:name/jpeg;base64,'.base64_encode($row1["name"] ).'" height="200" width="200"/>';
(isset($_POST["submit2"]))

$res=mysqli_query($conn,"select * from sample");
  
$row=mysqli_fetch_array($res);
echo "quiz game";
echo $row['sno']; 
 
   
*/
?>









