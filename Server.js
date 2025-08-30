// server.js
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Simple admin password (store in env in real use)
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

// Store entries + winners in memory for now
let entries = [];
let winners = [];

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // Serve static files like CSS

// Homepage
app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to the Sweepstakes Portal 🎉</h1>
    <p><a href="/enter">Enter the Sweepstakes</a></p>
    <p><a href="/winners">View Winners</a></p>
    <p><a href="/admin">Admin Panel</a></p>
  `);
});

// Entry page
app.get("/enter", (req, res) => {
  res.send(`
    <h1>Enter Sweepstakes</h1>
    <form method="POST" action="/enter">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post("/enter", (req, res) => {
  const { name, email } = req.body;
  entries.push({ name, email });
  res.send(`<h2>Thank you, ${name}! You are entered. 🎟</h2>
            <a href="/">Back to Home</a>`);
});

// Winners list
app.get("/winners", (req, res) => {
  if (winners.length === 0) {
    return res.send("<h1>No winners yet. Check back later!</h1>");
  }
  let list = winners.map(w => `<li>${w.name} (${w.email})</li>`).join("");
  res.send(`<h1>Winners 🏆</h1><ul>${list}</ul><a href="/">Back</a>`);
});

// Admin login
app.get("/admin", (req, res) => {
  res.send(`
    <h1>Admin Panel</h1>
    <form method="POST" action="/admin">
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  `);
});

app.post("/admin", (req, res) => {
  const { password } = req.body;
  if (password !== ADMIN_PASSWORD) {
    return res.send("<h2>Access Denied ❌</h2><a href='/admin'>Try again</a>");
  }

  let entryList = entries.map(e => `<li>${e.name} (${e.email})</li>`).join("");
  res.send(`
    <h1>Admin Dashboard</h1>
    <h2>Entries</h2>
    <ul>${entryList || "<p>No entries yet</p>"}</ul>
    <form method="POST" action="/pick-winner">
      <button type="submit">Pick Winner</button>
    </form>
  `);
});

// Pick winner
app.post("/pick-winner", (req, res) => {
  if (entries.length === 0) {
    return res.send("<h2>No entries to pick from.</h2><a href='/admin'>Back</a>");
  }
  const winnerIndex = Math.floor(Math.random() * entries.length);
  const winner = entries[winnerIndex];
  winners.push(winner);

  res.send(`<h2>Winner Selected 🎉</h2><p>${winner.name} (${winner.email})</p>
            <a href="/admin">Back to Admin</a>`);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
