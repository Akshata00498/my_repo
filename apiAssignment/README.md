<!-- title -->
NAME:-
Creating API using python with the help of flask framework


<!-- to install  -->
pip install flask
pip install pycurl

Features:- 
Creating rest API
 1. GET method.
 2. POST method.
 3. PUT method.
 4. DELETE method.
 

<!-- command to run the program-->
USAGE:-
python3 app.py

OR,

flask run


<!-- commands to execute the methods -->
1. To get the data.

curl -i http://localhost:5000/ProductDetail

2. To get the data of a perticular id

<!-- here in line no 26 you can give id as 0,1,2.... so on -->
curl -i http://localhost:5000/ProductDetail/id 

3. To post the data.

$ curl -i -H "Content-Type: application/json" -X POST -d '{"Enter the data according to your field"}' http://localhost:5000/ProductDetail

4. To update / put the data.

$ curl -i -H "Content-Type: application/json" -X PUT -d '{"enter the key and value"}' http://localhost:5000/ProductDetail

5. To delete the data of a perticular id.

<!-- here in line no 39 you can give id as 0,1,2.... so on -->
curl -i -H "Content-Type: application/json" -X DELETE http://localhost:5000/ProductDetail/id


SUPPORT:-
amandloi@isystango.com