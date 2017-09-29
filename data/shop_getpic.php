<?php
header("Content-Type:application/json;charset=utf-8");
@$start = $_REQUEST['start'];
if(empty($start))
{
    $start = 0;
}
$count = 4;

require('InitDb.php');

$sql = "SELECT * FROM shop_btm LIMIT $start,$count";
$result = $mysql->query(" $sql");
while(true)
{
    $row = mysqli_fetch_assoc($result);
    if(!$row)
    {
        break;
    }
    $output[] = $row;
}

echo json_encode($output);
?>