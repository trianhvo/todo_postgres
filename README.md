# Backend Todo App

This is a backend application for a Todo app built using Express.js, PostgreSQL, and Docker. It provides a REST API for managing todos.

## Project Structure

The project has the following file structure:

- `src/app.js`: Entry point of the application. Sets up the Express app and middleware.
- `src/controllers/todoController.js`: Controller for handling todo-related requests.
- `src/services/todoService.js`: Service for interacting with the database and performing CRUD operations on todos.
- `src/models/todoModel.js`: Model representing the todo entity.
- `src/routes/todoRoutes.js`: Routes for the todo API.
- `src/config/database.js`: Configuration file for connecting to the PostgreSQL database.
- `Dockerfile`: Dockerfile for building the Docker image.
- `package.json`: Configuration file for npm.
- `README.md`: Documentation for the project.

## Usage

To run the application, follow these steps:

1. Install the dependencies by running `npm install`.
2. Set up the PostgreSQL database and update the `src/config/database.js` file with the appropriate credentials.
3. Start the application by running `npm start`.

## API Endpoints

The following API endpoints are available:

- `GET /todos`: Retrieves all todos.
- `GET /todos/:id`: Retrieves a specific todo by its ID.
- `POST /todos`: Creates a new todo.
- `PUT /todos/:id`: Updates an existing todo.
- `DELETE /todos/:id`: Deletes a todo.

## Docker

To build a Docker image for the application, use the provided Dockerfile. Run the following command in the project root directory:

```
docker build -t backend-todo-app .
```

This will build the Docker image with the tag `backend-todo-app`. You can then run the image using the following command:

```
docker run -p 3000:3000 backend-todo-app
```

This will start the application inside a Docker container and map port 3000 of the container to port 3000 of the host machine.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.