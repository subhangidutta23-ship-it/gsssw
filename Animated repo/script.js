// script.js

// Get the login button and form elements
const loginButton = document.querySelector('.login-button');
const loginForm = document.querySelector('.login-form');

// Add an event listener to the form's submit event
loginForm.addEventListener('submit', function(event) {
    // Prevent the form from submitting normally and reloading the page
    event.preventDefault();

    // Change the button text and disable it to show a loading state
    loginButton.innerHTML = 'Loading...';
    loginButton.disabled = true;

    // Simulate an API call or a network delay with a setTimeout
    setTimeout(() => {
        // Here you would normally perform your login logic (e.g., send data to a server)
        
        // This is a simple pop-up to indicate success.
        // In a real application, you would redirect the user or show a different UI.
        alert('Login successful!');

        // Reset the button to its original state
        loginButton.innerHTML = 'Login';
        loginButton.disabled = false;
        
        // Clear the input fields after successful login
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';

    }, 2000); // The simulation lasts for 2000 milliseconds (2 seconds)
});

