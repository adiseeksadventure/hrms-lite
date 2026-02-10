# HRMS Lite

HRMS Lite is a simple Human Resource Management System built using the MERN stack.  
I created this project to understand how a full stack application works end-to-end — from database design to backend APIs, frontend integration, and cloud deployment.

The system allows an admin to manage employees and track daily attendance through a clean and practical interface.

## Live Demo

Frontend: https://hrms-lite-sigma-two.vercel.app  
Backend:  https://hrms-lite-hn4f.onrender.com

## Why I Built This

I wanted to build something closer to a real-world internal tool instead of another static CRUD demo.  
This project helped me:

- Connect a React frontend with a Node + Mongo backend  
- Design proper REST APIs  
- Deploy a full application on cloud platforms  
- Handle real production issues like CORS and database access

The focus was on learning the complete lifecycle rather than adding too many features.

## Features

- Add new employees with validation  
- View all employees  
- Delete employees  
- Mark daily attendance (Present / Absent)  
- View attendance history by employee ID  
- Simple dashboard showing total employees  
- Clean and easy-to-use interface

## Tech Stack

Frontend  
- React.js  
- Axios  
- React Router  
- CSS

Backend  
- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  
- CORS

Deployment  
- Frontend – Vercel  
- Backend – Render  
- Database – MongoDB Atlas

## Project Structure

```text
hrms-lite
│
├── backend
│   ├── controllers
│   │   ├── employeeController.js
│   │   └── attendanceController.js
│   │
│   ├── models
│   │   ├── Employee.js
│   │   └── Attendance.js
│   │
│   ├── routes
│   │   ├── employeeRoutes.js
│   │   └── attendanceRoutes.js
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   │   ├── Employees.js
│   │   │   ├── AddEmployee.js
│   │   │   ├── Attendance.js
│   │   │   └── Dashboard.js
│   │   │
│   │   ├── services
│   │   │   └── api.js
│   │   │
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── package.json
│   └── .gitignore
│
└── README.md
```




## Setup Instructions

1. Clone the repository

git clone https://github.com/adiseeksadventure/hrms-lite.git
cd hrms-lite


2. Backend Setup

cd backend
npm install

Create a .env file:

MONGO_URI=your_mongodb_connection_string
PORT=5000

Run server:

npm start


3. Frontend Setup

cd frontend
npm install
npm start


4. API Endpoints

GET    /employees          - Get all employees  
POST   /employees          - Add employee  
DELETE /employees/:id      - Delete employee  
POST   /attendance         - Mark attendance  
GET    /attendance/:empId  - Get attendance


## Challenges Faced

- Connecting deployed frontend with backend due to CORS restrictions  
- MongoDB Atlas blocking Render until IP was whitelisted  
- Managing async API calls in React  
- Structuring the project cleanly between frontend and backend  
- Handling environment variables in production

## What I Learned

- Building REST APIs using Express and MongoDB  
- Connecting React with backend using Axios  
- Deploying Node apps on Render  
- Deploying React apps on Vercel  
- Debugging real deployment issues instead of localhost only

## Future Improvements

- Authentication and role-based access  
- Edit employee details  
- Attendance filters by date  
- Better dashboard analytics  
- Form validations with better UI feedback

## Author

Aditya  
Full Stack Developer  
Built for learning and portfolio purposes.

## License

This project is free to use for educational purposes.

