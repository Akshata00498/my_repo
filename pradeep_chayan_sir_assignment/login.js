function validate(){
	var userid = document.forms["myForm"]["userid"].value;
	if(isNaN(userid))
	{
		var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
		if(!re.test(userid))
		{
			var div = document.createElement("DIV");               
			var message = document.createTextNode("Invalid email try to use @  and .com....!");         
			div.appendChild(message);                             
			document.getElementById("userid_error").appendChild(div); 
			
		}
	}

	else
	{
		var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
		if (!re.test(userid))
		{
			var div = document.createElement("DIV");               
			var message = document.createTextNode("Phone number must have 10 digit, starting with 9 and all are numeric...!! ");         
			div.appendChild(message);                             
			document.getElementById("userid_error").appendChild(div);
			
		}
	}
		
		
	var password = document.forms["myForm"]["password"].value;
	var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
	if(!strongRegex.test(password))
	{

		var div = document.createElement("DIV");               
		var message = document.createTextNode("Password must have 8 characters, a capital later,a number and a special character");         
		div.appendChild(message);                             
		document.getElementById("password_error").appendChild(div); 
		return false;
		
	}
}
	
			