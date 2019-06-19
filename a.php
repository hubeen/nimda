<?php
	$passwdFile='/etc/passwd'; 
	$users=file($passwdFile); 
	$member = array();
	
	foreach($users as $i){ 
		if(strpos($i, "1001:,,,:/home/") !== false) {
			array_push($member, explode(":", explode(":/home/", $i)[1])[0]);
		}
		if(strpos($i, "1002:,,,:/home/") !== false) {
			array_push($member,  explode(":", explode(":/home/", $i)[1])[0]);
		}
	}

	echo count($member);
?>
