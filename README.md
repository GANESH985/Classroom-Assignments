## Install all resources install packeages using the package.json
## Here are the sample input values for each API 

## 1. POST /api/auth/login:
Purpose: Mock authentication service, returns JWT.
Sample Input:
{
  "username": "teacher1",
  "password": "password123"
}
Sample Response:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
## 2. POST /api/assignments:
Purpose: Create a new assignment.
Headers:
Authorization: Bearer <JWT_TOKEN>
Sample Input:
{
  "title": "Math Assignment 1",
  "description": "Solve the algebra problems.",
  "dueDate": "2024-08-15T23:59:59.000Z",
  "teacherId": 1
}
Sample Response:
{
  "id": 1,
  "title": "Math Assignment 1",
  "description": "Solve the algebra problems.",
  "dueDate": "2024-08-15T23:59:59.000Z",
  "teacherId": 1,
  "createdAt": "2024-08-11T12:00:00.000Z",
  "updatedAt": "2024-08-11T12:00:00.000Z"
}
 ## 3. GET /api/assignments:
Purpose: Retrieve all assignments.
Headers:
Authorization: Bearer <JWT_TOKEN>
Sample Input:
Query Parameters (Optional):
title (e.g., title=Math Assignment 1)
teacherId (e.g., teacherId=1)
Sample Response:
[
  {
    "id": 1,
    "title": "Math Assignment 1",
    "description": "Solve the algebra problems.",
    "dueDate": "2024-08-15T23:59:59.000Z",
    "teacherId": 1,
    "createdAt": "2024-08-11T12:00:00.000Z",
    "updatedAt": "2024-08-11T12:00:00.000Z"
  }
]
## 4. PUT /api/assignments/:id:
Purpose: Update an existing assignment.
Headers:
Authorization: Bearer <JWT_TOKEN>
Sample Input:
URL Parameter:
:id: 1
Body:
{
  "title": "Math Assignment 1 - Updated",
  "description": "Solve the updated algebra problems.",
  "dueDate": "2024-08-20T23:59:59.000Z"
}
Sample Response:
{
  "message": "Assignment updated successfully."
}
## 5. DELETE /api/assignments/:id:
Purpose: Delete an assignment.
Headers:
Authorization: Bearer <JWT_TOKEN>
Sample Input:
URL Parameter:
:id: 1
Sample Response:
Status: 204 No Content