
<?php

session_start();
if(isset($_SESSION['username']))
{
session_destroy();
echo '<script type= "text/JavaScript"> alert("Bye!! See you soon"); </script>';    
header("refresh:2;url=index.html");
}
else
{
echo '<script type= "text/JavaScript"> alert("Bye!! See you soon"); </script>'; 
header("refresh:2;url=signin.html");
}	
?>