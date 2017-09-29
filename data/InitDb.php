<?php
	class mysqlDB
	{
		private $link;
		static private $_instance;
		private function __construct($host,$username,$password,$database)
		{
			$this->link=mysqli_connect($host,$username,$password,$database);
			if(!$this->link){
				die("连接失败！");
			}  
			mysqli_query($this->link,"set names utf8;");
		}
		private function __clone()
		{
		
		}
		public static function connectDB($host,$username,$password='',$database='')
		{
			if(FALSE == (self::$_instance instanceof self))
			{
				self::$_instance = new self($host,$username,$password,$database);
			}
			return self::$_instance;
		}
		//链接数据库表
		public function useDb($database){
			return $this->result=mysqli_select_db($this->link,$database); 
		}
		//执行SQL语句
		public function query($query){  
			return $this->result=mysqli_query($this->link,$query);  
		} 
		//将结果集保存为关联数组
		public function fetchAllAssoc($result){
			return $this->result=mysqli_fetch_all($result,MYSQLI_ASSOC);
		}
		//将结果集保存为索引数组
		public function fetchAllArray($result){
			return $this->result=mysqli_fetct_all($result,MYSQLI_NUM);
		}
		//获得查询结果集记录数目
		public function numRows($result){
			return $this->result=mysqli_num_rows($result);
		}
		//获得新添加的id
		public function insertId(){
			return $this->result=mysqli_insert_id($this->link);
		}
		public function close()
		{
			return mysqli_close($this->link);
		}
	}
	$mysql = mysqlDB::connectDB('localhost','root');
	$mysql->useDb('Pet');
?>