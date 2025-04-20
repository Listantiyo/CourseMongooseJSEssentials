# CourseMongooseJSEssentials

## Description
( DONE ) Learn how to create Mongoose Schemas to build a full CRUD application based on the MongoDB database design.

## Technology
- **Node.js**

## Libraries
- **mongoose**
- **express**
- **body-parser**

## GitHub Repository
[CourseMongooseJSEssentials](https://github.com/username/CourseMongooseJSEssentials)  <!-- Gantilah 'username' dengan nama pengguna GitHub Anda -->

## To-Do

### To-Do 1
- Make DB connection.
- Make DB Schema: 
  - **Book** { 
    - title, 
    - author, 
    - category 
  }
- Insert 3 book documents.
- Create route using Express.
- Get all books and show in browser.
- Find book by ID and show in browser.

### To-Do 2
- Create insert new document using POST method.
- Use body-parser to parse request body to an object.
  - In the latest Express, body-parser is included by default.
- In the video, two ways to insert a new document are explained:
  1. Using new Model and `save()`.
     - When using this, need to define every property before save.
  2. Using available model and method `create`.
     - With this, can directly pass the body request into the `create` method.

### To-Do 3
- Create find and update operation using Instance Model.
- Create find and delete operation using Instance Model.
  - When updating, pass 3 parameters: `{query, set, options}`.
  - When deleting, pass 1 parameter: `query`.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/username/CourseMongooseJSEssentials.git