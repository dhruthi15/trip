var app = angular.module("myapp", ['ngCookies']);
app.controller("myappCtrl", function($scope, $cookies, $cookieStore, $http, $filter) 
{
	
/****************************************************************************/
/**************************User Cookies **********************************/	
/****************************************************************************/	
	
	$scope.cook_user_email = $cookieStore.get("cook_user_email");
	$scope.cook_admin_email = $cookieStore.get("cook_admin_email");
	$scope.cook_user_mail = $cookieStore.get("cook_user_mail");

/****************************************************************************/
/************************** User Logout ************************************/
/****************************************************************************/		
	$scope.user_logout = function() 
	{
		if(confirm("Are You Sure?"))
		{
			$cookies.cook_admin_email = "";
			$cookies.cook_user_email = "";
			$cookies.cook_user_type = "";
			$cookies.cook_user_dept = "";
			$cookies.cook_res_field_1 = "";
			$cookies.cook_res_field_2 = "";
			$cookies.cook_res_field_3 = "";
			$cookies.cook_res_field_4 = "";
			$cookies.cook_survey_id = "";
			$cookies.cook_survey_name = "";
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
/************************** Post Query User *********************************/
/****************************************************************************/
	$scope.complaint_status = function(email) 
	{		
		window.location = "admin_post_solution.html";
		$cookieStore.put("cook_user_email",email);
		return;				
    }
	$scope.cook_user_email = $cookieStore.get("cook_user_email");
/****************************************************************************/
/************************** update_Expenses Tracker  **********************************/
/****************************************************************************/
		 
	$scope.update_status = function(email) 
	{		
		$http.post('update_status.php',{
		 'email':email
		 })
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Approved successfully");
				window.location = "view_employee.html";
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



	$scope.user_register = function() 
	{
	$http.post('user_register.php', 
		{
		'name':$scope.name1,'email':$scope.email,'password':$scope.password,
		'mobile':$scope.mobile,'field_1':$scope.field_1,'field_2':$scope.field_2,
		'field_3':$scope.field_3,'field_4':$scope.field_4
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Registered Successfully");
				window.location = "index.html";
				return;				
			}
			else if(data.success == 2)
			{
				alert("Fill All Fields");
			}
			
			else if(data.success == 3)
			{
				alert("Enter 10 Digit Mobile No");
			}
			else if(data.success == 4)
			{
				alert("Email ID Already Exists");
			}
			else if(data.success == 5)
			{
				alert("Enter 8 Digit Password");
			}
			else if(data.success == 6)
			{
				alert("Atleast Use One Special, Number and Captial Character - $1A ");
			}
			else if(data.success == 0)
			{
				alert("Error");
			}			
			else
			{
				alert(" Un Successfull");
			}   
          });
     }
/*****************************************************************************/
/************************** Update update_employee **************************/
/****************************************************************************/
	$scope.update_expenses = function(cus_id,field_1,field_2,
					field_3,field_4) 
	{
		
		$cookieStore.put("cook_cus_id",cus_id);
		$cookieStore.put("cook_field_1",field_1);
		$cookieStore.put("cook_field_2",field_2);
		$cookieStore.put("cook_field_3",field_3);
		$cookieStore.put("cook_field_4",field_4);
		window.location = "edit_expenses.html";
		return;
	}
	

	$scope.cook_cus_id = $cookieStore.get("cook_cus_id");
	$scope.cook_field_1 = $cookieStore.get("cook_field_1");
	$scope.cook_field_2 = $cookieStore.get("cook_field_2");
	$scope.cook_field_3 = $cookieStore.get("cook_field_3");
	$scope.cook_field_4 = $cookieStore.get("cook_field_4");
	

	
$scope.save_expenses = function() 
	{
	$http.post('save_expenses.php', {
			'id': $scope.cook_cus_id,
			'field_1': $scope.cook_field_1,'field_2': $scope.cook_field_2, 
			'field_3': $scope.cook_field_3,  'field_4': $scope.cook_field_4})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			alert("Updated Successfully");
			window.location = "view_expenses.html";
				$cookies.cook_field_1 = "";	
				$cookies.cook_field_2 = "";
				$cookies.cook_field_3 = "";	
				$cookies.cook_field_4 = "";
			return;
		}
				else if(data.success == 2)
				{
					alert("Adding Unsuccessful");
				}
				else
				{
					alert("Unsuccessful");
				}
    });
	}
/****************************************************************************/
/************************** create_category *********************************/
/****************************************************************************/
	$scope.create_category = function() 
	{
	$http.post('create_category.php', 
		{
		'field_1':$scope.field_1,'email':$scope.cook_user_email
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				location.reload(); 
				return;				
			}
			else if(data.success == 2)
			{
				alert("Fill All Fields");
			}
			
			else
				{
					alert("Un Successfully");
				}
        });
    }
/****************************************************************************/
/************************** create_name *********************************/
/****************************************************************************/
	$scope.create_name = function() 
	{
	$http.post('create_name.php', 
		{
		'field_1':$scope.field_1,'email': $scope.cook_user_email
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				   location.reload(); 
			return;				
			}
			else if(data.success == 2)
			{
				alert("Fill All Fields");
			}
			
			else
				{
					alert("Un Successfully");
				}
        });
    }
/*****************************************************************************/
/************************** Update update_employee*********************************/
/****************************************************************************/
	$scope.update_name = function(cus_id,field_1) 
	{
		$cookieStore.put("cook_cus_id",cus_id);
		$cookieStore.put("cook_field_1",field_1);
		window.location = "edit_dept.html";
		return;
	}
	
	$scope.update_cat = function(cus_id,field_1) 
	{
		$cookieStore.put("cook_cus_id",cus_id);
		$cookieStore.put("cook_field_1",field_1);
		window.location = "edit_cat.html";
		return;
	}
	
	$scope.cook_cus_id = $cookieStore.get("cook_cus_id");
	$scope.cook_field_1 = $cookieStore.get("cook_field_1");
	
		
$scope.save_name = function() 
	{
	$http.post('save_name.php', {
			'id': $scope.cook_cus_id,
			'field_1': $scope.cook_field_1})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			alert("Updated Successfully");
			window.location = "create_name.html";
			$cookies.cook_cus_id = "";
			$cookies.cook_field_1 = "";	
			return;
		}
				else if(data.success == 2)
				{
					alert("Adding Unsuccessful");
				}
				else
				{
					alert("Fill All Fields");
				}
			
    });
	}
	
$scope.save_cat = function() 
	{
	$http.post('save_cat.php', {
			'id': $scope.cook_cus_id,
			'field_1': $scope.cook_field_1})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			alert("Updated Successfully");
			window.location = "create_cat.html";
			$cookies.cook_cus_id = "";
			$cookies.cook_field_1 = "";	
			return;
		}
				else if(data.success == 2)
				{
					alert("Adding Unsuccessful");
				}
				else
				{
					alert("Fill All Fields");
				}
			
    });
	}
	
/****************************************************************************/
/************************** create Site *********************************/
/****************************************************************************/
	$scope.create_site = function() 
	{
	$http.post('create_site.php', 
		{
		'field_1':$scope.field_1
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				   location.reload(); 
			return;				
			}
			else if(data.success == 2)
			{
				alert("Fill All Fields");
			}
			
			else
				{
					alert("Un Successfully");
				}
        });
    }
/*****************************************************************************/
/************************** Update update_employee*********************************/
/****************************************************************************/
	$scope.update_site = function(cus_id,field_1) 
	{
		$cookieStore.put("cook_cus_id",cus_id);
		$cookieStore.put("cook_field_1",field_1);
		window.location = "edit_site.html";
		return;
	}
	

	$scope.cook_cus_id = $cookieStore.get("cook_cus_id");
	$scope.cook_field_1 = $cookieStore.get("cook_field_1");
	
		
$scope.save_site = function() 
	{
	$http.post('save_site.php', {
			'id': $scope.cook_cus_id,
			'field_1': $scope.cook_field_1})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			alert("Updated Successfully");
			window.location = "create_site.html";
			$cookies.cook_cus_id = "";
			$cookies.cook_field_1 = "";	
			return;
		}
				else if(data.success == 2)
				{
					alert("Adding Unsuccessful");
				}
				else
				{
					alert("Fill All Fields");
				}
			
    });
	}
	
/****************************************************************************/
/************************** create Area *********************************/
/****************************************************************************/
	$scope.create_area = function() 
	{
	$http.post('create_area.php', 
		{
		'field_1':$scope.field_1,'field_2':$scope.field_2
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				location.reload(); 
				return;				
			}
			else if(data.success == 2)
			{
				alert("Fill All Fields");
			}
			
			else
				{
					alert("Un Successfully");
				}
        });
    }
/*****************************************************************************/
/************************** Update update_employee*********************************/
/****************************************************************************/
	$scope.update_area = function(cus_id,field_2) 
	{
		$cookieStore.put("cook_cus_id",cus_id);
		$cookieStore.put("cook_field_1",field_2);
		window.location = "edit_area.html";
		return;
	}
	

	$scope.cook_cus_id = $cookieStore.get("cook_cus_id");
	$scope.cook_field_1 = $cookieStore.get("cook_field_1");
	
		
$scope.save_area = function() 
	{
	$http.post('save_area.php', {
			'id': $scope.cook_cus_id,
			'field_1': $scope.cook_field_1})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			alert("Updated Successfully");
			window.location = "create_area.html";
			$cookies.cook_cus_id = "";
			$cookies.cook_field_1 = "";	
			return;
		}
				else if(data.success == 2)
				{
					alert("Adding Unsuccessful");
				}
				else
				{
					alert("Fill All Fields");
				}
			
    });
	}
	
$scope.get_site_area = function(field_6) 
	{
	$http.post('get_site_area.php', {
			'field_6': $scope.field_6})
	.success(function(data, status, headers, config) 
	{
		$scope.site_area_details = data.details;

    });
	}
$scope.get_site_area_2 = function(field_20) 
	{
	$http.post('get_site_area.php', {
			'field_6': $scope.field_20})
	.success(function(data, status, headers, config) 
	{
		$scope.site_area_details_assign = data.details;

    });
	}
	
/****************************************************************************/
/************************** create User Type *********************************/
/****************************************************************************/
	$scope.create_user = function() 
	{
	$http.post('create_user.php', 
		{
		'field_1':$scope.field_1
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("User Type Created");
				window.location = "view_user.html";
				return;				
			}
			else if(data.success == 2)
			{
				alert("Fill All Fields");
			}
			
			else
				{
					alert("Un Successfully");
				}
        });
    }
/***********************************************************************/
/************************** Update user*********************************/
/*********************************************************************s**/
	$scope.update_user = function(cus_id,field_1) 
	{
		$cookieStore.put("cook_cus_id",cus_id);
		$cookieStore.put("cook_field_1",field_1);
		window.location = "create_user.html";
		return;
	}
	
	$scope.cook_cus_id = $cookieStore.get("cook_cus_id");
	$scope.cook_field_1 = $cookieStore.get("cook_field_1");
	
		
$scope.save_user = function() 
	{
	$http.post('save_user.php', {
			'id': $scope.cook_cus_id,
			'field_1': $scope.cook_field_1})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			alert("Updated Successfully");
			window.location = "view_user.html";
			$cookies.cook_cus_id = "";
			$cookies.cook_field_1 = "";	
			return;
		}
				else if(data.success == 2)
				{
					alert("Adding Unsuccessful");
				}
				else
				{
					alert("Fill All Fields");
				}
			
    });
	}
/*****************************************************************************/
/************************** create_question *********************************/
/****************************************************************************/
	$scope.create_question = function(email,field_1) 
	{
		$cookieStore.put("cook_survey_id",email);
		$cookieStore.put("cook_survey_name",field_1);
		window.location = "survey_question.html";
		return;
	}
	
	$scope.cook_survey_id = $cookieStore.get("cook_survey_id");
	$scope.cook_survey_name = $cookieStore.get("cook_survey_name");
	
/**************************************************************************/
/************************** Delete User  *********************************/
/****************************************************************************/
	// products_delete
	$scope.delete_expenses = function(cusid) 
	{		
        $http.post('delete_expenses.php', 
		{
		'id': cusid
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Deleted Successful");
				window.location = "view_expenses.html";
				return;
			}
			else if(data.success == 0)
			{
				alert("Error While Deleting Product!!");
			}
			else
			{
				alert("No id found");
			}
        });
    }

	$scope.delete_tour = function(cusid) 
	{		
        $http.post('delete_tour.php', 
		{
		'id': cusid
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Deleted Successful");
				window.location = "view_tour.html";
				return;
			}
			else if(data.success == 0)
			{
				alert("Error While Deleting Product!!");
			}
			else
			{
				alert("No id found");
			}
        });
    }

/**************************************************************************/
/************************** Delete tat  *********************************/
/****************************************************************************/
	// products_delete
	$scope.delete_tat = function(cusid) 
	{		
        $http.post('delete_tat.php', 
		{
		'id': cusid
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				window.location = "create_tat.html";
				return;
			}
			else if(data.success == 0)
			{
				alert("Error While Deleting Product!!");
			}
			else
			{
				alert("No id found");
			}
        });
    }

/**************************************************************************/
/************************** Delete User  *********************************/
/****************************************************************************/
	// products_delete
	$scope.delete_question = function(cusid,email) 
	{		
        $http.post('delete_question.php', 
		{
		'id': cusid,'survery_id': email
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Deleted Successful");
				window.location = "survey_question.html";
				return;
			}
			else if(data.success == 0)
			{
				alert("Error While Deleting Product!!");
			}
			else
			{
				alert("No id found");
			}
        });
    }

/****************************************************************************/
/************************** Delete User  *********************************/
/****************************************************************************/
	// products_delete
	$scope.delete_name = function(cusid) 
	{		
        $http.post('delete_name.php', 
		{
		'id': cusid
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Deleted Successful");
				window.location = "create_name.html";
				return;
			}
			else if(data.success == 0)
			{
				alert("Error While Deleting Product!!");
			}
			else
			{
				alert("No id found");
			}
        });
    }

	$scope.delete_cat = function(cusid) 
	{		
        $http.post('delete_cat.php', 
		{
		'id': cusid
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Deleted Successful");
				window.location = "create_cat.html";
				return;
			}
			else if(data.success == 0)
			{
				alert("Error While Deleting Product!!");
			}
			else
			{
				alert("No id found");
			}
        });
    }

/****************************************************************************/
/************************** Delete Area  *********************************/
/****************************************************************************/
	// products_delete
	$scope.delete_area = function(cusid) 
	{		
        $http.post('delete_area.php', 
		{
		'id': cusid
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Deleted Successful");
				window.location = "create_area.html";
				return;
			}
			else if(data.success == 0)
			{
				alert("Error While Deleting Product!!");
			}
			else
			{
				alert("No id found");
			}
        });
    }

/****************************************************************************/
/************************** Delete User  *********************************/
/****************************************************************************/
	// products_delete
	$scope.delete_site = function(cusid) 
	{		
        $http.post('delete_site.php', 
		{
		'id': cusid
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Deleted Successful");
				window.location = "create_site.html";
				return;
			}
			else if(data.success == 0)
			{
				alert("Error While Deleting Product!!");
			}
			else
			{
				alert("No id found");
			}
        });
    }

/****************************************************************************/
/************************** All service_get_al Details*********************************/
/****************************************************************************/

	$http.post('application_get_admin.php')
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			$scope.admin_details = data.details;
		}
		else
		{
			$scope.admin_details = "No Data Found !!!";
		}
    });
/****************************************************************************/
/************************** All GET get_employee Details*********************************/
/****************************************************************************/
	$http.post('update_tat_Expenses Tracker.php')
		.success(function(data, status, headers, config) 
		{
				$scope.update_tat_details = data.details;
		});

	$http.post('get_tat.php')
	.success(function(data, status, headers, config) 
	{
		$scope.tat_details = data.details;
    });
	
	
		
	
	$http.post('get_date.php')
	.success(function(data, status, headers, config) 
	{
		$scope.date_details = data.details;
	});
	

	
	$http.post('get_name.php')
	.success(function(data, status, headers, config) 
	{
			$scope.dept_details = data.details;
	});
	
	
	$http.post('get_category.php')
	.success(function(data, status, headers, config) 
	{
			$scope.category_details = data.details;
	});
	
	$http.post('get_tripto.php')
	.success(function(data, status, headers, config) 
	{
			$scope.tripto_details = data.details;
	});
	
	$http.post('get_site.php')
	.success(function(data, status, headers, config) 
	{
			$scope.site_details = data.details;
	});
	
	$http.post('get_area.php')
	.success(function(data, status, headers, config) 
	{
			$scope.area_details = data.details;
	});
	
	$http.post('get_user_type.php')
	.success(function(data, status, headers, config) 
	{
			$scope.user_type_details = data.details;
	});
	
	$http.post('get_site_results.php')
	.success(function(data, status, headers, config) 
	{
			$scope.all_site_results = data.details;
	});
	


/****************************************************************************/
/************************** All User Details*********************************/
/****************************************************************************/

	$http.post('user_get_all.php')
	.success(function(data, status, headers, config) 
	{
		$scope.user_details = data.details;
    });
	

	
/****************************************************************************/
/************************** create_expenses		 **************************/
/****************************************************************************/



	$http.post('get_expenses.php')
	.success(function(data, status, headers, config) 
	{
		$scope.expenses_full_details = data.details;

    });
	
	$http.post('get_all_tour.php')
	.success(function(data, status, headers, config) 
	{
		$scope.tour_full_details = data.details;

    });
	
	
	$http.post('get_all_report.php')
	.success(function(data, status, headers, config) 
	{
		$scope.report_full_details = data.details;

    });
	
	
	$scope.submit_trip = function(field_1) 
	{
		
		$cookieStore.put("cook_field_1",field_1);
		window.location = "view_results.html";
		return;
	}
	$scope.cook_field_1 = $cookieStore.get("cook_field_1");

	$http.post('get_expenses_calc.php', 
		{
		'field_1':$scope.cook_field_1,'email': $scope.cook_user_email
		})
		.success(function(data, status, headers, config) 
		{
		   $scope.expenses_details = data.details;
		   $scope.total_details = data.expenses;
        });
		
				
	$scope.calc_trip = function(dividend_amt) 
	{
	$http.post('create_calc_trip.php', 
		{
		'field_1':$scope.cook_field_1,'field_2':dividend_amt,
		'email': $scope.cook_user_email
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Calculated Successfully");
				window.location = "view_results.html";
			}
			else if(data.success == 2)
			{
				alert("Fill All Fields");
			}
			
			else
				{
					alert("Un Successfully");
				}
        });
    }
	

	
/****************************************************************************/
/************************** create_expenses **********************************/	
/****************************************************************************/	
		
	$scope.create_expenses = function() 
	{
	$http.post('create_expenses.php', 
		{
		'field_1':$scope.field_1,'field_2':$scope.field_2,
		'field_3':$scope.field_3,'field_4':$scope.field_4,
		'email': $scope.cook_user_email
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Created Successfully");
				window.location = "view_expenses.html";
			}
			else if(data.success == 2)
			{
				alert("Fill All Fields");
			}
			
			else
				{
					alert("Un Successfully");
				}
        });
    }
	
	
/****************************************************************************/
/**************************User Cookies **********************************/	
/****************************************************************************/	
	
	$scope.cook_admin_email = $cookieStore.get("cook_admin_email");
	
/****************************************************************************/
/************************** Admin Update Profile *********************************/
/****************************************************************************/
	
		$http.post('get_admin_info.php',
		{
			'field_1':$scope.cook_user_email
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{			
				$scope.admindetails = data.details;
			}
			
          });
	
/****************************************************************************/
/************************** Admin Update Profile *********************************/
/****************************************************************************/
	
		$http.post('get_admin_info.php',
		{
			'field_1':$scope.cook_admin_email
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{			
				$scope.admindetails = data.details;
			}
			
          });
		  
	$scope.admin_update_info = function(password) 
	{
		window.location = "admin_info_edit.html";
		$cookieStore.put("cook_password",password);
		return;
	}	
	
	
	$scope.cook_password = $cookieStore.get("cook_password");
	$scope.cook_admin_email = $cookieStore.get("cook_admin_email");

	$scope.save_update_admin = function() 
	{		
		$http.post('admin_update_info.php',{
		  'password':$scope.cook_password,'field_1': $scope.cook_user_email})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Submitted successfully");
				window.location = "admin_update_info.html";
				return;				
			}
			else
			{
				alert("Invalid Inputs");
			}   
          });
     }
		  
		
		
	$scope.create_tour = function() 
	{
		
	$scope.from_date = document.getElementById('from_date').value;
	$scope.to_date = document.getElementById('to_date').value;
	
	$http.post('create_tour.php', 
		{
		'email':$scope.cook_user_email,
		'field_1':$scope.field_1,'field_2':$scope.field_2,
		'field_3':$scope.field_3,'field_4':$scope.field_4,
		'field_5':$scope.field_5,'field_6':$scope.field_6,
		'field_7':$scope.field_7,'field_8':$scope.field_8,'field_9':$scope.field_9,
		'field_10':$scope.from_date,'field_11':$scope.to_date
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Created Successfully");
				window.location = "view_tour.html";
				return;				
			}
			else if(data.success == 2)
			{
				alert("Fill All Fields");
			}
			else if(data.success == 3)
			{
				alert("Enter 10 Digit Mobile No");
			}			
			else
				{
					alert("Un Successfully");
				}
        });
    }
	
	$scope.update_tour = function(cus_id,field_1,field_2,field_3,field_4,field_5,field_6,field_7,field_8,field_9,
								field_10,field_11,field_12) 
	{
		
		$cookieStore.put("cook_cus_id",cus_id);
		$cookieStore.put("cook_field_1",field_1);
		$cookieStore.put("cook_field_2",field_2);
		$cookieStore.put("cook_field_3",field_3);
		$cookieStore.put("cook_field_4",field_4);
		$cookieStore.put("cook_field_5",field_5);
		$cookieStore.put("cook_field_6",field_6);
		$cookieStore.put("cook_field_7",field_7);
		$cookieStore.put("cook_field_8",field_8);
		$cookieStore.put("cook_field_9",field_9);
		$cookieStore.put("cook_field_10",field_10);
		$cookieStore.put("cook_field_11",field_11);
		$cookieStore.put("cook_field_12",field_12);
		
		window.location = "edit_tour.html";
		return;
	}
	

	$scope.cook_cus_id = $cookieStore.get("cook_cus_id");
	$scope.cook_field_1 = $cookieStore.get("cook_field_1");
	$scope.cook_field_2 = $cookieStore.get("cook_field_2");
	$scope.cook_field_3 = $cookieStore.get("cook_field_3");
	$scope.cook_field_4 = $cookieStore.get("cook_field_4");
	$scope.cook_field_5 = $cookieStore.get("cook_field_5");
	$scope.cook_field_6 = $cookieStore.get("cook_field_6");
	$scope.cook_field_7 = $cookieStore.get("cook_field_7");
	$scope.cook_field_8 = $cookieStore.get("cook_field_8");
	$scope.cook_field_9 = $cookieStore.get("cook_field_9");
	$scope.cook_field_10 = $cookieStore.get("cook_field_10");
	$scope.cook_field_11 = $cookieStore.get("cook_field_11");
	$scope.cook_field_12 = $cookieStore.get("cook_field_12");
	

	
$scope.save_tour = function() 
	{
	$http.post('save_tour.php', {
			'id': $scope.cook_cus_id, 
			'field_1': $scope.cook_field_1,'field_2': $scope.cook_field_2, 
			'field_3': $scope.cook_field_3,'field_4': $scope.cook_field_4,
			'field_5': $scope.cook_field_5,'field_6': $scope.cook_field_6,
			'field_7': $scope.cook_field_7,'field_8': $scope.cook_field_8,
			'field_9': $scope.cook_field_9,'field_10': $scope.cook_field_10,
			'field_11': $scope.cook_field_11,'field_12': $scope.cook_field_12
			})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			alert("Updated Successfully");
			window.location = "view_tour.html";
				$cookies.cook_field_1 = "";	
				$cookies.cook_field_2 = "";
				$cookies.cook_field_3 = "";	
				$cookies.cook_field_4 = "";
				$cookies.cook_field_5 = "";	
				$cookies.cook_field_6 = "";	
				$cookies.cook_field_7 = "";	
				$cookies.cook_field_8 = "";	
				$cookies.cook_field_9 = "";	
				$cookies.cook_field_11 = "";	
				$cookies.cook_field_10 = "";	
			return;
		}
				else if(data.success == 2)
				{
					alert("Adding Unsuccessful");
				}
				else
				{
					alert("Fill All Fields");
				}
			
    });
	}
	
	
	
	$scope.update_report = function(cus_id,email) 
	{
		$cookieStore.put("cook_cus_id",cus_id);
		$cookieStore.put("cook_email",email);
		window.location = "update_report.html";
		return;
	}
	
	
	$scope.cook_cus_id = $cookieStore.get("cook_cus_id");
	$scope.cook_email = $cookieStore.get("cook_email");
	
		
$scope.save_report = function() 
	{
	$http.post('save_report.php', {
			'id': $scope.cook_cus_id,
			'email': $scope.cook_email,'field_1': $scope.cook_field_1})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			alert("Updated Successfully");
			window.location = "view_all_tour.html";
			$cookies.cook_cus_id = "";
			$cookies.cook_email = "";	
			return;
		}
				else if(data.success == 2)
				{
					alert("Adding Unsuccessful");
				}
				else
				{
					alert("Fill All Fields");
				}
			
    });
	}
	
	
	
	$scope.view_all_details = function(field_2) 
	{
		$cookieStore.put("cook_filter",field_2);
		window.location = "view_tour_admin.html";
		return;
	}
	
	$scope.cook_filter = $cookieStore.get("cook_filter");
	
	$scope.view_user_profile = function(email) 
	{
		$cookieStore.put("cook_email",email);
		window.location = "view_user_profile.html";
		return;
	}
	
	$scope.cook_email = $cookieStore.get("cook_email");
	
	
	
$scope.block_user = function(email) 
	{
	$http.post('block_user.php', {
			'id': email})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			alert("Blocked Successfully");
			window.location = "view_all_report.html";
			return;
		}
		else if(data.success == 2)
				{
					alert("Adding Unsuccessful");
				}
				else
				{
					alert("Fill All Fields");
				}
			
    });
	}
	
	
$scope.unblock_user = function(email) 
	{
	$http.post('unblock_user.php', {
			'id': email})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			alert("Unblocked Successfully");
			window.location = "view_all_report.html";
			return;
		}
		else if(data.success == 2)
				{
					alert("Adding Unsuccessful");
				}
				else
				{
					alert("Fill All Fields");
				}
			
    });
	}
	
	
	$scope.exportData = function () {
        var blob = new Blob([document.getElementById('exportable').innerHTML], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
        });
        saveAs(blob, "Expenses Tracker_Report.xls");
		};
		



	
	
});