<?php
	header('content-type:applition/json;charset=utf-8');
	@$uname = $_REQUEST['login-uname'] or die('{"code":2,"msg":"login-uname required"}');
	@$upwd = $_REQUEST['login-upwd'] or die('{"code":2,"msg":"login-upwd required"}');
	$loginTime = time()*1000;
	require('InitDb.php');
	$result = $mysql->query("select * from pet_user where uname=$uname and upwd=$upwd");
	$row = mysqli_fetch_assoc($result);
	if($row===null){
		echo '{"code":2,"msg":"用户名或密码错误"}';
	}else{
		$mysql->query("update pet_user set loginTime = $loginTime where uid = $row[uid]");
		$arr = ['code'=>1,'uname'=>$uname,'uid'=>$row['uid']];
		echo json_encode($arr);
	}