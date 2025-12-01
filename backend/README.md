# 101487075_COMP3123_Assignment1
Student Name:- Sana Karnelia
Student id:- 101487075

Employee Management REST API (Assignment 1)

This project is a simple RESTful API built using Node.js, Express.js, and MongoDB Atlas.
It supports User Authentication (Signup/Login) and Employee Management (CRUD operations).
--> User Management

POST /api/v1/user/signup → Register a new user

POST /api/v1/user/login → Authenticate a user using email and password

--> Employee Management

GET /api/v1/emp/employees → Fetch all employee records

POST /api/v1/emp/employees → Add a new employee

GET /api/v1/emp/employees/:eid → Retrieve employee details by ID

PUT /api/v1/emp/employees/:eid → Update employee information

DELETE /api/v1/emp/employees?eid= → Remove an employee by ID

All API requests and responses are handled in JSON format.

-- git clone https://github.com/sanakarnelia/101487075_COMP3123_Assignment1.git

-- cd 101487402_COMP3123_Assignment1

//install

-- npm install express mongoose bcryptjs cors express-validator

-- node server.js