# Sweepstakes Portal

A simple sweepstakes management web app deployed on Render.

## Features
- Public landing page
- User login
- Admin dashboard
- Winners page

## Setup
1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/sweepstakes-portal.git
   cd sweepstakes-portal
2. npm install
3. cp .env.example .env
4. npm start
5. ---

### 📌 `/public/index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sweepstakes Portal</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Welcome to the Sweepstakes!</h1>
  <nav>
    <a href="login.html">Login</a> |
    <a href="admin.html">Admin</a> |
    <a href="winners.html">Winners</a>
  </nav>
  <p>Enter for a chance to win exciting prizes!</p>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Login - Sweepstakes</title>
</head>
<body>
  <h1>User Login</h1>
  <form>
    <input type="email" placeholder="Email" required><br>
    <input type="password" placeholder="Password" required><br>
    <button type="submit">Login</button>
  </form>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Admin Dashboard</title>
</head>
<body>
  <h1>Admin Panel</h1>
  <p>Manage sweepstakes entries and pick winners.</p>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Winners</title>
</head>
<body>
  <h1>Past Winners</h1>
  <ul>
    <li>Winner 1</li>
    <li>Winner 2</li>
    <li>Winner 3</li>
  </ul>
</body>
</html>
/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

/* Body */
body {
  background: #f4f7fb;
  color: #333;
  line-height: 1.6;
  padding: 20px;
}

/* Header */
h1 {
  color: #d62828;
  margin-bottom: 15px;
  text-align: center;
}

/* Navigation */
nav {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #003049;
  font-weight: bold;
  transition: color 0.3s;
}

nav a:hover {
  color: #d62828;
}

/* Forms */
form {
  max-width: 400px;
  margin: 0 auto;
  padding: 25px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

input, button {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1em;
}

input:focus {
  border-color: #d62828;
  outline: none;
}

button {
  background: #d62828;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
}

button:hover {
  background: #a61e1e;
}

/* Winners list */
ul {
  list-style: none;
  max-width: 500px;
  margin: 0 auto;
  padding: 0;
}

ul li {
  background: white;
  margin: 10px 0;
  padding: 12px;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  text-align: center;
}

/* Admin Panel */
.admin-panel {
  max-width: 600px;
  margin: 0 auto;
  padding: 25px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.admin-panel h2 {
  color: #003049;
  margin-bottom: 15px;
}

.admin-panel button {
  width: auto;
  margin: 5px;
}
/* Header */
header {
  background: #003049;
  color: white;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
}

header .logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

header .logo img {
  width: 50px;
  height: auto;
}

header h1 {
  margin: 0;
  font-size: 1.5rem;
  color: white;
}

header nav {
  margin-top: 10px;
}

header nav a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
  font-weight: bold;
}

header nav a:hover {
  text-decoration: underline;
}

/* Footer */
footer {
  text-align: center;
  margin-top: 40px;
  padding: 15px;
  background: #eaeaea;
  color: #555;
  font-size: 0.9rem;
}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sweepstakes Portal</title>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <!-- HEADER -->
  <header>
    <div class="logo">
      <img src="/logo.png" alt="Sweepstakes Logo" />
      <h1>Sweepstakes Portal</h1>
    </div>
    <nav>
      <a href="/">Home</a>
      <a href="/login.html">Login</a>
      <a href="/winners.html">Winners</a>
      <a href="/admin.html">Admin</a>
    </nav>
  </header>

  <!-- MAIN CONTENT -->
  <main>
    <h2>Welcome to the Sweepstakes!</h2>
    <p>Enter daily for your chance to win exciting prizes.</p>
    <form action="/enter" method="POST">
      <input type="text" name="name" placeholder="Your Name" required>
      <input type="email" name="email" placeholder="Your Email" required>
      <button type="submit">Enter Now</button>
    </form>
  </main>

  <!-- FOOTER -->
  <footer>
    <p>&copy; 2025 Sweepstakes Portal. All rights reserved.</p>
  </footer>
</body>
</html>
