# Holberton School Cinema Guru

A pocket movie app built with **React** where users can:
- create an account
- sign in with JWT authentication
- browse movies
- filter and search titles
- add movies to **Favorites**
- add movies to **Watch Later**
- view recent user activities

## Features

- Authentication system
  - Sign up
  - Sign in
  - Persistent login with token stored in localStorage
  - Logout

- Dashboard
  - Home page with movie list
  - Filter by title
  - Filter by min year and max year
  - Filter by genres
  - Sort results
  - Load more movies

- User actions
  - Add or remove a movie from favorites
  - Add or remove a movie from watch later
  - Display latest activities
  - Dedicated pages for favorites and watch later

## Tech stack

- React
- Vite
- React Router DOM
- Axios
- Font Awesome
- CSS
- Docker / Docker Compose for the backend API

## Project structure

```bash
src/
├── assets/
├── components/
│   ├── general/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── SearchBar.jsx
│   │   └── SelectInput.jsx
│   ├── movies/
│   │   ├── Filter.jsx
│   │   ├── MovieCard.jsx
│   │   ├── Tag.jsx
│   │   └── movies.css
│   ├── navigation/
│   │   ├── Header.jsx
│   │   ├── SideBar.jsx
│   │   └── navigation.css
│   ├── Activity.jsx
│   └── components.css
├── routes/
│   ├── auth/
│   │   ├── Authentication.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── auth.css
│   └── dashboard/
│       ├── Dashboard.jsx
│       ├── HomePage.jsx
│       ├── Favorites.jsx
│       ├── WatchLater.jsx
│       └── dashboard.css
├── App.jsx
├── App.css
├── index.css
└── main.jsx
Requirements

Before running the project, make sure you have:

Node.js
npm
Docker Desktop
Docker Compose enabled in Docker Desktop
WSL integration enabled if you are using WSL on Windows
Backend setup

This project uses the official backend API provided for the Holberton Cinema Guru project.

Clone the backend repository separately, outside this frontend project folder:

cd /mnt/c/Users/ASUS
git clone https://github.com/hs-hq/holbertonschool-cinema-guru-API.git

Then start the backend:

cd holbertonschool-cinema-guru-API
docker compose build --no-cache --force-rm
docker compose up

Expected result:

backend server runs on http://localhost:8000
database container starts correctly
Important note

If port 5432 is already in use, stop the existing PostgreSQL container before running Docker Compose.

Example:

docker ps -a --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
docker stop <container_name>

You can also start only specific services when needed:

docker compose up postgres
docker compose up node
Frontend setup

Clone your frontend repository and install dependencies:

git clone <your-frontend-repo-url>
cd holbertonschool-cinema-guru
npm install

Run the development server:

npm run dev

The frontend will run on:

http://localhost:3000
API base URL

The app communicates with the backend using:

http://localhost:8000
Main routes
Frontend routes
/
/home
/favorites
/watchlater
Backend routes used
POST /api/auth/register
POST /api/auth/login
POST /api/auth/
GET /api/titles/advancedsearch
GET /api/titles/favorite
GET /api/titles/watchLater
POST /api/titles/favorite
POST /api/titles/watchLater
DELETE /api/titles/favorite
DELETE /api/titles/watchLater
GET /api/activity
Authentication

After a successful login or registration, the backend returns an accessToken.

This token is:

stored in localStorage
sent in the Authorization header for protected routes

Example:

Authorization: `Bearer ${localStorage.getItem("accessToken")}`
Screenshots

You can add screenshots here later, for example:

## Screenshots

### Authentication
![Authentication page](./README_screenshots/authentication.png)

### Home page
![Home page](./README_screenshots/home.png)

### Favorites
![Favorites page](./README_screenshots/favorites.png)

### Watch Later
![Watch Later page](./README_screenshots/watchlater.png)
What I implemented
Authentication pages
Header and sidebar navigation
Dashboard routing
Movie card component
Search and filter system
Favorites page
Watch later page
Latest activities section
Backend integration with Axios
JWT token handling with protected API requests
Notes
This project was built as part of the Holberton School React curriculum
The backend repository is separate from the frontend repository
Docker is required to run the provided API locally
Author

Ines Oubabas