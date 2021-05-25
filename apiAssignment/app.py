# importing the important module
from flask import Flask, jsonify, abort , request
import json

app = Flask(__name__)

ProductDetail = [
   		{
			"id" : 0,
			"ProductName" : "Paper",
			"CostPrice" : 150,
			"country" : "India",
		},
		{
			"id" : 1,
			"ProductName" : "Paper-Roll",
			"CostPrice" : 160,
			"country" : "Australia",
		},
		{
			"id" : 2,
			"ProductName" : "Paper",
			"CostPrice" : 130,
			"country" : "South Africa",
			
		},
		{
			"id" : 3,
			"ProductName" : "A4-Paper",
			"CostPrice" : 120,
			"country" : "Shri Lanka",
		}
]

# get method to get the details 
@app.route('/ProductDetail', methods=['GET'])
def get_details():
    return jsonify({'tasks': ProductDetail})

#  To get the data of a perticular id
@app.route('/ProductDetail/<int:task_id>', methods=['GET'])
def get_detail(task_id):
    task = [task for task in ProductDetail if task['id'] == task_id]
    if len(task) == 0:
        abort(404)
    return jsonify({'task': task[0]})


# To post the data.
@app.route('/ProductDetail', methods=['POST'])
def create_newDetail():
    if not request.json or not 'country' in request.json:
        abort(400)
    newDetail = {
        'id': ProductDetail[-1]['id'] + 1,
        'ProductName': request.json['ProductName'],
        'CostPrice': request.json['CostPrice'],
        'country' : request.json['country']
    }
    ProductDetail.append(newDetail)
    return jsonify({'ProductDetail': newDetail}), 201


# 
@app.route('/ProductDetail/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    task = [task for task in ProductDetail if task['id'] == task_id]
    if len(task) == 0:
        abort(404)
    if not request.json:
        abort(400)
    if 'ProductDetail' in request.json and type(request.json['ProductDetail']) != unicode:
        abort(400)
    if 'CostPrice' in request.json and type(request.json['CostPrice']) is not int:
        abort(400)
    if 'country' in request.json and type(request.json['country']) is not unicode:
        abort(400)
    task[0]['ProductName'] = request.json.get('ProductName', task[0]['ProductName'])
    task[0]['CostPrice'] = request.json.get('CostPrice', task[0]['CostPrice'])
    task[0]['country'] = request.json.get('country', task[0]['country'])
    return jsonify({'task': task[0]})


@app.route('/ProductDetail/<int:task_id>', methods=['DELETE'])
def delete_detail(task_id):
    task = [task for task in ProductDetail if task['id'] == task_id]
    if len(task) == 0:
        abort(404)
    ProductDetail.remove(task[0])
    return jsonify({'result': True})

if __name__ == '__main__':
    app.run(debug=True)