document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loginForm").addEventListener("submit", validateLogin);
    document.getElementById("registerForm")?.addEventListener("submit", validateRegistration);
});

function validateLogin(event) {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (!username || !password) {
        alert("Please fill in all fields.");
        event.preventDefault();
    }
}

function validateRegistration(event) {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (!username || !email || !password) {
        alert("All fields are required.");
        event.preventDefault();
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Invalid email format.");
        event.preventDefault();
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        event.preventDefault();
    }
}
