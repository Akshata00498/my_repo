function f1(name,score,callback){

	
	if(score>40){
		var result="Pass";
	}
	else{
		var result= "Fail";
	}
	
	return	callback(name,result);

}
function f2(name,result){
	console.log(name.charAt(0).toUpperCase()+name.slice(1), " : " , result);
}

setTimeout(function(){f1("akshu",70,f2)}, 5000);

