document.addEventListener("DOMContentLoaded", function() {
    // Get the form elements
    let loginemail = document.getElementById("loginemail");
    let loginpassword = document.getElementById("loginpassword");
    let loginSubmit = document.getElementById("loginsubmit");

    // Retrieve the registered user information from localStorage
    let registeredEmail = localStorage.getItem("registeredEmail");
    let registeredUsername = localStorage.getItem("registeredUsername");
    let registeredPassword = localStorage.getItem("registeredPassword");

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

    // Event listener for form submission
    loginSubmit.addEventListener("click", function(event) {
        event.preventDefault();

        let loginemailEmpty = loginemail.value.trim() === "";
        let loginpasswordEmpty = loginpassword.value.trim() === "";

        // Check email/username field
        if (loginemailEmpty) {
            showError(loginemail, "Field required*");
        } else {
            clearError(loginemail);
        }

        // Check password field
        if (loginpasswordEmpty) {
            showError(loginpassword, "Field required*");
        } else {
            clearError(loginpassword);
        }

        // Prevent form submission if any field is invalid
        if (loginemailEmpty || loginpasswordEmpty) {
            alert("Please fill in all required fields correctly.");
            return;
        }

        // Check if the login details match the registered user information
        if ((loginemail.value.trim() === registeredEmail || loginemail.value.trim() === registeredUsername) &&
            loginpassword.value.trim() === registeredPassword) {
            alert("Login successful!");
            // Redirect to a dashboard or another page
            window.location.href = "https://google.com";
        } else {
            alert("Invalid email/username or password.");
        }
    });
});