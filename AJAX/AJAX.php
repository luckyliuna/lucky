<?php
header("Content-Type:text/html; charset=utf-8"); 

header('content-type:text');
if(isset($_POST['name'])){
	echo "hello:".$_POST['name'];
}else{
	echo "Args Error";
}

?>




