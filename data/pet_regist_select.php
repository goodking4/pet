<?php
	header("content-type:application/json;charset=utf-8");
	@$uname = $_REQUEST['register-uname'] or die('{"code":2,"msg":"uname required"}');
	require('InitDb.php');
	$sql="select * from pet_user where uname='$uname'";
	$result = $mysql->query(" $sql");
	$row = mysqli_fetch_assoc($result);
	if($row!==null){
		$output['code'] = 4;
		$output['msg'] = 'uname repeat';
		$output['sql'] = $sql;
	}else{
     		$output['code'] = 1;
     		$output['msg'] = 'success';
     		$output['sql'] = $sql;
     	}
	echo json_encode($output);