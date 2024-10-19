document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get the input values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Predefined credentials
    const adminEmail = "admin@gmail.com";
    const adminPassword = "admin@123";

    // Check if the credentials match
    if (email === adminEmail && password === adminPassword) {
        // Redirect to admin page if credentials are correct
        window.location.href = "admin_page.html";
    } else {
        // Show error message if credentials are incorrect
        document.getElementById("errorMessage").innerText = "Incorrect email or password.";
    }
});
