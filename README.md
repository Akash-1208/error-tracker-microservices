# ⚙️ Track Error Microservices (Version 1)

This repository contains the **Backend (Spring Boot)** and **Frontend (React)** components of the Error Tracker project — a mini Sentry-like system for capturing and visualizing application exceptions.

It works together with the [Error Tracker SDK](https://github.com/Akash-1208/error-tracker-sdk).

---

## 🧩 Project Structure

| Folder | Description |
|---------|--------------|
| `backend/` | Spring Boot service for receiving and storing errors |
| `frontend/` | React dashboard for viewing and analyzing tracked errors |

---

## 🛠️ Setup Instructions

### 🧱 1. Backend (Spring Boot)

#### ➤ Navigate
```bash
cd backend
```
**Configure database (example for MongoDB)**

**Open application.properties and set:**
```properties
spring.data.mongodb.uri=mongodb://localhost:27017/error-tracker
server.port=8080
```

**Run the Service**
```bash
mvn spring-boot:run
```


### 💻 Frontend (React Dashboard)
#### ➤ Navigate

```bash
cd frontend
```

####Install dependencies
```bash
npm install
```

#### Run the dashboard
```bash
npm run dev
```
#### Frontend will start at http://localhost:5173

---

## 🧩📡 API Endpoints

| Method | Endpoint         | Description|
|-------|------------------|-------------|
| `POST` | /api/errors      |Ingest new error record (from SDK)|
| `GET` | /api/errors      |Fetch all tracked errors|
| `GET` | /api/errors/{id} |Fetch specific error details|

---
## 🔗 How It All Connects
1. SDK (used in client apps) captures exceptions automatically.

2. Backend Service receives these exceptions and saves them to MongoDB / Supabase.

3. React Dashboard fetches and displays them visually with filters and details.

---

## 🧩📡 API Endpoints

| Method | Endpoint         | Description|
|-------|------------------|-------------|
| `POST` | /api/errors      |Ingest new error record (from SDK)|
| `GET` | /api/errors      |Fetch all tracked errors|
| `GET` | /api/errors/{id} |Fetch specific error details|

---
## 🧱 Technologies Used
| Component | Stack                                |
| --------- | ------------------------------------ |
| Backend   | Java, Spring Boot, MongoDB, REST API |
| Frontend  | React JS, Axios, Chart.js            |
| SDK       | Java (AOP + HTTP client)             |


---


## 🚀 Version Roadmap
| Version | Description                                                      |
| ------- | ---------------------------------------------------------------- |
| **v1**  | Full setup – SDK + Spring Boot backend + React dashboard         |
| **v2**  | Replace backend with cloud ingestion (Supabase / Mongo Data API) |
| **v3**  | Embed React UI inside SDK for instant monitoring                 |


---
### 👨‍💻 Author

Akash Kanakari
Spring Boot Developer | Full-Stack Engineer
🔗 [LinkedIn](https://www.linkedin.com/in/kanakari-akash).
💻 [GitHub](https://github.com/Akash-1208).