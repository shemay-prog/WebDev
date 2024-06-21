document.addEventListener("DOMContentLoaded", function() {
    // Get the form elements
    let email = document.getElementById("email");
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let confpassword = document.getElementById("confpassword");
    let submit = document.getElementById("submit");

    // Function to validate email format using a basic check
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Event listener for email input to validate format
    email.addEventListener("input", function() {
        let value = email.value.trim();

        if (value === "") {
            showError(email, "Email is required");
        } else if (!validateEmail(value)) {
            showError(email, "Please enter a valid email");
        } else {
            clearError(email);
        }
    });

    // Event listener for form submission
    submit.addEventListener("click", function(event) {
        let emailEmpty = email.value.trim() === "";
        let emailInvalid = !validateEmail(email.value.trim());
        let usernameEmpty = username.value.trim() === "";
        let passwordEmpty = password.value.trim() === "";
        let confpasswordMismatch = password.value.trim() !== confpassword.value.trim();

        // Check email field
        if (emailEmpty) {
            showError(email, "Field required*");
        } else if (emailInvalid) {
            showError(email, "Please enter a valid email");
        } else {
            clearError(email);
        }

        // Check username field
        if (usernameEmpty) {
            showError(username, "Field required*");
        } else {
            clearError(username);
        }

        // Check password field
        if (passwordEmpty) {
            showError(password, "Field required*");
        } else {
            clearError(password);
        }

        // Check confirm password field
        if (confpasswordMismatch) {
            showError(confpassword, "Passwords do not match");
        } else {
            clearError(confpassword);
        }

        // Prevent form submission if any field is invalid
        if (emailEmpty || emailInvalid || usernameEmpty || passwordEmpty || confpasswordMismatch) {
            event.preventDefault();
            alert("Please fill in all required fields correctly.");
            return;
        }

        // Store the registered user information in localStorage
        localStorage.setItem("registeredEmail", email.value.trim());
        localStorage.setItem("registeredUsername", username.value.trim());
        localStorage.setItem("registeredPassword", password.value.trim());

        // Form submission logic if all fields are valid
        alert("Registration successful!");
        // Redirect to the login form
        window.location.href = "login.html";
    });

    // Helper functions to show and clear error messages
    function showError(input, message) {
        let errorElement = document.getElementById(input.id + "-error");
        errorElement.textContent = message;
        errorElement.style.display = "block";
        input.classList.add("empty");
    }

    function clearError(input) {
        let errorElement = document.getElementById(input.id + "-error");
        errorElement.textContent = "";
        errorElement.style.display = "none";
        input.classList.remove("empty");
    }
});