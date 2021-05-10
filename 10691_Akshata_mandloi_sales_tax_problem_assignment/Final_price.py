# online python compiler link :- https://www.programiz.com/python-programming/online-compiler/ 

# importing modules
import csv
import pandas as pd

class salesTaxCalculation:

    def calculatingProductFinalPrice(self):
    
        # writting data into output csv file
        with open('input.csv','r') as input_csv:
            with open('output.csv', 'w', newline='') as csv_file:
                content = input_csv.read()
                csv_file.write(content)
        

        # finding the list of a column name
        reading_csv = pd.read_csv('output.csv')
        list_of_column_names = list(reading_csv.columns)

        # fatching a perticular column and its values
        reading_csv1 = pd.read_csv("output.csv", usecols=list_of_column_names)
        list1 = list(reading_csv1["Product_costPrice"])
        print("Product cost price is :- ",list1)

        try:
            # taking sales tax percent and appending that column into output csv file
            Sales_tax_Percent = int(input("enter the sales tax percent :- "))
            new_column = pd.read_csv("output.csv")
            new_column["sales_tax_percent"] = Sales_tax_Percent
            new_column.to_csv("output.csv", index=False)

    
    
            # finding the sales tax amount for each product
            sales_tax_Amount = []
            for i in list1:
                sales_tax_Amount.append( (i * Sales_tax_Percent) / 100 )
            print("sales tax amount is :- ", sales_tax_Amount) 
    

            # calculating the product final prise 
            product_final_price = []
            for i in range(len(list1)):
                product_final_price.append(list1[i]+sales_tax_Amount[i])
            print("after adding the sales tax price the  product_final_price is : -" , product_final_price)
        
        except wrongInputerror:
            print("enter right values")
        

      
        # Adding the sales tax amount into the output csv file
        reading_csv2= pd.read_csv("output.csv")
        reading_csv2["sales_tax_Amount"] = sales_tax_Amount
        reading_csv2 .to_csv("output.csv", index=False)

       
        # Adding product final price column into output csv file
        reading_csv3 = pd.read_csv("output.csv")
        reading_csv3["product_final_price"] = product_final_price
        reading_csv3.to_csv("output.csv", index=False)


# creating object and calling methods of class salesTaxCalculation
salesTaxCalculationProblem = salesTaxCalculation()
salesTaxCalculationProblem.calculatingProductFinalPrice()
