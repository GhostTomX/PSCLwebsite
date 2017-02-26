<?php
    $q=$_GET["q"];
    //echo $q;
    $dbc=  new mysqli("localhost","root","pscl","pscl_db");
    if(!$dbc)  {
        echo"数据库链接错误!";
	}
	$query="SELECT * FROM pscl_db.members where membersDep = '".$q."'; ";
	$result=$dbc->query($query);
	if ($result) {
         if($result->num_rows>0){                                               //判断结果集中行的数目是否大于0
                  while($row =$result->fetch_array() ){                        //循环输出结果集中的记录
                           echo "<div class = \"depOfMember\"><h3><strong>".$q."</strong></h3></div><div class=\"col-sm-3\"><div class = \"member_outdiv\"><img class=\"Option img-circle \" src=\"images ".($row[2])."\" height=\"100%\" width=\"100%\">";
                           echo "<h5>Name:".($row[3])."</h5>";
                           echo "<h5>Mail:".($row[4])."</h5>";
						   echo "<h5>Year:".($row[5])."</h5>";
						   echo ("<button type=\"button\" class=\"btn btn-primary\">".$row[6])."</button></div></div></div>";
                  }
         }
}else {
         echo "查询失败";
}
	
	
    mysqli_close($dbc);

?>