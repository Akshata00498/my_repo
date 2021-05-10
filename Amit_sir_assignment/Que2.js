// 2) Write a program to use try catch to handle exception if input value is not a number.

var number = "xtz";

try{
    if (isNaN(number)){
       throw "enter the correct input";
    }
    else{
        console.log("Given number is : " + number);
    }
}
catch(err){
    console.log("" + err);
}