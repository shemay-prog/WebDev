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
        username.classList.remove("empty");
        alert("Request Password Sucessfully!");
    }
});
