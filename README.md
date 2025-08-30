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
