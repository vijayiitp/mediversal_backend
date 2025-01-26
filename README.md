# Mediversal Backend

## Preview

![Users List](https://res.cloudinary.com/djaibwcod/image/upload/v1737918083/4e4cae1d-7bba-4148-9e15-1c5164850418.png)

## Introduction
Mediversal Backend is the server-side application that powers the Mediversal platform, which helps in managing medical records, appointments, and user authentication. This backend is built using Node.js, Express, and MongoDB.

## Features
- User sign-up functionality
- Fetching a list of users

## Installation

### Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (or use a cloud database like MongoDB Atlas)

### Steps to Install
1. Clone the repository:
    ```bash
    git clone https://github.com/vijayiitp/mediversal_backend.git
    cd mediversal_backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root of the project and configure your environment variables:
    ```
    MONGO_URI=mongodb://localhost:27017/mediversal
    JWT_SECRET=your_secret_key
    ```

4. Start the server:
    ```bash
    npm start
    ```
    The server will run on [http://localhost:3000](http://localhost:3000).

---

## API Endpoints

### 1. User Signup

#### Endpoint: `POST /api/users/signup`
This endpoint allows users to sign up to the system. It handles the creation of a new user and stores the user's details in the MongoDB database. Proper validation of every field is included and finally we save the user data in our mongoDB . 


### 2. User List

#### Endpoint: `GET /api/users/signup`
This endpoint allows to get list of all users querying mongoDB.

