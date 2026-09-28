# Hostel Room Allocation System

A real-time Hostel Room Allocation System built using HTML, CSS, JavaScript, and Firebase. This application digitizes hostel room management by allowing administrators to manage student records, allocate rooms based on availability, and monitor hostel occupancy through a centralized database.

## Project Overview

The Hostel Room Allocation System is a web-based application designed to simplify and automate hostel room allocation. Instead of maintaining manual records, the system securely stores student and room information in Firebase Realtime Database and provides real-time updates for room availability and allocations.

This project is developed as a Database Management System (DBMS) application with a simple, responsive, and user-friendly interface.

## Features

### Student Management

* Student registration and profile management.

* Store student details securely in Firebase.

* Search students using ID or name.

### Room Management

* Add and manage hostel rooms.

* Track room capacity and occupancy.

* Display available and occupied rooms in real time.

### Room Allocation

* Allocate rooms based on availability.

* Prevent over-allocation beyond room capacity.

* Reallocate or remove room assignments when needed.

### Authentication

* Secure admin login using Firebase Authentication.

* Restricted access to hostel management features.

### Real-Time Database

* Live synchronization of student and room data.

* Instant updates without refreshing the application.

## Tech Stack

### Frontend

* HTML5 – Structure and layout.

* CSS3 – Styling and responsive design.

* JavaScript (ES6) – Client-side functionality and Firebase integration.

### Backend

* Firebase Authentication – Secure user authentication.

* Firebase Realtime Database – Real-time data storage and synchronization.

### Database

- Firebase Realtime Database

### Hosting

- GitHub Pages

### Version Control

* Git

* GitHub

### IDE

- Visual Studio Code

## Project Structure

```
Hostel-Room-Allocation-System/
│
├── index.html              # Login page
├── dashboard.html          # Admin dashboard
├── students.html           # Student management
├── rooms.html              # Room management
├── allocation.html         # Room allocation page
│
├── css/
│   ├── style.css
│   └── dashboard.css
│
├── js/
│   ├── firebase-config.js
│   ├── auth.js
│   ├── students.js
│   ├── rooms.js
│   └── allocation.js
│
├── assets/
│   ├── images/
│   └── icons/
│
├── README.md
└── .gitignore
```

## Database Design

The application stores data in Firebase Realtime Database using the following collections:

|
Collection

|

Description

|
| --- | --- |
|

students

|

Student information such as ID, name, department, year, hostel, and room details.

|
|

rooms

|

Room number, hostel block, capacity, occupancy status, and availability.

|
|

allocations

|

Mapping between students and allocated rooms with allocation details.

|
|

admins

|

Authorized administrator information for managing the system.

|

## Application Workflow

1. Administrator logs in using Firebase Authentication.

2. Student details are added to the database.

3. Hostel rooms are created with capacity information.

4. The system checks room availability.

5. A room is allocated to a student.

6. Allocation and occupancy are updated instantly in Firebase Realtime Database.

7. Administrators can modify, reallocate, or remove room assignments.

## Installation & Setup

### 1. Clone the Repository

Bash

```
git clone https://github.com/your-username/hostel-room-allocation-system.git
cd hostel-room-allocation-system
```

### 2. Create a Firebase Project

* Create a project in Firebase Console.

* Enable Authentication (Email/Password).

* Enable Realtime Database.

* Copy the Firebase configuration.

### 3. Configure Firebase

Create `firebase-config.js` and add your Firebase credentials.

JavaScript

```
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
```

### 4. Run the Project

Open the project in Visual Studio Code and run it using Live Server or deploy it to GitHub Pages.

## Future Enhancements

* Student login portal.

* Hostel fee payment integration.

* Room change request and approval system.

* QR code-based hostel entry.

* Email or SMS notifications for room allocation.

* Analytics dashboard for hostel occupancy.

## Learning Outcomes

This project demonstrates:

* Database design using Firebase Realtime Database.

* Authentication using Firebase Authentication.

* CRUD operations with JavaScript and Firebase.

* Real-time data synchronization.

* Version control and collaborative development using Git and GitHub.

## Team Project

Developed as a DBMS Real-Time Application for academic purposes using Firebase, GitHub, and Visual Studio Code for collaborative development and deployment.
