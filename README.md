📝 Blog System (v0.1)
A basic Blog Management System built with Node.js and Express, designed to create, read, and manage blog posts. This project is under active development and will evolve towards a full-featured platform.

✅ Current Features
Create new blog posts

Fetch all blog posts

Fetch a single blog by ID

Basic project structure with organized routes, models, and controllers

Follows .env best practices for secure configuration

Uses MongoDB for data storage

Backend separated from frontend (frontend to be developed)

📁 Project Structure
/blog-system
├── backend
│     ├── models/         # Mongoose schemas
│     ├── routes/         # API routes
│     ├── controllers/    # Logic handling
│     ├── app.js          # Main server setup
│     ├── package.json
│     └── .env (excluded from repo)
├── frontend              # To be developed
├── .gitignore
├── README.md
🚀 Setup Instructions

Clone the Repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd blog-system

Backend Setup
cd backend
npm install

Environment Variables
Create a .env file inside the backend folder:
MONGO_URI=your_mongodb_connection_string
PORT=3000

Run the Backend
node app.js
Server will run at: http://localhost:3000

🛠 Upcoming Features (Planned v1.0)
Full-featured frontend (React or Vanilla)
Edit blog functionality
Delete blog functionality
Category filtering & search
Pagination for blogs list
Responsive frontend design
Error & success message handling
User authentication system (Register/Login)
Optional dark mode toggle
Admin-only protected routes

💡 Future Enhancements
Comment system for blogs
Rich text editor for content creation
Image upload for blogs
Analytics for blog engagement
Improved UI/UX for all devices

📢 Notes
Make sure MongoDB is running
Do not commit your .env file
Project is under development — contributions are welcome after core structure is stable