async function f1(name,age,gender) {
    return new Promise(function(resolve,reject){
      if (age >= 18){
          resolve("eligible");
          if( gender== "male"){
              resolve(`${name}, you have to be in the first line`);
            }
          else
          {
              resolve(`${name}, you have to be in the second line`);
          }
      }
      else{
          reject(`${name}, you are not eligible for the election vote`);
      }
  });
  }
  
  async function asyncFunction() {
    try {
      const data = await f1("Ram",17,"male");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    return 0;
  }
  
  asyncFunction().then((data) => {
    console.log(data);
  });
  