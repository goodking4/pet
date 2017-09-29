<?php
	header("content-type:application/json;charset=utf-8");
	require('InitDb.php');
	$sql="select * from shop_nav_select";
	$result = $mysql->query(" $sql");
	$row = mysqli_fetch_all($result,1);
	echo json_encode($row);