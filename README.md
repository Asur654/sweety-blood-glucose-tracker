# Sweety – Blood Glucose Tracker (MERN + PostgreSQL)

Sweety is a web application designed for diabetes patients to record up to 4 blood glucose readings a day (`Morning (fasting)`, `After breakfast`, `After lunch`, `After dinner`) and view daily and monthly reports.

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL (with Sequelize ORM)
- **Frontend:** React (Vite), Tailwind CSS, Lucide Icons, Recharts
- **Authentication:** JWT (JSON Web Tokens), `bcryptjs`
- **Containerization:** Docker Compose for PostgreSQL

---

## 📁 Project Structure

```text
Assignment/
├── Assignment.pdf           # Assignment specifications
├── docker-compose.yml       # PostgreSQL container configuration
├── package.json             # Root scripts to orchestrate client & server
├── .gitignore
├── README.md
├── server/                  # Backend Express API
│   ├── .env.example
│   ├── package.json
│   └── src/
│       ├── app.js           # Express app instance and middleware
│       └── server.js        # Server entrypoint
└── client/                  # Frontend React (Vite)
    ├── .env.example
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    ├── index.html
    └── src/
        ├── App.jsx
        ├── index.css
        └── main.jsx
```

---

## 🚀 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (optional, for running PostgreSQL via Docker) or a local/cloud PostgreSQL instance

### 2. Install Dependencies
You can install dependencies for root, server, and client all at once:
```bash
npm run install:all
```
Or manually:
```bash
cd server && npm install
cd ../client && npm install
```

### 3. Start PostgreSQL
Using Docker Compose:
```bash
docker compose up -d
```
Or use your own local/cloud PostgreSQL connection and update `server/.env`.

### 4. Run the Development Servers
From the root directory:
```bash
npm run dev
```
- **Backend API:** [http://localhost:5000](http://localhost:5000) (Health check: `/api/health`)
- **Frontend App:** [http://localhost:3000](http://localhost:3000)

---

## 📦 Incremental Roadmap / Git Commits
- **Chunk 1: Project Setup & Architecture Configuration** (Current)
- **Chunk 2: PostgreSQL Connection, Models & Associations**
- **Chunk 3: Authentication API (Register & Login with JWT)**
- **Chunk 4: Readings CRUD API & Strict Business Validations**
- **Chunk 5: Reports API (Daily, Month-to-Date, Monthly)**
- **Chunk 6: Frontend Authentication & App Shell**
- **Chunk 7: Frontend Readings Management (Add, View, Edit, Delete)**
- **Chunk 8: Frontend Reports & Analytics with Charts**
- **Chunk 9: Tests, Demo Seed Script & Final Documentation**
