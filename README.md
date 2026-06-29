# 📋 Task Tracker

A full-stack Task Tracker application built with **Spring Boot**, **React**, and **SQLite**. The application provides an intuitive interface for managing tasks through a RESTful backend, supporting complete task management with filtering, sorting, pagination, and a responsive user interface.

---

## ✨ Features

- Create, view, update, and delete tasks (CRUD)
- Filter tasks by status and priority
- Sort tasks by due date
- Pagination support
- Form validation
- Global exception handling
- Responsive user interface

---

## 🛠️ Tech Stack

### Backend
- Java 21
- Spring Boot 3
- Spring Data JPA
- SQLite
- Maven

### Frontend
- React
- Vite
- Axios
- CSS3

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/harini07104/Task-Tracker.git
cd Task-Tracker
```

### Backend Setup

Install dependencies and build the project:

```bash
cd Backend
mvn clean install
```

Run the backend:

```bash
mvn spring-boot:run
```

Backend runs at:

```
http://localhost:8080
```

### Frontend Setup

Install dependencies:

```bash
cd Frontend
npm install
```

Run the frontend:

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 📡 REST API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Retrieve all tasks |
| GET | `/api/tasks/{id}` | Retrieve a task by ID |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/{id}` | Update an existing task |
| DELETE | `/api/tasks/{id}` | Delete a task |

---
