<?php
	$con = mysqli_connect('localhost', '', '', '');
	if(!$con) die('Not connected : ' . mysqli_error());

	$uid = addslashes($_POST['user']);
	$upw = addslashes($_POST['upw']);

	$sql = "SELECT * FROM user WHERE uid='". $uid . "'";

	$result = mysqli_query($con,$sql);
	$row = mysqli_fetch_array($result);
	if(is_null($row['uid']))
	{
		echo "no have";
	}else{
		if(password_verify($upw, $row['upw'])){
			echo "yes login";
			session_start();
			$_SESSION['user_id'] = $uid;
		}else{
			echo "no login";
		}	
	}
	mysqli_free_result($result);
	mysqli_close($con);

?>
