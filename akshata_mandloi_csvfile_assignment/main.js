
// craeting a class which calculate SalesTaxProblem.
class SalesTaxProblem{
     
    // function which perform execution
    calculatingSalesTax(){

            // created file system variable
            let fs = require('fs')

            let content;
            let dataForCsv = []
            const productSalesTax = 5;

            // reading a csv file 
            fs.readFile('input.csv',(err,data) => {
                if(err){
                    // print error if error occure while reading the file
                    return console.error(err);
                }

            // converting data to string
            content = data.toString();
            console.log(content);

            // creating rows by splitting data from next line
            let rows = content.split("\n");

            // creating header array 
            let header = ["Product", "ProductcostPrice", "ProductSalesTax", "ProductSalesTaxAmount", "FinalCost", "Country" ];
            
            // inserting header array values into an object  
            dataForCsv.push(header);

            // starting array from 1 just to fetch  only value not header 
            for (var i =1; i < rows.length ; i++)
            {   
                // splitting row value from comma and storing in rowData variable
                var rowData = rows[i].split(",");

                if(!rowData[1]) continue;

                // adding value into feilds
                let product =rowData[0];
                let productcost =rowData[1];
                let country =rowData[2];

                // calculating product sales tax amount 
                let productSalesTaxAmount = productcost * (productSalesTax / 100);

                // calculating final cost of product
                let finalCost = parseFloat(productcost) + parseFloat(productSalesTaxAmount);

                let dataJSONObj = [ product,  productcost,  productSalesTax ,  productSalesTaxAmount, finalCost,  country ];
                dataForCsv.push(dataJSONObj);
            }
            console.log(dataForCsv);

            // taking dataForCsv object value and storing in csvContent one by one
            let csvContent = "";
            dataForCsv.forEach(function(rowArray){
                let row = rowArray.join(" , ");
                csvContent += row + "\n";

            });
            console.log(csvContent);

            // writting the csvContent data into output.csv file
            fs.writeFile('output.csv',csvContent,function(err){
                if(err){
                    return console.error(err);
                }
            });
            });

    }
}

// instantiate the object 
let SalesTaxProblemObj = new SalesTaxProblem();

// calling the method  
SalesTaxProblemObj.calculatingSalesTax();