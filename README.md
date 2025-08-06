# BlogEditor Application

A full-stack blog publishing platform where users can create, edit, and view blog posts. The app is divided into a **React (Vite) frontend** and a **Node.js + Express backend**, with **MongoDB** as the database.

---

## Features

- Create, edit, and delete blog posts
- Display list of blog posts with details
- RESTful API integration between frontend and backend
- Responsive user interface built with React
- Modular structure for scalability

---

## Folder Structure

```
blogPost-main/
├── backend/                # Express backend with routes and models
│   ├── models/             # Mongoose schemas (e.g. Blog.js)
│   ├── routes/             # API routes (e.g. blogRoutes.js)
│   ├── index.js            # Main server file
│   └── package.json        # Backend dependencies
│
├── frontend/               # React frontend built with Vite
│   ├── public/             # Public assets
│   ├── src/                # Main source code
│   │   ├── Pages/          # App pages
│   │   ├── components/     # Reusable UI components
│   │   ├── services/       # API call logic
│   │   └── App.jsx         # Root component
│   ├── index.html
│   ├── package.json        # Frontend dependencies
│   └── vite.config.js
```

---

## Tech Stack

**Frontend**:
- React.js (with Vite)
- Axios (for API calls)
- CSS (custom styles)

**Backend**:
- Node.js
- Express.js
- MongoDB with Mongoose

**Tools**:
- Vercel (for frontend deployment)
- Postman (for API testing)
- GitHub (for version control)

---

## Installation & Running Locally

### Prerequisites

- Node.js & npm installed
- MongoDB running locally or Atlas URL

### Backend Setup

```bash
cd blogPost-main/backend
npm install
node index.js
```

### Frontend Setup

```bash
cd blogPost-main/frontend
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

---


## Author

Satyam Garg

---
