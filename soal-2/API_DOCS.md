
# API Documentation

## Endpoints:
List of available endpoints:
1. `POST /register`
2. `POST /login`

## 1. POST /register
Request:
- body
```json
{
    "email": "edu@mail.co",
    "password": "12345",
    "username": "eduedu",
}
```
_Response (201 - Created):_
```json
{
    "user": {
        "id": 6,
        "username": "eduedu",
        "email": "edu@mail.co",
        "password": "$2a$10$oEB/0yI8Pmd9tSThkLI52.RWwAxtTl3/5py2YI.UCOCioR7N7MiYe",
        "updatedAt": "2023-01-29T12:20:22.501Z",
        "createdAt": "2023-01-29T12:20:22.501Z",
    }
}
```
 _Response (400 - Bad Request):_
```json
{
    "errorsMessages": [
        {
            "message": "User's email must be unique"
        },
        // OR
        {
            "message": "Please insert user's e-mail"
        },
        // OR
        {
            "message": "Please insert user's NIM"
        },
        // OR
        {
            "message": "Please insert user's major"
        },
        // OR
        {
            "message": "Please insert user's name"
        },
        // OR
        {
            "message": "Please insert user's password"
        },
        // OR
        {
            "message": "Minimal length for user's password is 5 character"
        },
        // OR
        {
            "message": "Please insert e-mail format"
        }
    ]
}
```

## 2. POST /login
Request:
- body
```json
{
    "email": "edu@mail.co",
    "password": "12345"
}
```

_Response (200 - OK):_
```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJlZHVAbWFpbC5jbyIsImlhdCI6MTY3NDk5NDk1NH0.uH5vq9MD3_W0bzuT0Dv-XIH_MUCsJ_BE3LU0u4fer-E",
    "id": 6,
    "username": "eduedu"
}
```
_Response (401 - Unauthorized):_
```json
{
    "message": "Error invalid username or email or password"
}
```
 _Response (500 - Internal Server Error):_
```json
{

    "message": "Interval server error"
}

```


Need Authentication:
_Request headers:_
```json
{
    "access_token": {access_token}
}
```
1. `POST /courses`
2. `GET /courses`
3. `GET /courses/:courseId`
4. `DELETE /courses/:courseId`
5. `PUT /courses/:courseId`
6. `GET /students`
7. `POST /students`
8. `GET /students/list-course`
9. `POST /students/list-course/:studentId`
10. `GET /students/:studentId`
11. `PUT /students/:studentId`
12. `DELETE /students/:studentId`

## 1. POST /courses
Request:
- body:
```json
{
    "name": "Course 1",
    "code": "CC11",
    "credit": 2
}
```
_Response (201 - Created):_
```json
{
    "id": 5,
    "name": "Course 1",
    "code": "CC11",
    "credit": 2,
    "createdAt": "2023-04-01T13:11:17.902Z",
    "updatedAt": "2023-04-01T13:11:17.902Z"
}
```
 _Response (400 - Bad Request):_
```json
{
    "errorsMessages": [
        {
            "message": "Please insert course's name"
        },
        // OR
        {
            "message": "Please insert course's code"
        },
        // OR
        {
            "message": "Please insert course's credit"
        }
    ]
}
```

## 2. GET /courses
_Response (200 - OK):_
```json
[
    {
        "id": 1,
        "name": "Course edit",
        "code": "C1",
        "credit": 3,
        "createdAt": "2023-03-29T12:26:25.901Z",
        "updatedAt": "2023-03-29T12:35:28.312Z"
    },
    {
        "id": 2,
        "name": "Course 1",
        "code": "CC11",
        "credit": 2,
        "createdAt": "2023-03-29T12:36:02.018Z",
        "updatedAt": "2023-03-29T12:36:02.018Z"
    }
    ...,
]
```

## 3. GET /courses/:courseId
_Request_
- params:
```json
{
    "courseId": 2
}
```
_Response (200 - OK):_
```json
{
    "id": 2,
    "name": "Course 1",
    "code": "CC11",
    "credit": 2,
    "createdAt": "2023-03-29T12:36:02.018Z",
    "updatedAt": "2023-03-29T12:36:02.018Z"
}
```
_Response (404 - Not Found)_
```json
{
    "message": "Course not found"
}
```

## 4. DELETE /courses/:courseId
_Request_
- params:
```json
{
    "id": 3
}
```
_Response (200 - OK):_
```json
{
    "message": "Course's data deleted successfully"
}
```
_Response (404 - Not Found)_
```json
{
    "message": "Course not found"
}
```

## 5. PUT /courses/:courseId
_Request_
- params
- body

Params:
```json
{
    "id": 1
}
```
Body:
```json
{
    "name": "Nama Makanan",
    "description": "Deskripsi Makanan",
    "price": 20000,
    "imgUrl": "https://www.food.com",
    "authorId": 1,
    "categoryId": 1
}
```

_Response (200 - OK):_
```json
{
    "message": "Course's data updated successfully."
}
```

_Response (404 - Not Found):_
```json
{
    "message": "Course not found"
}
```

## 6. GET /students
_Response (200 - OK):_
```json
[
    {
        "id": 1,
        "name": "Student 1 edit",
        "email": "student@mail.com",
        "password": "$2a$10$17/tdKPFdRJJSn2PDmdBN.akSNe2lgJt2F2/jMu9vm31uetSfOqk.",
        "NIM": "12345",
        "major": "physics",
        "StudentCourses": [
            {
                "CourseId": 1,
                "Course": {
                    "id": 1,
                    "name": "Course edit",
                    "code": "C1",
                    "credit": 3
                }
            },
            {
                "CourseId": 2,
                "Course": {
                    "id": 2,
                    "name": "Course 1",
                    "code": "CC11",
                    "credit": 2
                }
            }
        ]
    }
    ...,
]
```

## 7. POST /students
_Request body:_
```json
{
    "name": "Student 2",
    "email": "student2@mail.com",
    "password": "12345",
    "NIM": "12345",
    "major": "physics"
}
```
_Response (201 - Created ):_
```json
{
    "id": 4,
    "name": "Student 2",
    "email": "student2@mail.com",
    "password": "$2a$10$7lMH2dCHheBGUuI4IuurPesGZueS24QWLo11vznM3n6jfVj8DLuDK",
    "NIM": "12345",
    "major": "physics",
    "createdAt": "2023-04-01T13:41:08.128Z",
    "updatedAt": "2023-04-01T13:41:08.128Z"
}
```
 _Response (400 - Bad Request):_
```json
{
    "errorsMessages": [
        {
            "message": "Student's email must be unique"
        },
        // OR
        {
            "message": "Please insert student's e-mail"
        },
        // OR
        {
            "message": "Please insert student's NIM"
        },
        // OR
        {
            "message": "Please insert student's major"
        },
        // OR
        {
            "message": "Please insert student's name"
        },
        // OR
        {
            "message": "Please insert student's password"
        },
        // OR
        {
            "message": "Minimal length for student's password is 5 character"
        },
        // OR
        {
            "message": "Please insert e-mail format"
        }
    ]
}
```

## 8. GET /students/list-course
_Response (200 - OK):_
```json
[
    {
        "id": 1,
        "StudentId": 1,
        "CourseId": 1,
        "createdAt": "2023-03-30T06:10:09.251Z",
        "updatedAt": "2023-03-30T06:10:09.251Z",
        "Student": {
            "id": 1,
            "name": "Student 1 edit",
            "email": "student@mail.com",
            "password": "$2a$10$17/tdKPFdRJJSn2PDmdBN.akSNe2lgJt2F2/jMu9vm31uetSfOqk.",
            "NIM": "12345",
            "major": "physics",
            "createdAt": "2023-03-29T10:24:02.377Z",
            "updatedAt": "2023-03-29T10:24:06.346Z"
        },
        "Course": {
            "id": 1,
            "name": "Course edit",
            "code": "C1",
            "credit": 3,
            "createdAt": "2023-03-29T12:26:25.901Z",
            "updatedAt": "2023-04-01T13:16:01.719Z"
        }
    }
    ...,
]
```

## 9. POST /students/list-course/:courseId
_Request params:_
```json
{
    "courseId": 1
}
```
_Response (201 - Created):_
```json
{
    "id": 5,
    "StudentId": 1,
    "CourseId": 1,
    "updatedAt": "2023-04-01T14:00:19.998Z",
    "createdAt": "2023-04-01T14:00:19.998Z"
}
```

## 10. GET /students/:studentId
_Request params:_
```json
{
    "studentId": 1
}
```
_Response (200 - OK):_
```json
{
    "id": 1,
    "name": "Student 1 edit",
    "email": "student@mail.com",
    "password": "$2a$10$17/tdKPFdRJJSn2PDmdBN.akSNe2lgJt2F2/jMu9vm31uetSfOqk.",
    "NIM": "12345",
    "major": "physics",
    "createdAt": "2023-03-29T10:24:02.377Z",
    "updatedAt": "2023-03-29T10:24:06.346Z",
    "StudentCourses": [
        {
            "id": 1,
            "StudentId": 1,
            "CourseId": 1,
            "createdAt": "2023-03-30T06:10:09.251Z",
            "updatedAt": "2023-03-30T06:10:09.251Z",
            "Course": {
                "id": 1,
                "name": "Course edit",
                "code": "C1",
                "credit": 3,
                "createdAt": "2023-03-29T12:26:25.901Z",
                "updatedAt": "2023-04-01T13:16:01.719Z"
            }
        }
        ...,
    ]
}
```
_Response (404 - Not Found)_
```json
{
    "message": "Student not found"
}

```
## 11. PUT /students/:studentId
_Request params:_
```json
{
    "studentId": 1
}
```
_Request body:_
```json
{
    "name": "Student 1 edit",
    "email": "student@mail.com",
    "password": "12345",
    "NIM": "12345",
    "major": "physics"
}
```
_Response (200 - OK):_
```json
{
    "message": "Student's data updated successfully"
}
```
_Response (404 - Not Found)_
```json
{
    "message": "Student not found"
}

```

## 12. DELETE /students/:studentId
_Request params:_
```json
{
    "studentId": 1
}
```
_Response (200 - OK):_
```json
{
    "message": "Student's data deleted successfully"
}
```
_Response (404 - Not Found)_
```json
{
    "message": "Student not found"
}

```

## Global Response

_Response (401 - Unauthorized):_
```json
{
    "message": "Please login first"
}
```
_Response (401 - Unauthorized):_
```json
{
    "message": "Invalid access token"
}
```

 _Response (500 - Internal Server Error):_
```json
{

    "message": "Interval server error"
}

```