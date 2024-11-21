# User Authentication API Documentation

## Overview

This API allows users to register and log in to the system. The API is secured with `JWT (JSON Web Token)` for authentication.

## Base URL

`https://api.example.com`

all of responses will be using this data structure.

```json
{
  "code": 200,
  "message": "successful",
  "data": {}
}
```


## Authentication

The registration endpoint does not require authentication. The login endpoint returns a `JWT` token that must be included in the `Authorization` header for subsequent requests.

---

## Table of Contents

1. [User Login](#user-login)
2. [User Registration](#user-registration)


----

## 1、User Login

### Description

Log in system and receive a JWT token.

### Endpoint

`POST /auth/login`

### Request

- **Method**: `POST`
- **URL**: `https://api.example.com/auth/login`

### Headers

| Name           | Type   | Description         | Required |
|----------------|--------|---------------------|----------|
| `Content-Type` | String | `application/json`  | Yes      |

### Request Body


```json
{
  "phone": "0424245244",
  "password": "password123"
}
```


### API Response Body Schema

```json
{
  "code": 200,
  "message": "User registration successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 1,
      "username": "janedoe",
      "email": "janedoe@example.com",
      "isManager": false
    }
  }
}
```


以下表格描述了请求体中各个字段的结构和类型。

| Field                   | Type      | Description                                                   |
|-------------------------|-----------|---------------------------------------------------------------|
| `token`                 | `string`  | The JWT token to be used for authenticated requests.           |
| `user `                 | `object`  |                                                                |
| `user.id`      | `number` | The unique ID of the user.                         |
| `user.username`| `string` | The username of the authenticated user.           |
| `user.email`   | `string` | The email address of the authenticated user.       |
| `user.isManager` | `boolean` | Indicates if the user is a manager.           |



---

## 2、User Registration

### Description

Create a new user account.

### Endpoint

`POST /auth/register`

### Request

- **Method**: `POST`
- **URL**: `https://api.example.com/auth/register`

### Headers

| Name           | Type   | Description         | Required |
|----------------|--------|---------------------|----------|
| `Content-Type` | String | `application/json`  | Yes      |

### Request Body

#### if `isManager` is `true`, `propertyInfo` is required.

isManager is a boolean value that indicates whether the user is a property manager or not.

propertyInfo is an object that contains information about the user's property.
# API Request Body Schema

以下表格描述了请求体中各个字段的结构和类型。

| Field                    | Type      | Description                                                   |
|--------------------------|-----------|---------------------------------------------------------------|
| `username`               | `string`  | The username of the user.                                      |
| `email`                  | `string`  | The email address of the user.                                 |
| `password`               | `string`  | The password for the user account.                             |
| `isManager`              | `boolean` | Indicates if the user is a manager.                            |
| `propertyInfo`            | `object`  | Contains details about the user's property.                    |
| `propertyInfo.address`    | `string`  | The address of the property.                                   |
| `propertyInfo.city`       | `string`  | The city where the property is located.                        |
| `propertyInfo.state`      | `string`  | The state where the property is located (e.g., SA).            |
| `propertyInfo.propertyPhotos` | `array`   | A list of property photos (empty array in this example).        |
| `propertyInfo.devices`    | `array`   | A list of devices associated with the property.                |
| `propertyInfo.devices[index].type` | `string`  | The type of the device (e.g., TV, Laundry).                    |


```json
{
  "username": "johndoe",
  "email": "johndoe@example.com",
  "password": "password123",
  "isManager": true,
  "propertyInfo": {
    "address": "123 Main St",
    "code": 5000,
    "city": "Adelaide",
    "state": "SA",
    "propertyPhotos": [],
    // "deveices": Here is where we need to discuss what all the equipment has to be filled out
    "deveices": [
      {
        "type": "TV",
      },
      {
        "type": "Laundry",
      },
    ]
  }
}
```


### if `isManager` is `false`, `propertyInfo` is not required. But `tenantInfo` is required.

```json
{
  "username": "janedoe",
  "email": "janedoe@example.com",
  "password": "password123",
  "isManager": false,
  "tenantInfo": {
    "nation": "Australia",
    "gender": "Female",
    "phone": "123-456-7890",
    "occupation": "Teacher",
    "idCardPhoto": "",
    "facePhotos": [],
    "managerPhone": "1234567890"
  }
}
```

# API Request Body Schema

以下表格描述了请求体中各个字段的结构和类型。

| Field                   | Type      | Description                                                   |
|-------------------------|-----------|---------------------------------------------------------------|
| `username`              | `string`  | The username of the user.                                      |
| `email`                 | `string`  | The email address of the user.                                 |
| `password`              | `string`  | The password for the user account.                             |
| `isManager`             | `boolean` | Indicates if the user is a manager.                            |
| `tenantInfo`            | `object`  | Contains details about the tenant's information.               |
| `tenantInfo.nation`     | `string`  | The nationality of the tenant.                                 |
| `tenantInfo.gender`     | `string`  | The gender of the tenant.                                      |
| `tenantInfo.phone`      | `string`  | The phone number of the tenant.                                |
| `tenantInfo.occupation` | `string`  | The occupation of the tenant.                                  |
| `tenantInfo.idCardPhoto`| `string`  | A URL or path to the tenant's ID card photo.                   |
| `tenantInfo.facePhotos` | `array`   | A list of URLs or paths to the tenant's face photos.           |
| `tenantInfo.managerPhone` | `string`  | The ID of the manager associated with the tenant.             |



### Api Response

```json
{
  "code": 200,
  "message": "User registration successful",
  "data": {}
}
```


----------------


### 3、photos upload API

### Description
Upload  photos.


### Endpoint

`POST /upload`

### Request

- **Method**: `POST`
- **URL**: `https://api.example.com/upload`

### Headers

| Name           | Type   | Description         | Required |
|----------------|--------|---------------------|----------|
| `Content-Type` | String | `application/json`  | Yes      |


### Request params

```json
{
  "files": ''
}
```

### Request Body

```json
{
  "code": 200,
  "message": "Photos uploaded successfully",
  "data": {
    "url": "https://example.com/photo1.jpg",
  }
}
```

