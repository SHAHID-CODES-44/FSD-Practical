README — MERN (React + Node/Express) with MySQL (Signup / Login / CRUD)

Complete step-by-step guide to run this project locally, set up the database, debug common errors, and move the project to a different database. Follow the steps exactly. This README assumes your project root is React-App-29 and the backend folder is React-App-29/backend.

1. Overview (what this project contains)

Frontend (React): React-App-29/src/

index.js

App.jsx

components/Signup.jsx

components/Login.jsx

components/Home.jsx (or Home2.jsx)

index.css / Login.css

Backend (Node + Express + MySQL): React-App-29/backend/

server.js (ES module, import syntax)

db.js (optional pool file)

package.json (with "type":"module")

Database: MySQL database named tybcafsd29 (example) with table NewUsers(id, name, email, password)

Flow: Signup -> Login -> Home (list users + edit + delete)

2. Prerequisites (install these first)

Node.js (v16+ recommended; Node v22 works) and npm

MySQL server installed and running

(Optional) Git, but not required

Terminal / command prompt

Verify versions:

node -v
npm -v
mysql --version

3. Backend setup (detailed)
3.1 Project files (backend)

Place or update these files inside React-App-29/backend:

package.json

Make sure it contains "type": "module" so ESM import works.

{
  "name": "react-app-29-backend",
  "version": "1.0.0",
  "type": "module",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mysql2": "^3.3.0",
    "cors": "^2.8.5"
  }
}


If you use bcryptjs earlier and later removed it, don't include bcrypt in dependencies.

If you want to use environment variables, add dotenv to dependencies (optional).

3.2 Install backend dependencies

From React-App-29/backend:

npm install express mysql2 cors
# if you use dotenv:
npm install dotenv


If you previously installed bcrypt or bcryptjs and you removed password hashing, uninstall them:

npm uninstall bcrypt bcryptjs

3.3 Backend server file

Your server.js should use ESM import style and a mysql2 pool. Example (this is the simplified, no hashing version that we used):

import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';

const app = express();
app.use(cors());
app.use(express.json());

const pool = await mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'YOUR_DB_PASSWORD',
  database: 'tybcafsd29',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// routes: /, /signup, /login, /users, /users/:id (GET/PUT/DELETE)
...
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


Replace YOUR_DB_PASSWORD with your actual MySQL password or use .env (recommended).

3.4 Optional: use .env (recommended)

Install dotenv and create .env in backend:

npm install dotenv


.env

DB_HOST=localhost
DB_USER=root
DB_PASS=3826
DB_NAME=tybcafsd29
PORT=5000


Then in server.js import and use process.env.* before creating pool:

import dotenv from 'dotenv';
dotenv.config();
const pool = await mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  ...
});

4. Database setup (MySQL)
4.1 Create database (if not present)

Log in to MySQL and run:

CREATE DATABASE IF NOT EXISTS tybcafsd29;
USE tybcafsd29;

4.2 Create NewUsers table (recommended schema)

This schema matches the app (plain password, no hashing):

CREATE TABLE IF NOT EXISTS NewUsers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);


Notes:

password must be VARCHAR(255) so it can store hashed or plain passwords safely.

email is UNIQUE so duplicate signup is prevented.

If your table already exists with different types, run these ALTER statements to fix:

ALTER TABLE NewUsers MODIFY password VARCHAR(255) NOT NULL;
ALTER TABLE NewUsers MODIFY email VARCHAR(100) NOT NULL;
ALTER TABLE NewUsers ADD UNIQUE (email);

4.3 Confirm table
DESCRIBE NewUsers;
SHOW CREATE TABLE NewUsers\G

5. Frontend setup (React)
5.1 Files (example paths)

Place React files in React-App-29/src and components in React-App-29/src/components.

Essential files:

src/index.js — React bootstrap

src/App.jsx — Router and routes

src/components/Signup.jsx — signup form sends {name,email,password} to POST /signup

src/components/Login.jsx — login form sends {email,password} to POST /login

src/components/Home.jsx — list users GET /users, edit PUT /users/:id, delete DELETE /users/:id

src/index.css and src/components/Login.css — styles

5.2 Install frontend deps

From React-App-29 (project root):

npm install react-router-dom axios


If you used Create React App or Vite, those will already exist.

5.3 Start frontend

From React-App-29:

npm start


Open http://localhost:3000 (or the port your dev server uses).

6. How to run everything (order)

Start MySQL server (system dependent)

Start backend:

cd React-App-29/backend
node server.js
# or if you use npm script
npm start


Confirm backend shows:

Server running on port 5000


Start frontend:

cd React-App-29
npm start


Use the UI:

Visit /signup -> fill name, email, password -> Signup

Then /login -> Login

After login you reach /home which fetches /users

7. Test endpoints quickly with curl (handy for debugging)

Replace data as needed.

Health:

curl -i http://localhost:5000/


Signup:

curl -i -X POST http://localhost:5000/signup -H "Content-Type: application/json" -d '{"name":"Shahid","email":"shahid@example.com","password":"1234"}'


Login:

curl -i -X POST http://localhost:5000/login -H "Content-Type: application/json" -d '{"email":"shahid@example.com","password":"1234"}'


List users:

curl -i http://localhost:5000/users


Get single user:

curl -i http://localhost:5000/users/1


Update user (PUT):

curl -i -X PUT http://localhost:5000/users/1 -H "Content-Type: application/json" -d '{"name":"New Name","email":"new@example.com","password":"newpass"}'


Delete user:

curl -i -X DELETE http://localhost:5000/users/1

8. Common errors & fixes (you already ran into these)
8.1 SyntaxError: Cannot use import statement outside a module

Cause: Node ran in CommonJS mode.
Fix: in backend/package.json add "type": "module" or rename .js to .mjs or convert imports to require.

8.2 Access denied for user 'root'@'localhost' (using password: NO)

Cause: password not provided.
Fix: put correct password in pool config or use .env. Example:

const pool = await mysql.createPool({ host:'localhost', user:'root', password:'3826', database:'tybcafsd29' });

8.3 Cannot find package 'bcrypt' or bcrypt install failing

Fix: install or uninstall depending on whether you need hashing.

To install: npm install bcrypt (may fail on Windows)

Alternative: npm install bcryptjs and import bcrypt from 'bcryptjs'

To remove hashing entirely: remove bcrypt import, remove hashing calls, store plain passwords (insecure but acceptable for exam/demo).

8.4 Database insert error on signup

Most common cause we saw: password column too short to store bcrypt hash or schema mismatch.
Fix: ensure password VARCHAR(255) and email length adequate and allows unique constraint if needed.

8.5 404 Not Found on /signup or /users/:id

Cause: backend route not present or server not restarted or wrong URL/port.
Fix: ensure server defines route and restart server. Confirm curl shows response.

9. How to move to a different database or environment (switch DB)

If you need to shift to a new DB name, host, user, or password:

Create the database on the target server:

CREATE DATABASE new_db_name;
USE new_db_name;
CREATE TABLE NewUsers (... same schema ...);


Update backend DB settings:

If you use .env, update .env values:

DB_HOST=<new_host>
DB_USER=<new_user>
DB_PASS=<new_pass>
DB_NAME=new_db_name


If you used inline config in server.js, update those values:

const pool = await mysql.createPool({
  host: 'new_host',
  user: 'new_user',
  password: 'new_pass',
  database: 'new_db_name'
});


Restart backend:

node server.js


(Optional) If you need to migrate existing data from the old DB to new DB, use:

mysqldump:

mysqldump -u root -p old_db_name NewUsers > newusers.sql
mysql -u root -p new_db_name < newusers.sql


If moving to a remote DB, open MySQL port (3306) or use a secure tunnel. Update host accordingly.

10. Security notes (for real projects; optional for exam)

Storing plain text passwords is insecure. For real apps use bcrypt/bcryptjs hashing and never store raw passwords.

Use HTTPS in production.

Do not commit .env with credentials to source control.

Validate and sanitize user input before using it in SQL (we use parameterized queries with ? which prevents SQL injection).

Use JWT or session cookies for real auth; this project uses a simple user store and localStorage.

11. Exam tips — what to mention when explaining this system

Explain your stack: React (frontend), Node + Express (backend), MySQL (database).

Show routes: /signup, /login, /users (GET), /users/:id (GET/PUT/DELETE).

Explain why password column must be VARCHAR(255) (or larger) if using hashing.

Demonstrate a successful curl run and show browser UI flow.

Mention ESM in Node and type: module necessity.

Mention how to switch DB credentials and why .env is cleaner.

12. Quick troubleshooting checklist (one-liners)

If frontend shows CORS error: ensure app.use(cors()) is present in backend.

If server crashes on start: read Node console error and fix missing package or syntax problem.

If route returns 404: restart backend and confirm route exists; curl the route from terminal.

If DB errors on INSERT: DESCRIBE NewUsers; and check column types and NOT NULL constraints.

If bcrypt missing: either install bcrypt/bcryptjs or remove hashing sections.

13. Useful commands summary

Start backend:

cd React-App-29/backend
npm install
node server.js


Start frontend:

cd React-App-29
npm install
npm start


DB alter commands (if needed):

ALTER TABLE NewUsers MODIFY password VARCHAR(255) NOT NULL;
ALTER TABLE NewUsers MODIFY email VARCHAR(100) NOT NULL;
ALTER TABLE NewUsers ADD UNIQUE (email);


Curl tests:

curl -i http://localhost:5000/
curl -i -X POST http://localhost:5000/signup -H "Content-Type: application/json" -d '{"name":"A","email":"a@example.com","password":"1234"}'
curl -i -X POST http://localhost:5000/login -H "Content-Type: application/json" -d '{"email":"a@example.com","password":"1234"}'
curl -i http://localhost:5000/users

14. If something still fails — what to paste here for help

Copy/paste the exact outputs (do not summarize):

Terminal output from node server.js after you trigger the failing action

curl -i response for the failing endpoint

DESCRIBE NewUsers; output if DB errors occur

The exact frontend console Network response for the request (response body / status)

With those I will point to the exact line to change.