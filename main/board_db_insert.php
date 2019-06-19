<?php
include "./include/connect_db.php"; // 데이터 베이스 접속 프로그램 불러오기

session_start();
if(!isset($_SESSION['user_id'])){
	echo "<meta http-equiv='refresh' content='0;url=../index.html'>";
}else{
	$title = $connect->escape_string(addslashes($_POST['title']));
	$content = $connect->escape_string(addslashes($_POST['ir1']));
	$uid = $_SESSION['user_id'];

	$sql = "insert into board(title, content, writen) values ('{$title}', '{$content}', '{$uid}')";


	if(strcmp(preg_replace("/\s+/", "", $title), "") == 0 || strcmp($content, "<br>") == 0){
		$bool = false;
	}else{
		$bool = true;
	}

	if($bool){
		$res = $connect->query($sql);
		echo "<script>
				opener.parent.SuccessUp();
				window.close();
				</script>";
	}else{
		echo "<script>
				opener.parent.FailUp();
				window.close();
				</script>";
	}
}


?>

