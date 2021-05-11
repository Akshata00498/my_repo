
// craeting a class which calculate SalesTaxProblem.
class SalesTaxProblem{
     
    // function which perform execution
    calculatingSalesTax(){

            // created file system variable
            let fs = require('fs')

            let content;
            let dataForCsv = []

            let file ="input.csv" ;
            if(!file.endsWith(".csv")){
                console.log("enter a csv file....")
            }

           
            // reading a csv file 
            fs.readFile(file,(err,data) => {
                if(err){
                    // print error if error occure while reading the file
                    return console.error(err);
                }

            // converting data to string
            content = data.toString();
            
            if(!isNaN(content)){
                console.log("file content should be string");
            }

            console.log(content);

            // creating rows by splitting data from next line


            let rows = content.split("\n");
            if(rows.length <0){
                console.log("length should be greater than 0...");

            }

            // creating header array 
            let header = ["Product", "ProductcostPrice", "ProductSalesTax", "ProductSalesTaxAmount", "FinalCost", "Country" ];
            
            if(header == "" || header == null){
                console.log("header must contain some values...!");
            }
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
                if(!isNaN(product) || product == ""){
                    console.log("product must be a string...")
                }

                let productcost =rowData[1];
                if(isNaN(productcost)){
                    console.log("enter numeric values...")
                }

                let objRegex = /(^-?\d\d*\.\d\d*$)|(^-?\.\d\d*$)/;  
                let productSalesTax = rowData[2];
                if(!objRegex.test(productSalesTax) || !isNaN(productSalesTax)){
                    console.log("either enter float or numeric value")
                }
                let country =rowData[3];
                if(!isNaN(country)){
                    console.log("Country name must be a string")
                }
                

                // calculating product sales tax amount 
                var productSalesTaxAmount = productcost * (productSalesTax / 100);

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