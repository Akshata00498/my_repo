
function f1(name,age,gender){
    return new Promise(function(resolve,reject){
    if (age >= 18){
        resolve("eligible");
        if( gender== "male"){
            resolve(console.log(`${name}, you have to be in the first line`));
        }
        else
        {
            resolve(console.log(`${name}, you have to be in the second line`));
        }
    }
    else{
        reject(console.log(`${name}, you are not eligible for the election vote`));
    }
});
}

f1("akshu",22,"female").catch((error) => {
         console.log(error);
       }).then((data) => {
         console.log(data);
       });
      
  
// );

// function promiseFunc(boolean) {
//     return new Promise((resolve, reject) => { // typedef function
//       if (boolean) resolve('Success!');
//       else reject('New Error!');
//     });
//   }
  
//   promiseFunc(true).catch((error) => {
//     console.log(error);
//   }).then((data) => {
//     console.log(data);
//   });
  


