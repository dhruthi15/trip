<?php
/*********************
**** CPanel ******************
*********/

/* Following register will admin login credentials */

// array for JSON response
$response = array();

// include db connect class
require_once __DIR__ . '/db_connect.php';

// connecting to db


$data = json_decode(file_get_contents("php://input"));

$get_email = ($data->email);
$get_field_1 = ($data->field_1);
$get_div_amt = ($data->field_2);
$get_created_date =date('Y-m-d');
$get_to_payed =0;

if( empty($get_field_1) || empty($get_email)   )
{
	$response["success"] = 2;
	echo json_encode($response);
}
else
{
	
	
$result = mysqli_query($conn,"SELECT * FROM expense_total where email = '$get_email' AND 
				field_1 = '$get_field_1'  ");

if(mysqli_num_rows($result))
{
	$response["details"] = array();	

	while($Alldetails = mysqli_fetch_array($result))
	{
		// temp user array
		$details = array();
		$details = $Alldetails;
		$get_spent = $Alldetails['field_4'];
		$get_id = $Alldetails['cus_id'];
		
	
		
		
		if ($get_spent < $get_div_amt)
		{
			$get_to_payed = $get_div_amt - $get_spent;
			//echo $get_to_payed;
			mysqli_query($conn,"UPDATE expense_total SET field_5='$get_to_payed'
			,field_6 ='-',field_7 ='red'
						WHERE cus_id = '$get_id' ");
		}
		else
		{
			$get_to_payed = $get_spent - $get_div_amt;
			//echo $get_to_payed;
			mysqli_query($conn,"UPDATE expense_total SET field_5='$get_to_payed',field_6 ='+',field_7 ='green'
						WHERE cus_id = '$get_id' ");
			
		}
		
		array_push($response["details"],$details);

	}	
	$response["success"] = 1;
	echo json_encode($response);

}
	
		else 
		{
			// unsuccess
			$response["success"] = 0;		
			// echoing JSON response
			echo json_encode($response);
		}
	
}
?>