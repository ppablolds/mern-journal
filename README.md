# Breaking news API Documentation

### Overview
The Blog Notice API is a RESTful API that allows users to create, read, update, and delete blog notices using the Model-View-Controller (MVC) design pattern and CRUD (Create, Read, Update, Delete) operations.

### API Endpoints
1. Create Blog Notice <br />
POST /notices <br />
- Request Body: <br />
  - title: string (required) <br />
  - content: string (required) <br />
  - author: string (optional) <br />
  
- Response: <br />
  - id: integer (unique identifier for the notice) <br />
  - title: string <br />
  - content: string <br />
  - author: string <br />
  - created_at: datetime <br />

2. Read Blog Notice <br />
GET /notices/{id} <br />
- Path Parameters: <br />
  - id: integer (required) <br />
  
- Response: <br />
  - id: integer <br />
  - title: string <br />
  -content: string <br />
  -author: string <br />
  -created_at: datetime <br />

3. Update Blog Notice <br />
PUT /notices/{id} <br />
- Path Parameters: <br />
  - id: integer (required) <br />
  
- Request Body: <br />
  - title: string (optional) <br />
  - content: string (optional) <br />
  - author: string (optional) <br />
  
- Response: <br />
  - id: integer <br />
  - title: string <br />
  - content: string <br />
  - author: string <br />
  - updated_at: datetime <br />

4. Delete Blog Notice <br />
DELETE /notices/{id} <br />
- Path Parameters: <br />
  - id: integer (required) <br />
  
- Response: <br />
  - message: string <br />

<hr />

## MVC Design Pattern
The Blog Notice API uses the MVC design pattern to separate concerns and promote maintainability.

- Model: The Notice model represents a single blog notice and is responsible for storing and retrieving data from the database.
- View: The NoticeController handles incoming requests and returns responses to the client.
- Controller: The NoticeService encapsulates the business logic for creating, reading, updating, and deleting blog notices.

<hr />

## CRUD Operations
The Blog Notice API supports the following CRUD operations:

- Create: Create a new blog notice.
- Read: Retrieve a single blog notice by ID.
- Update: Update an existing blog notice.
- Delete: Delete a blog notice by ID.

<hr />

## Error Handling

Common error codes include:

- 200:	OK
- 201: Created
- 401: Unauthorized
- 404: Not found
- 500: Internal server error

## link do Projeto funcionando
## https://mern-journal-9t10.onrender.com/doc
