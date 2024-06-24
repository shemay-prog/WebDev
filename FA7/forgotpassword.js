let username = document.getElementById("username");
let submit = document.getElementById("submit");

username.addEventListener("keypress", function(){
    if (username.value.trim() !== "") {
        username.classList.remove("empty");
    }
});

submit.addEventListener("click", function(event){
    event.preventDefault();

    let usernameEmpty = username.value.trim() === "";

    if (usernameEmpty) {
        alert("Username cannot be empty!");
        username.classList.add("empty");
        username.setAttribute("placeholder", "Username required*");
    } else {
        // If username is not empty, remove any 'empty' class
        username.classList.remove("empty");
        // Proceed with other actions or submit the form
        alert("Form can be submitted!");
        // For demonstration, you can submit the form here if needed
        // e.g., document.getElementById("myForm").submit();
    }
});

submit.addEventListener("mouseover", function(){
    submit.classList.add("button-mouse-over");
});

submit.addEventListener("mouseout", function(){
    submit.classList.remove("button-mouse-over");
});
