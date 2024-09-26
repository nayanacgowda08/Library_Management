# Library Management System

## Overview
The Library Management System is a web application built with React.js that allows users to manage library resources efficiently. Users can view, add, edit, and delete books, making it easy to keep track of the library's inventory.

 ##Features
- **Add Books**: Users can add new books with details such as title, ISBN, page count, and descriptions.
- **View Books**: Display a list of all books with options to view more details.
- **Delete Books**: Permanently delete books from the system.
- **Add Users**: Users can register with their personal details.
- **View Users**: List all registered users with their information.
- **Delete Users**: Remove users from the system, with the option to delete all users at once.
- **Admin Login**: A login system for administrators to access the management portal.
- **User Login**: A login system for Users to access.

## Usage
- **Admin Login**: Enter admin credentials (`admin@gmail.com` / `admin123`) to access the management portal.
- **Adding Books/Users**: Use the respective forms to input details for new books and users.
- **Viewing Details**: Click on a book to view its details, including a short and long description.
- **Deleting**: Confirm deletion of books and users through prompts.

## Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/nayanacgowda08/Library_Management.git
   
2. Navigate to the project directory:
   cd Library_Management

3. Dependencies

This project uses the following dependencies:

- `axios`: For making HTTP requests.
- `@mui/material`: For Material-UI components.
- `@mui/icons-material`: For Material-UI icons.
- `react`: The core React library.
- `react-dom`: For rendering React components.
- `react-router-dom`: For routing in the application.
- `vite`: A build tool that provides a fast development environment.

4. ## JSON Route
The Library Management System provides a JSON API for interacting with library data. The following endpoints are available:

### Endpoints

- **Get All Books**
  - **Route**: `/api/books`
  - **Method**: `GET`
  - **Description**: Retrieves a list of all books in the library.

- **Add a New Book**
  - **Route**: `/api/books`
  - **Method**: `POST`
  - **Description**: Adds a new book to the library.
  - **Request Body**: 
    ```json
    {
      "title": "Book Title",
      "isbn": "123456789",
      "pageCount": 300,
      "description": "A brief description of the book."
    }
    ```

- **Delete a Book**
  - **Route**: `/api/books/:id`
  - **Method**: `DELETE`
  - **Description**: Deletes a book from the library based on the provided book ID.

- **Get All Users**
  - **Route**: `/api/users`
  - **Method**: `GET`
  - **Description**: Retrieves a list of all registered users.

- **Add a New User**
  - **Route**: `/api/users`
  - **Method**: `POST`
  - **Description**: Adds a new user to the system.
  - **Request Body**: 
    ```json
    {
      "name": "User Name",
      "email": "user@example.com"
    }
    ```

- **Delete a User**
  - **Route**: `/api/users/:id`
  - **Method**: `DELETE`
  - **Description**: Deletes a user from the system based on the provided user ID.

### Example Usage
You can test the API endpoints using tools like Postman or by making fetch requests from your frontend application.

```javascript
// Example of fetching all books
fetch('/api/books')
  .then(response => response.json())
  .then(data => console.log(data));
Ensure your server is running to access the JSON API endpoints. The default server URL is http://localhost:3000.

5. ## Getting Started
After installing the dependencies, you can start the development server with the following command:
```bash
npm run dev









