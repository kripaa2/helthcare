# HealthTech Prescription Management System

## Overview

This project is a backend-driven HealthTech Prescription Management System developed using:

- Node.js
- Express.js
- SQLite3

The application follows the MVC (Model-View-Controller) architecture and implements secure authentication and role-based authorization for doctors and patients.

---

# Features

## Doctor

- Secure Login
- Create Prescriptions
- Update Prescriptions
- View Own Prescriptions

## Patient

- Register/Login
- View Assigned Prescriptions
- Secure Access to Records

---

# Technologies Used

- Node.js
- Express.js
- SQLite3
- JWT Authentication
- bcryptjs
- MVC Architecture

---

# Folder Structure

```txt
healthtech-prescription-system/
│
├── config/
├── controllers/
├── models/
├── routes/
├── middleware/
├── database/
├── screenshots/
├── app.js
├── package.json
├── .env.example
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/kripaa2/helthcare.git
```

## Install Dependencies

```bash
npm install
```

## Run Server

```bash
node app.js
```

---

# Environment Variables

Create `.env` file:

```env
PORT=5000
JWT_SECRET=your_secret_key
```

---

# API Endpoints

## Authentication

### Register

```http
POST /api/auth/register
```

### Login

```http
POST /api/auth/login
```

---

## Prescriptions

### Create Prescription

```http
POST /api/prescriptions
```

### Update Prescription

```http
PUT /api/prescriptions/:id
```

### Doctor Prescriptions

```http
GET /api/prescriptions/doctor
```

### Patient Prescriptions

```http
GET /api/prescriptions/patient
```

---

# Security Features

- JWT Authentication
- Role-Based Authorization
- Password Hashing
- Protected Routes
- Secure Patient Access

---

# Database

SQLite3 database with:

- users table
- prescriptions table

---

# Screenshots Included

- Register API
- Login API
- Doctor Create Prescription
- Patient Access Restriction
- Doctor View Prescriptions
- Patient View Prescriptions
- Database Tables
- Project Structure

---

# Author

Kripa
