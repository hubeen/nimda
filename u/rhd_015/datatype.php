<?php
$a_bool=TRUE;
$a_str="foo";
$a_str='foo';
$an_int=12;

echo gettype($a_bool)."<br>";
echo gettype($a_str)."<br>";

if(is_int($an_int)){
	$an_int+=4;
}

if(in_string($a_bool)){
	echo "문자열:$a_bool";
}
?>
