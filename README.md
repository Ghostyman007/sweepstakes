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
