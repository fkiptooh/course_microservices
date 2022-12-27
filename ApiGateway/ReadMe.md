### End Points
#### Register Endpoint
````
POST /api/authentication/register HTTP/1.1
Host: localhost:3333
Content-Type: application/json
Content-Length: 83

{
    "name": "Caren Chepptoo",
    "username":"Ccheptooh",
    "password":"1234"
}
````

#### Login Endpoint
````
POST /api/authentication/login HTTP/1.1
Host: localhost:3333
Content-Type: application/json
Content-Length: 52

{
    "username":"Ccheptooh",
    "password":"1234"
}
````