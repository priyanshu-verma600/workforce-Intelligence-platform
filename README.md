# 🚀 Workforce Intelligence Platform

A full-stack Employee Management System (EMS) built using the MERN Stack that helps organizations manage employees, attendance, leave requests, payroll, and administrative operations through a secure and intuitive dashboard.

---

## 📌 Features

### 👨‍💼 Authentication & Authorization
- Secure JWT-based authentication
- Role-based access control (Admin & Employee)
- Password encryption using bcrypt
- Protected API routes

### 👥 Employee Management
- Add, update, and delete employees
- View employee profiles
- Manage employee information
- Role assignment

### 🕒 Attendance Management
- Daily attendance tracking
- Check-in & check-out records
- Attendance history
- Attendance dashboard

### 📝 Leave Management
- Apply for leave
- Leave approval/rejection by admin
- Leave status tracking
- Leave history

### 💰 Payroll Management
- Generate payslips
- Salary management
- Employee payroll history

### 📊 Dashboard
- Employee statistics
- Attendance overview
- Leave analytics
- Quick insights for administrators

### 📧 Email Notifications
- SMTP integration using Brevo
- Email notifications for important events

### ⚡ Background Jobs
- Inngest integration for background tasks
- Scheduled jobs and event-driven workflows

---

# 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication
- JWT (JSON Web Token)
- bcrypt

### Other Tools
- Multer
- Nodemailer
- Brevo SMTP
- Inngest

---

# 📂 Project Structure

```
Workforce-Intelligence-Platform
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

# ⚙️ Installation

## Clone the repository

```bash
git clone https://github.com/priyanshu-verma600/workforce-Intelligence-platform.git
```

## Go to project folder

```bash
cd workforce-Intelligence-platform
```

---

## Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder.

Example:

```env
PORT=4000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret

SMTP_USER=your_smtp_user

SMTP_PASS=your_smtp_password

SENDER_EMAIL=your_email

INNGEST_EVENT_KEY=your_event_key

INNGEST_SIGNING_KEY=your_signing_key
```

Run backend

```bash
npm run server
```

---

## Frontend Setup

```bash
cd client

npm install

npm run dev
```

---

# 🌐 API Endpoints

## Authentication

```
POST /api/auth/login
GET  /api/auth/session
POST /api/auth/change-password
```

## Employees

```
GET    /api/employees
POST   /api/employees
PUT    /api/employees/:id
DELETE /api/employees/:id
```

## Attendance

```
GET  /api/attendance
POST /api/attendance
```

## Leave

```
GET  /api/leave
POST /api/leave
```

## Payslips

```
GET /api/payslips
```

---

# 📸 Screenshots

Add screenshots here.

### Login Page

<img src="screenshots/login.png" width="800"/>

### Admin Dashboard

<img src="screenshots/dashboard.png" width="800"/>

### Employee Dashboard

<img src="screenshots/employee.png" width="800"/>

---

# 🔒 Security

- JWT Authentication
- Password Hashing using bcrypt
- Protected API Routes
- Role-Based Authorization
- Secure Environment Variables

---

# 🚀 Future Improvements

- Face Recognition Attendance
- AI-powered HR Assistant
- Performance Analytics
- Email OTP Verification
- Real-time Notifications
- Mobile Responsive UI
- Multi-Company Support

---

# 👨‍💻 Author

**Priyanshu Verma**

GitHub: https://github.com/priyanshu-verma600

LinkedIn: *(Add your LinkedIn URL)*

---

# ⭐ Show your support

If you found this project useful, consider giving it a ⭐ on GitHub.
