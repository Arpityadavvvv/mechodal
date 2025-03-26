# Mechodal Signup & Login System

## Overview
This project is a simple signup and login system built using the MERN stack (MongoDB, Express, React, and Node.js). Users can sign up, log in, and view their dashboard after successful authentication.

## Features
- User registration with name, mobile number, and gender
- Login with mobile number and name verification
- Dashboard that displays the logged-in user's name
- Frontend hosted on **Vercel**
- Backend hosted on **Render**
- MongoDB Atlas used as the database

## Technologies Used
### Frontend (React)
- React.js
- React Router DOM
- Axios
- Tailwind CSS
- Vercel for deployment

### Backend (Node.js & Express)
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS
- Body-parser
- Render for deployment

## Setup Instructions
### 1. Clone the Repository
```sh
git clone https://github.com/your-username/mechodal-project.git
cd mechodal-project
```

### 2. Backend Setup
#### Environment Variables
Create a `.env` file in the `backend` folder and add:
```sh
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
```
#### Install Dependencies & Start Server
```sh
cd backend
npm install
npm start
```
_Backend is deployed on Render, update the frontend API requests accordingly._

### 3. Frontend Setup
#### Install Dependencies & Start Frontend
```sh
cd frontend
npm install
npm run dev
```
#### Update API URL
Replace `http://localhost:5000` in API calls with the deployed Render backend URL.

### 4. Deployment Links
- **Frontend (Vercel):** [Live Here]https://mechodaltech.vercel.app/
-

## Usage
1. Open the frontend link.
2. Sign up with your details.
3. Log in using the registered name and mobile number.
4. Redirected to the dashboard displaying your name.



