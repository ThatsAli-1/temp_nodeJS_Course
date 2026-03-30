# Express REST API — learning project

A small **Node.js + Express** server that exposes a JSON API for people resources, a simple login route, and static front-end examples. Built while following an online course, then organized into routes, controllers, and in-memory data—this folder is **my practice copy**, separate from the instructor’s full course download (e.g. `FullCode/node-express-course`) when both exist in the same workspace.

---

## What’s in this folder

| Part | Purpose |
|------|--------|
| **`app.js`** | Main application entry: middleware, static files, API mounts. |
| **`routes/`**, **`controllers/`** | REST-style routing and handler logic. |
| **`data.js`** | In-memory sample data (`people`, `products`). |
| **`methods-public/`**, **`public/`** | Static HTML/JS used with the course (forms, fetch demos). |
| **`final/`** | Numbered lesson files (`01-…`, `02-…`, …) from the course—**step-by-step scripts**, not the integrated app. The runnable integrated project is the files at the **root** (`app.js`, `routes/`, etc.). |

---

## Tech stack

- **Runtime:** Node.js  
- **Framework:** Express 5  
- **Dev:** nodemon  
- **Logging (optional / course):** morgan (listed in `package.json`; wire in `app.js` if you use it)

---

## Features (for your CV)

- **REST-style API** for `people`: list, create (including a Postman-oriented route that returns merged data), update by `id`, delete by `id` with JSON responses and HTTP status codes (`400`, `404`, `201`, `200`).  
- **Separation of concerns:** Express `Router` in `routes/`, business-style handlers in `controllers/`.  
- **Middleware:** `express.json()`, `express.urlencoded()`, static files from `./methods-public`.  
- **Simple auth demo route** under `/login` (POST) returning success or `401` when credentials are missing.  
- **Static front-end** under `methods-public` for practicing HTTP methods from the browser.

---

## Run locally

```bash
npm install
npm start
```

Server listens on **port 5000** (see `app.js`).

---

## API overview (high level)

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/people` | List people |
| POST | `/api/people` | Create person (body: `name`) |
| POST | `/api/people/postman` | Create + return extended list (course pattern) |
| PUT | `/api/people/:id` | Update person by id |
| DELETE | `/api/people/:id` | Remove person by id |
| POST | `/login` | Demo login (body: `name`) |

---

## For CV & resume — **copy this block to an AI**

Use the text below (and this README) so an assistant can turn facts into bullet points, a LinkedIn project description, or an interview story—**keep the learning source honest**.

```
PROJECT: Express REST API (Node.js) — course-based learning project

CONTEXT:
- I completed an online Node.js & Express course and reproduced the instructor’s exercises, then kept my own copy in this repo.
- The integrated app lives at the repo root (app.js, routes/, controllers/). The "final/" folder holds numbered lesson files from the course for reference only.

STACK:
Node.js, Express 5, REST APIs, JSON, Express Router, middleware (body parsing, static files), in-memory data.

WHAT I BUILT / PRACTICED:
- REST endpoints for a "people" resource with GET, POST, PUT, DELETE and appropriate status codes.
- Route modules and controller functions for clearer structure.
- Static hosting for small HTML/JS demos; simple POST /login demo route.
- Tested flows with browser/Postman-style usage as taught in the course.

HOW TO FRAME IT (HONEST):
- Good: "Hands-on Express project from an online course; implemented REST routing, controllers, and middleware."
- Avoid: implying a production product, team delivery, or database/auth beyond what the code shows.

ASK THE AI TO:
- Write 2–3 resume bullets (action + tech + outcome).
- Write a short LinkedIn "Project" paragraph.
- Suggest interview talking points: routing, HTTP verbs, status codes, middleware order, moving from in-memory data to a database.
```

---

## Publishing only this folder on GitHub

Your workspace may also contain the instructor’s **full course repo** (`FullCode/node-express-course`). For a **clean portfolio repo**, publish **this directory** as the repo root:

1. On GitHub, create a **new empty** repository (e.g. `express-people-api` or `nodejs-express-learning`).
2. From this folder:

```bash
cd path/to/02-express-tutorial
git init
git add .
git commit -m "Initial commit: Express REST API learning project"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

If this folder is **already** part of a larger git repo and you prefer not to nest repos, use **GitHub’s “upload files”** for a one-time upload, or copy this folder into a new directory and run the commands above there.

---

## License

ISC (see `package.json`). Course materials follow the original course license; your authored files remain yours.
