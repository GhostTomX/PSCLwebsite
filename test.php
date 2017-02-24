<?php
    $dbc=  new mysqli("localhost","root","pscl","pscl_db");
    if(!$dbc)  {
        echo"数据库链接错误!";
	}
	
	$query="SELECT * FROM pscl_db.members;";
	$result=$dbc->query($query);
	if ($result) {
         if($result->num_rows>0){                                               //判断结果集中行的数目是否大于0
                  while($row =$result->fetch_array() ){                        //循环输出结果集中的记录
                           echo ($row[0])."<br>";
                           echo ($row[1])."<br>";
                           echo ($row[2])."<br>";
                           echo ($row[3])."<br>";
						   echo ($row[4])."<br>";
						   echo ($row[5])."<br>";

                           echo "<hr>";
                  }
         }
}else {
         echo "查询失败";
}
	
	
    mysqli_close($dbc);

?>