<?php
	$con = mysqli_connect('localhost', '', '', '');
	if(!$con) die('Not connected : ' . mysqli_error());

	$uid = addslashes($_POST['uid']);
	$upw = addslashes($_POST['upw']);


	// 아이디 체크

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

	sort($member);	

	$bool = false;

	foreach($member as $usr){
		if($bool == false)
		{
			if(strcmp($usr, $uid)){
				$bool = false;
			}else{
				$bool = true;
			}
		}
	}
	
	// 재가입 방지
	if($bool == true){

		$sql = "SELECT uid FROM user";
		$re = mysqli_query($con, $sql);
		$joinsw = false;
		$n = 1;
		while($row = mysqli_fetch_array($re)){
			if( strcmp($row[0], $uid) == 0){
				$joinsw = true;
			}
			$n++;
		}

	// 가입

		if($joinsw == false){
			if(strlen($upw)	> 7){
				$hash = password_hash($upw, PASSWORD_DEFAULT);

				$sql = "INSERT INTO user(uid, upw) VALUES ('". $uid . "','" . $hash . "')";
				$re = mysqli_query($con, $sql);

				if($re){
					echo "join success";
				}else{
					echo "join fail";
				}

			}else{
				echo "len pw";
			}
		}else{
			echo "join now";
		}
	}else{
		echo "no nimda";
	}
	
?>
