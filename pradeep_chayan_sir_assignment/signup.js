function validateForm()
{

    //validate First Name 

	var first_name=document.forms["myForm"]["name"].value;
	if (first_name.length <= 3 || first_name.length >= 15 )
 	{

 		var div = document.createElement("DIV");               
		var message = document.createTextNode("First name must be in range of 3 to 15 characters");         
		div.appendChild(message);                             
		document.getElementById("fname_error").appendChild(div); 
		// return false;

	}
	
 	
    //validate Last name 
	var last_name = document.forms["myForm"]["name1"].value;
	if (last_name.length <= 3 || last_name.length >=15)
	{

		var div = document.createElement("DIV");               
		var message = document.createTextNode("Last name must be in range of 3 to 15 characters");         
		div.appendChild(message);                             
		document.getElementById("lname_error").appendChild(div);
		// return false;
	}
	

	// // validate phone no
	var  phone_No= document.forms["myForm"]["phone"].value;
	var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
	if (!re.test(phone_No))
	{
		var div = document.createElement("DIV");               
		var message = document.createTextNode("Phone number must have 10 digit, starting with 9 and all are numeric...!! ");         
		div.appendChild(message);                             
		document.getElementById("phone_error").appendChild(div);
		// return false;
	}
	

	// Validate email	
	var emailID = document.forms["myForm"]["email"].value;
	var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;


	if(!re.test(emailID))
	{
	
 		var div = document.createElement("DIV");               
		var message = document.createTextNode("Invalid email try to use @  and .com....!");         
		div.appendChild(message);                             
		document.getElementById("email_error").appendChild(div); 
		// return false;
  		
 	}
 	


	//Validate password 
	var password=document.forms["myForm"]["password"].value;
	var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
	if(!strongRegex.test(password))
	{

		var div = document.createElement("DIV");               
		var message = document.createTextNode("Password must have 8 characters, a capital later,a number and a special character");         
		div.appendChild(message);                             
		document.getElementById("password_error").appendChild(div); 
		// return false;
		
	}
	

 	var confirm_Password=document.forms["myForm"]["password1"].value;
 	if(password != confirm_Password)
 	{
 		var div = document.createElement("DIV");               
		var message = document.createTextNode("Password not matched...try again!!");         
		div.appendChild(message);                             
		document.getElementById("confirm_password_error").appendChild(div); 
		// return false;
		
 	}

 	//validate date
 	var date = document.forms["myForm"]["date"].value;
 	// var current_date = new Date();
 	// var my_dob = date.valueAsDate();
 	// if((current_date.getFullYear() - my_dob.getFullYear()) < 18 )
 	var splitted_date = date.split("")
 	if(splitted_date<3)
 	{
 		var div = document.createElement("DIV");               
		var message = document.createTextNode("invalid date format....!!");         
		div.appendChild(message);                             
		document.getElementById("date_error").appendChild(div); 
		// return false;
      
    }

	// Validate address
	var Address=document.forms["myForm"]["Address"].value;
	if (Address.length <= 3 || Address.length >= 30)
  	{

 		var div = document.createElement("DIV");               
		var message = document.createTextNode("Address must be in range of 3 to 30 characters,and should not empty...!");         
		div.appendChild(message);                             
		document.getElementById("Address_error").appendChild(div); 
		// return false;
  		
 	}
 	
 	
	// Validate city
	var city=document.forms["myForm"]["city"].value;
	if (city.length <= 3 || city.length >= 20)
 	{

 		var div = document.createElement("DIV");               
		var message = document.createTextNode("city must be in range of 3 to 20 characters,and should not empty...!");         
		div.appendChild(message);                             
		document.getElementById("city_error").appendChild(div); 
		// return false;
 	}
 	

	// Validate State
	var state=document.forms["myForm"]["state"].value;
	if (state.length <= 2 || state.length >= 20)
 	{

 		var div = document.createElement("DIV");               
		var message = document.createTextNode("State must be in range of 2 to 30 characters,and should not empty...!");         
		div.appendChild(message);                             
		document.getElementById("state_error").appendChild(div); 
		// return false;
  		
 	}
 

 	// Validate country
 	var country=document.forms["myForm"]["country"].value;
	if (country.length <= 2 || country.length >= 20)
 	{

 		var div = document.createElement("DIV");               
		var message = document.createTextNode("Address must be in range of 2 to 20 characters,and should not empty...!");         
		div.appendChild(message);                             
		document.getElementById("country_error").appendChild(div);
		// return false;
  		
 	}
 	
	// Validate Pincode
	var pin_code=document.forms["myForm"]["pincode"].value;
	if (!isNaN(pin_code))
 	{

 		var div = document.createElement("DIV");               
		var message = document.createTextNode("Please enter a valid pin code.... it must be a numeric value!!");         
		div.appendChild(message);                             
		document.getElementById("pincode_error").appendChild(div); 
		return false;
  		
 	}
 // 	else
 // 	{

 // 		document.getElementById("pincode_error").removeChild(div);
 // 	}
	
 }
