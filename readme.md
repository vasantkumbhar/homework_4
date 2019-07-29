1. To run plain text-server run below command,
	node plain-text-server.js
2. To run html-server run below command,
	node html-server.js
3. To run all Get and Post call please run below commands,
	npm start - command will execute below API

Get - 
	1. http://localhost:8000/api/products 
	2. http://localhost:8000/api/products/1 
	3. http://localhost:8000/api/products/1/reviews 
	4. http://localhost:8000/api/products/users 

POST - 

	http://localhost:8000/api/products
	
	Req body:
	{
		"name": "Shirt",
		"brand": "VP",
		"price": "100",
		"options": [
			{
			"color": "Red"
			},
			{
			"size": "L"
			}
		],
		"reviews": []
	}
	
