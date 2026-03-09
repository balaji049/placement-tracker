# 📊 Placement Tracker

> A full-stack web application to help students track internship and job applications, monitor recruitment pipelines, and gain insights through analytics.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/Node.js-Express-green)
![React](https://img.shields.io/badge/Frontend-React.js-61DAFB?logo=react)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb)

---

## 🚀 Project Overview

During placement season, students apply to dozens of companies across LinkedIn, Internshala, career portals, referral links, and email — tracking all of them manually becomes overwhelming.

**Placement Tracker** provides a centralized dashboard where students can:

- 📋 Record and manage all applications in one place
- 📈 Track progress through recruitment stages
- 📊 Analyze success rates with visual charts
- 🔍 Filter and search through applications instantly

---

## 🎯 Key Features

### Application Management
Add, edit, and delete applications with fields for:
- Company name & job role
- Application date & current status
- Stipend / salary
- Notes

### Smart Search & Filters
Quickly filter applications by company, role, status, or date.

### Analytics Dashboard
Visual insights powered by Recharts:

| Chart | Description |
|-------|-------------|
| **Status Distribution** | Breakdown across Applied, Interview, Offer, Rejected |
| **Monthly Trend** | Applications submitted per month |
| **Conversion Metrics** | Total apps → Interviews → Offers → Conversion rate |

### Modern UI/UX
- Card-based layouts with hover effects
- Zebra-striped tables
- Responsive design for all screen sizes

---

## 🧠 Real-World Example

A student applies to 50 companies. With Placement Tracker, they instantly see:

```
Applied:    30
Interviews: 10
Offers:      2
Rejected:    8

Interview Rate → 20%
Offer Rate     →  4%
```

---

## 🏗 System Architecture

```
Frontend (React)
       ↓
    REST API
       ↓
Backend (Node.js + Express)
       ↓
  Database (MongoDB)
```

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js, React Router, Axios, Recharts, CSS Modules |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Auth | JWT Authentication |
| Other | Multer (file uploads), Socket.IO (real-time) |

---

## 📂 Project Structure

```
placement-tracker/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── uploads/
│   └── server.js
│
├── placement-tracker-frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   └── App.js
│   └── package.json
│
└── README.md
```

---

## 🔐 Authentication

JWT-based auth flow:

1. User logs in
2. Backend generates a JWT token
3. Token stored in `localStorage`
4. Axios automatically attaches token to all requests
5. Backend verifies token before processing API calls

---

## 📡 API Endpoints

### Applications
```
POST   /api/applications         → Create new application
GET    /api/applications         → Get all applications
PUT    /api/applications/:id     → Update application
DELETE /api/applications/:id     → Delete application
```

### Users
```
GET /api/users/me    → Get current user profile
PUT /api/users/me    → Update user profile
```

---

## 📦 Data Model

```json
{
  "company": "String",
  "role": "String",
  "status": "String",
  "appliedDate": "Date",
  "stipend": "Number",
  "notes": "String"
}
```

---

## 💻 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/balaji049/placement-tracker.git
cd placement-tracker
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../placement-tracker-frontend
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the `backend/` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 5. Run the Backend
```bash
cd backend
npm run dev
```

### 6. Run the Frontend
```bash
cd ../placement-tracker-frontend
npm start
```

The app will be available at `http://localhost:3000`.

---

## 📸 Screenshots

| Dashboard | Application Table | Analytics |
|-----------|------------------|-----------|
| ![Dashboard](screenshots/dashboard.png) | ![Table](screenshots/table.png) | ![Charts](screenshots/analytics.png) |

---

## 🔮 Future Improvements

- [ ] Resume tracker
- [ ] Interview preparation tracker
- [ ] AI-powered interview feedback
- [ ] Email integration
- [ ] Resume parsing
- [ ] Offer comparison tool
- [ ] Company insights
- [ ] Mobile app version

---

## 🧪 Testing

Planned testing coverage:
- API endpoint tests
- React component tests
- Integration tests

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## ⚛️ Create React App — Frontend Scripts

This project's frontend was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the `placement-tracker-frontend/` directory, you can run:

#### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page reloads automatically on changes, and lint errors appear in the console.

#### `npm test`
Launches the test runner in interactive watch mode. See [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`
Builds the app for production into the `build/` folder. React is bundled in production mode and optimized for best performance. The build is minified and filenames include content hashes — your app is ready to deploy!

#### `npm run eject`
> ⚠️ **This is a one-way operation. Once you `eject`, you can't go back!**

Copies all configuration files and transitive dependencies (webpack, Babel, ESLint, etc.) directly into your project for full control. All other scripts will still work, pointing to the copied configs.

You don't have to ever use `eject` — the curated setup is suitable for small and mid-sized deployments.

### 📚 Learn More

| Resource | Link |
|----------|------|
| Create React App Docs | https://facebook.github.io/create-react-app/docs/getting-started |
| React Documentation | https://reactjs.org/docs |
| Code Splitting | https://facebook.github.io/create-react-app/docs/code-splitting |
| Analyzing Bundle Size | https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size |
| Progressive Web App | https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app |
| Advanced Configuration | https://facebook.github.io/create-react-app/docs/advanced-configuration |
| Deployment Guide | https://facebook.github.io/create-react-app/docs/deployment |
| Build Fails to Minify | https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify |

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Balaji Bhairwad**  
B.Tech AIML Student | Software Developer | Machine Learning Enthusiast

[![GitHub](https://img.shields.io/badge/GitHub-balaji049-181717?logo=github)](https://github.com/balaji049)

---

## ⭐ Support

If you find this project useful:
- ⭐ **Star** the repository
- 🍴 **Fork** the project
- 🛠 **Contribute** improvements

Every bit of support helps keep the project growing!
