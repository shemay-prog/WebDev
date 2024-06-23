document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#loginForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;

        if (username.trim() === '' || password.trim() === '') {
            alert('Please enter both username and password.');
            return;
        }

        // Proceed with form submission or other actions
        console.log('Username:', username);
        console.log('Password:', password);

        // You can add code here to submit the form to the server
        // Example: form.submit();
    });
});