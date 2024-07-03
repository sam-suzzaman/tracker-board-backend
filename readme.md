### Project Overview:

It is a backend API of a task management application. Here some api endpoints are created to implement task related CRUD operations in Task management application using expressJS.

### Run Project locally:

-   Clone repo: `git clone https://github.com/sam-suzzaman/tracker-board-backend.git`
-   Install Dependencies: `npm install`
-   Setup .env file:

    ```
    PORT=1111
    DB_PASSWORD =
    DB_USERNAME =
    DB_STRING=
    ```

-   Run application: `npm run dev`

### API Endpoints:

-   `GET https://tracker-board-backend.vercel.app/`: Base API Route
-   `GET /tasks`: Retrieve a list of tasks.
-   `GET /tasks/:id`: Retrieve a specific task by ID.
-   `POST /tasks`: Create a new task.
-   `PATCH /tasks/:id`: Update an existing task by ID.
-   `DELETE /tasks/:id`: Delete a task by ID.

### Used Technologies:

-   ExpressJS
-   Mongoose
-   MongoDB
-   Cors
-   Dotenv
