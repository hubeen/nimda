<?php
	include "./include/connect_db.php";

	$no = addslashes($_GET['no']);
	
    $sql = "select * from board where no= {$no}";
    $res = $connect->query($sql);
	$showContent = $res->fetch_array(MYSQLI_ASSOC);
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset='utf-8'>
	<title><?php echo $showContent['title'] ?></title>
</head>
<body>
	<article class="boardArticle">
		<h3>게시판</h3>
		<div id="boardView">
			<h3 id="boardTitle"><?php $showContent['title'] ?></h3>
			<div id="boardID">
				<span id="boardID">작성자: <?php echo $showContent['writen'] ?></span>
			</div>
		</div>
		<div id="boardContent"><?php echo $showContent['content'] ?></div>
	</article>
</body>
</html>
