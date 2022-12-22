### Course Microservice
#### Get All Courses Endpoints
##### Get Courses
````agsl
GET /api/course HTTP/1.1
Host: localhost:3331
Authorization: Basic dXNlcjoxMjM0
Content-Type: application/json
Content-Length: 76
````

##### Save Course
````
POST /api/course HTTP/1.1
Host: localhost:3331
Authorization: Basic dXNlcjoxMjM0
Content-Type: application/json
Content-Length: 76

{
    "title": "test2",
    "subtitle": "test-2-course",
    "price": 1050
}
````
##### Delete Course
````agsl
DELETE /api/course/2 HTTP/1.1
Host: localhost:3331
Authorization: Basic dXNlcjoxMjM0
Content-Type: application/json
Content-Length: 76
````