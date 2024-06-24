let username = document.getElementById("username");
let password = document.getElementById("password");
let submit = document.getElementById("submit");

submit.addEventListener("click", function(event){
    // Prevent form submission for validation
    event.preventDefault();
    
    let usernameEmpty = username.value === "";
    let passwordEmpty = password.value === "";
    
    if (usernameEmpty && passwordEmpty) {
        alert("Both username and password cannot be empty!");
        username.setAttribute("class", "form-control empty");
        password.setAttribute("class", "form-control empty");
        username.setAttribute("placeholder", "Username required*");
        password.setAttribute("placeholder", "Password required*");
    } else {
        if (usernameEmpty) {
            alert("Username cannot be empty!");
            username.setAttribute("class", "form-control empty");
            username.setAttribute("placeholder", "Username required*");
        } else {
            username.setAttribute("class", "form-control");
        }

        if (passwordEmpty) {
            alert("Password cannot be empty!");
            password.setAttribute("class", "form-control empty");
            password.setAttribute("placeholder", "Password required*");
        } else {
            password.setAttribute("class", "form-control");
        }
    }
});

submit.addEventListener("mouseover", function(){
    submit.setAttribute("class", "btn btn-outline-light button-mouse-over");
});

submit.addEventListener("mouseout", function(){
    submit.setAttribute("class", "btn btn-outline-light");
});

document.getElementById("submit").addEventListener("click", function() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Please fill out both username and password fields.");
    } else {
        // Simulate a successful login (replace with actual login logic)
        alert("Login successful!");
        // Redirect to another page or perform further actions after successful login
        // Example: window.location.href = "dashboard.html";
    }
});