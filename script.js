// ----------------- PASSWORD TOGGLE -----------------
function togglePassword() {
  const pwd = document.getElementById("password");
  if (pwd) {
    pwd.type = pwd.type === "password" ? "text" : "password";
  }
}

function toggleLoginPassword() {
  const pwd = document.getElementById("login-password");
  if (pwd) {
    pwd.type = pwd.type === "password" ? "text" : "password";
  }
}

// ----------------- REGISTER FORM REDIRECT -----------------
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Registration successful! Redirecting to Login...");
    window.location.href = "login.html";
  });
}

// ----------------- USER LOGIN FORM REDIRECT -----------------
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("login-password").value;

    // Frontend-only logic (replace with backend later)
    if (email === "admin@quickdesk.com") {
      alert("Welcome Admin!");
      window.location.href = "admin-dashboard.html";
    } else {
      alert("Welcome User!");
      window.location.href = "dashboard.html";
    }
  });
}

// ----------------- ADMIN LOGIN FORM REDIRECT -----------------
const adminLoginForm = document.getElementById("adminLoginForm");
if (adminLoginForm) {
  adminLoginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Admin logged in successfully!");
    window.location.href = "admin-dashboard.html";
  });
}

// ----------------- LOGOUT BUTTON CONFIRMATION -----------------
const logoutBtn = document.querySelector("button[onclick*='index.html']");
if (logoutBtn) {
  logoutBtn.addEventListener("click", function (e) {
    const confirmLogout = confirm("Are you sure you want to logout?");
    if (!confirmLogout) {
      e.preventDefault();
    }
  });
}

// ----------------- Console Logs for Debug -----------------
console.log("QuickDesk Script Loaded");

function toggleAdminPassword() {
  const pwd = document.getElementById("admin-password");
  pwd.type = pwd.type === "password" ? "text" : "password";
}