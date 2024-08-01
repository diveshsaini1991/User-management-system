
# User Management Website 📊👥💻

A simple user management website built using Node.js, Express.js, and MongoDB. The website provides basic CRUD (Create, Read, Update, Delete) operations for managing user data.





## Features

- Create new users
- Read and display all users
- Update existing user information
- Delete users


## Technical Details

**Frontend:** EJS (Embedded JavaScript) templates

**Backend:** Node.js with Express.js framework

**Database:** MongoDB

**APIs:** RESTful APIs for CRUD operations

**Testing:**  APIs tested using Postman
## API Endpoints


#### Get all Users

```http
  GET /api/user
```

#### Get user

```http
  GET /api/user/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |


#### Create a new user

```http
  POST /api/user
```

#### Update a existing user

```http
  PUT /api/user/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to update |

#### Delete a user

```http
  DELETE /api/user/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to delete |




## Run Locally

Clone the project

```bash
  git clone https://github.com/diveshsaini1991/User-management-system
```

Go to the project directory

```bash
  cd User-management-system
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Environment Variables


```dotenv
PORT=3001
MONGO_URI=YOUR_MONGODB_URI
```


# Contributing to the eCommerce Platform Project🤝

We welcome and appreciate contributions from the community to enhance and improve the eCommerce Platform Project. Whether you're a developer, designer, tester, or someone with valuable feedback, your input is valuable.
## Thank You!❤️

Thank you for considering contributing to the User Management Project. Your efforts help make this project better for everyone. If you have any questions or need assistance, feel free to reach out through the issue tracker or discussions. Happy coding🤩!
