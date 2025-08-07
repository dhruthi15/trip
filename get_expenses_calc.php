<?php
/*********************

**** CPanel ******************
*********/

/* Following code will match admin login credentials */

//user temp array
$response = array();

// include db connect class
require_once __DIR__ . '/db_connect.php';

// connecting to db

$data = json_decode(file_get_contents("php://input"));
$get_field_1 =  ($data->field_1);
$get_email =  ($data->email);


$result = mysqli_query($conn,"SELECT * FROM expense_total where field_1='$get_field_1' 
									and email='$get_email' ");
$count_dividend =0;

if($result)
{
	$response["details"] = array();	
	$response["expenses"] = array();	

	while($Alldetails = mysqli_fetch_array($result))
	{
		// temp user array
		$details = array();
		$details = $Alldetails;
		$get_payed = $Alldetails['field_4'];

	// Calculate Divident Count 
	$count_dividend++;
	
		$result3 = mysqli_query($conn,"SELECT  SUM(field_4) as total_amt FROM expense_total  where field_1='$get_field_1'  and email='$get_email' ");
			$Total_bal = mysqli_fetch_array($result3);			
			$get_total_price = $Total_bal["total_amt"];
			$expenses = array();
			$expenses = $Total_bal;
			$expenses["total_amt"] =  $get_total_price;
			$expenses["count_dividend"] = $count_dividend;
			$expenses["dividend_amt"] = round($get_total_price/ $count_dividend);
			
			
			array_push($response["details"],$details);

			
	
	}	
	//echo $get_total_price;
	
	array_push($response["expenses"],$expenses);		

	$response["success"] = 1;
	echo json_encode($response);

}
else
{
	$response["success"] = 0;	
	echo json_encode($response);
}
	

?>