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
$get_field_2 = ($data->field_2);
$get_field_3 = ($data->field_3);
$get_field_4 = ($data->field_4);
$get_created_date =date('Y-m-d');


if( empty($get_field_1) || empty($get_field_2) || 
	empty($get_field_3) ||
	empty($get_field_4)  )
{
	$response["success"] = 2;
	echo json_encode($response);
}
else
{
	
	
	$result = mysqli_query($conn,"INSERT INTO expense
							( email,field_1, field_2, field_3, field_4, created_date	)
			VALUES(	'$get_email', '$get_field_1', '$get_field_2', '$get_field_3', 
					'$get_field_4', '$get_created_date')");
					
	$result3 = mysqli_query($conn,"SELECT * FROM expense_total 
			where field_2='$get_field_2' and field_1='$get_field_1' and  email='$get_email' ");
	$Alldetails = mysqli_fetch_array($result3);
	

			if ( (isset($Alldetails["field_2"])  == null)) 
			{	
				$get_name = 0;
			}
			else{
				$get_name = $Alldetails["field_2"];
			}
			

		if( empty($get_name))
		{
			$result1 =mysqli_query($conn,"INSERT INTO expense_total
							( email,field_1, field_2, field_3, field_4, created_date	)
			VALUES(	'$get_email', '$get_field_1', '$get_field_2', '$get_field_3', 
					'$get_field_4', '$get_created_date')");
		}
		else 
		{
				$result1 = mysqli_query($conn,"UPDATE expense_total SET 
					field_4=field_4+'$get_field_4'
				where email='$get_email' AND  field_2='$get_field_2' AND  field_1='$get_field_1' ");
		
		}
		if($result1){

			$response["success"] = 1;		
			// echoing JSON response
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