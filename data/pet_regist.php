<?php
	header("content-type:application/json;charset=utf-8");
	@$uname = $_REQUEST['register-uname'] or die('{"code":2,"msg":"uname required"}');
	@$upwd = $_REQUEST['register-upwd1'] or die('{"code":3,"msg":"upwd required"}');
	$registTime = time()*1000;
	require('InitDb.php');
	$sql = "insert into pet_user values(null,'$uname','$upwd',null,null,'$registTime')";
	$result = $mysql->query($sql);
	if($result===false){
		$output['code'] = 4;
		$output['msg'] = 'insert err';
		$output['sql'] = $sql;
	}else{
		$output['code'] = 1;
		$output['userId'] = $mysql->insertId();
	}
	echo json_encode($output);
