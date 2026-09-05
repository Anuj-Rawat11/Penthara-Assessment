`Task Tracker`

A full-stack MERN Task Tracker application with a React frontend and an Express/MongoDB backend. The application is organized into two main directories:

`frontend` – React application built with Vite and styled with Tailwind CSS.

`backend` – Express.js server with MongoDB integration using Mongoose.

`Tech Stack`

`Frontend`

React 19

Vite

Tailwind CSS

Axios – HTTP requests

React Toastify – Notifications

`Backend`

Node.js

Express.js

MongoDB

Mongoose

CORS

dotenv – Environment variable management

`Project Structure`

TaskTracker/
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── db.js
│   ├── index.js
│   ├── package.json
│   └── .env
│
└── README.md

The exact backend folder structure may vary depending on how the application is organized.

Prerequisites

Before running the project, make sure you have:

Node.js installed.

npm installed (included with Node.js).

A MongoDB database, such as MongoDB Atlas or a local MongoDB server.

Git, if you want to clone the project from GitHub.

You can verify Node.js and npm with:

node -v
npm -v

Installation

1. Clone the repository

2. Install frontend dependencies

Open a terminal in the project root and run:

cd frontend
npm install

3. Install backend dependencies

Open another terminal or return to the project root:

cd ../backend
npm install

Environment Variables

The backend uses dotenv to load environment variables.

Create a .env file inside the backend directory:

MONGO_URI=your_mongodb_connection_string
PORT=5000

Replace your_mongodb_connection_string with your MongoDB connection string.

For example:

MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>
PORT=5000

Do not commit your .env file to GitHub. Add .env to your .gitignore.

Running the Application

Because the frontend and backend are separate applications, run them independently.

Start the backend

From the backend directory:

npm start

If your backend package.json does not yet contain a start script, you can run the server directly, depending on your entry file:

node index.js

For development, you can add a start script to backend/package.json, for example:

"scripts": {
  "start": "node index.js"
}

Then use:

npm start

The backend will run on the port configured in your application, commonly:

http://localhost:5000

Start the frontend

From the frontend directory:

npm run dev

Vite will display the local development URL, commonly:

http://localhost:5173

Open that URL in your browser.

Usage

After starting both the frontend and backend:

Open the frontend URL in your browser.

Create a new task.

View the task in the task list.

Mark tasks as completed or incomplete.

Edit existing tasks when needed.

Delete tasks that are no longer required.

Use the application's notifications to receive feedback about task operations.

The React frontend communicates with the Express backend through HTTP API requests using Axios. The backend handles task-related operations and stores task data in MongoDB through Mongoose.

Frontend Commands

From the frontend directory:

Command

Description

npm install

Install dependencies

npm run dev

Start the Vite development server

npm run build

Create a production build

npm run preview

Preview the production build

npm run lint

Run ESLint

Backend Commands

From the backend directory:

Command

Description

npm install

Install dependencies

npm start

Start the Express server, if the start script is configured

node index.js

Start the server directly using the default entry file

API and Database

The backend is responsible for:

Connecting to MongoDB using Mongoose.

Providing REST API endpoints for task operations.

Handling requests from the React frontend.

Enabling cross-origin requests through CORS.

Loading configuration values from .env using dotenv.

The frontend uses Axios to communicate with these backend endpoints.

Production Build

To create a production build of the frontend:

cd frontend
npm run build

The generated production files will be placed in the Vite dist directory.

For production deployment, configure the frontend API URL and backend deployment environment according to the hosting platforms you choose.

Troubleshooting

MongoDB connection error

Check that:

MONGO_URI is correctly defined in backend/.env.

Your MongoDB server or MongoDB Atlas cluster is running.

Your MongoDB Atlas network access settings allow the connection.

Your database credentials are correct.

Frontend cannot connect to backend

Check that:

The backend server is running.

The frontend is using the correct backend API URL and port.

CORS is configured correctly on the backend.

Dependencies are missing

Run:

npm install

inside both frontend and backend.

Git and GitHub

The frontend and backend are part of the same project repository. Changes from both directories can be committed from the project root:

git add .
git commit -m "Update task tracker"
git push

Make sure sensitive files such as .env and dependency folders such as node_modules are excluded through .gitignore.

License

This project is currently not published under a specific open-source license.