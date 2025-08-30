
// server.js
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Helper function: load/save entries
const entriesFile = path.join(__dirname, "entries.json");

function loadEntries() {
  if (!fs.existsSync(entriesFile)) return [];
  const data = fs.readFileSync(entriesFile, "utf8");
  try {
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}

function saveEntries(entries) {
  fs.writeFileSync(entriesFile, JSON.stringify(entries, null, 2));
}

// --- ROUTES ---

// Homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Login Page
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

// Admin Page
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "admin.html"));
});

// Winners Page
app.get("/winners", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "winners.html"));
});

// Sweepstakes entry (POST from form on index.html)
app.post("/enter", (req, res) => {
  const { name, email } = req.body;
  const entries = loadEntries();

  // Add entry
  entries.push({ name, email, timestamp: new Date().toISOString() });
  saveEntries(entries);

  res.send(`<h1>Thank you ${name}!</h1>
            <p>Your entry has been submitted.</p>
            <a href="/">Go back</a>`);
});

// Simple admin login
app.post("/admin-login", (req, res) => {
  const { username, password } = req.body;

  if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
    const entries = loadEntries();
    res.send(`
      <h1>Welcome Admin!</h1>
      <h2>Entries:</h2>
      <ul>
        ${entries.map(e => `<li>${e.name} (${e.email}) - ${e.timestamp}</li>`).join("")}
      </ul>
      <a href="/">Back to Home</a>
    `);
  } else {
    res.send("<h1>Unauthorized</h1><p>Invalid credentials.</p>");
  }
});

// --- START SERVER ---
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
