var app = angular.module("myapp", ['ngCookies']);
app.controller("myappCtrl", function($scope, $cookieStore, $cookies, $http,$filter) 
{
	
/************************** Date Details ***********************************/
			
 $scope.ModifiedDate = $filter("date")(Date.now(), 'yyyy-MM-dd');

 /****************************************************************************/
/************************** Get Admin Details ***********************************/
/****************************************************************************/	
 
 
	$scope.cook_user_email = $cookieStore.get("cook_user_email");

	$scope.user_logout = function() 
	{
		if(confirm("Are You Sure?"))
		{
			$cookies.cook_user_email = "";
			$cookies.cook_admin_email="";
			window.location = "index.html";
			return;
		}
		else
		{
			return false;
		}
	}
	

/****************************************************************************/
/************************Home page*********************************
/****************************************************************************/
	if(!$cookies.cook_user_email)
	{
		$scope.UserHomeVar = false; //hide
		$scope.HomeVar = true; //hide
	}
	else 
	{
		$scope.UserHomeVar = true; //show
		$scope.HomeVar = false; //hide
	}

/****************************************************************************/
/************************** Get My Survey ***********************************/
/****************************************************************************/

	$http.post('get_date.php')
	.success(function(data, status, headers, config) 
	{
		$scope.date_details = data.details;
	});
	
	$http.post('get_user_ticket_last.php', 
		{
		'id':$scope.cook_user_email
		})
		.success(function(data, status, headers, config) 
		{
			$scope.user_ticket_details = data.details;
        });
		
	$http.post('get_user_grievance.php', 
		{
		'id':$scope.cook_user_email
		})
		.success(function(data, status, headers, config) 
		{
			$scope.user_grievance_details = data.details;
        });
		
	$http.post('get_user_redressal.php', 
		{
		'id':$scope.cook_user_type,'dept':$scope.cook_user_dept
		})
		.success(function(data, status, headers, config) 
		{
			$scope.user_redressal_details = data.details;
        });
	
	$http.post('get_all_redressal.php')
		.success(function(data, status, headers, config) 
		{
			$scope.all_redressal_details = data.details;
        });

	$http.post('get_category.php')
	.success(function(data, status, headers, config) 
	{
			$scope.category_details = data.details;
	});


	 

/****************************************************************************/
/************************** Application Get *********************************/
/****************************************************************************/

$scope.user_update_info = function(name,password,mobile) 
	{
		window.location = "user_info_edit.html";
		$cookieStore.put("cook_name",name);
		$cookieStore.put("cook_password",password);
		$cookieStore.put("cook_mobile",mobile);
		return;
	}	
	
	$scope.cook_name = $cookieStore.get("cook_name");
	$scope.cook_password = $cookieStore.get("cook_password");
	$scope.cook_mobile = $cookieStore.get("cook_mobile");

	$scope.save_update_info = function() 
	{		
		$http.post('user_update_info.php',{
		 'name':$scope.cook_name, 'password':$scope.cook_password,
		 'mobile': $scope.cook_mobile, 'email': $scope.cook_user_email})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Submited successfully");
				window.location = "user_update_info.html";
				return;				
			}
			else
			{
				alert("Invalid Inputs");
			}   
          });
     }

		 
/****************************************************************************/
/************************** Rating User  *********************************/
/****************************************************************************/

	$scope.grievance_rating = function(email) 
	{
		window.location = "user_rating.html";
		$cookieStore.put("cook_email",email);
		return;
	}	
	
	$scope.cook_email = $cookieStore.get("cook_email");

	$scope.save_rating = function() 
	{		
		$http.post('save_rating.php',{
		 'email':$scope.cook_email, 'field_1':$scope.field_1,'field_2':$scope.comment
		 })
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Submited successfully");
				window.location = "user_home.html";
				return;				
			}
			else if(data.success == 2)
			{
				alert("Please Fill All Fields");
			}
			else
			{
				alert("Invalid Inputs");
			}   
          });
     }

/****************************************************************************/
/************************** update_grievance  **********************************/
/****************************************************************************/
		 
	$scope.update_grievance = function(email,field_21) 
	{		
		$http.post('update_grievance.php',{
		 'email':email, 'field_1':field_21
		 })
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Updated successfully");
				//location.reload();
				//window.location = "redressal.html";
				return;				
			}
			else if(data.success == 2)
			{
				alert("Please Fill All Fields");
			}
			else
			{
				alert("Invalid Inputs");
			}   
          });
     }

/****************************************************************************/
/************************** delay_grievance  **********************************/
/****************************************************************************/
		 
	$scope.delay_grievance = function(email,delay) 
	{		
		$http.post('delay_grievance.php',{
		 'email':email, 'field_1':delay
		 })
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Updated successfully");
				window.location = "redressal.html";
				return;				
			}
			else if(data.success == 2)
			{
				alert("Please Fill All Fields");
			}
			else
			{
				alert("Invalid Inputs");
			}   
          });
     }

/****************************************************************************/
/************************** forward_grievance  **********************************/
/****************************************************************************/
		 
	$scope.forward_grievance = function(cus_id,field_9) 
	{		
		$http.post('forward_grievance.php',{
		 'cus_id':cus_id, 'field_1':field_9,
		 'type':$scope.cook_user_type,'dept':$scope.cook_user_dept
		 })
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Forwarded successfully");
				window.location = "redressal.html";
				return;				
			}
			else if(data.success == 2)
			{
				alert("Please Fill All Fields");
			}
			else if(data.success == 3)
			{
				alert("Already Forwarded");
			}
			else
			{
				alert("Invalid Inputs");
			}   
          });
     }

/****************************************************************************/
/************************** Validation **********************************/
/****************************************************************************/
	$scope.er_email = true;
	// mobile number verification
	$scope.register_email = function()
	{
		var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		if(filter.test($scope.pimage))
		{
			$scope.er_email = true;
			$scope.btn_sgnup = false;
			$scope.btn_sgnin = false;
		}
		else
		{
			$scope.er_email = false;
			$scope.btn_sgnup = true;
			$scope.btn_sgnin = true;
		}
	}
	// mobile number verification
	$scope.login_email = function()
	{
		var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		if(filter.test($scope.log_email))
		{
			$scope.er_email = true;
			$scope.btn_sgnup = false;
			$scope.btn_sgnin = false;
		}
		else
		{
			$scope.er_email = false;
			$scope.btn_sgnup = true;
			$scope.btn_sgnin = true;
		}
	}
	
	$scope.er_mob = true;
	// mobile number verification
	$scope.mobile_no = function()
	{
		var filter = /^\d{10}$/;
		if(filter.test($scope.description))
		{
			$scope.er_mob = true;
			$scope.btn_sgnup = false;
		}
		else
		{
			$scope.er_mob = false;
			$scope.btn_sgnup = true;
		}
	}


		 
	
	
	
	
});