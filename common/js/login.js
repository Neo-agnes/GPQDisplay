// Get the background element
const background = document.getElementById('background');

// Create an array of colors to use for the background animation
const colors = ['#FF4136', '#2ECC40', '#0074D9', '#FFDC00'];

// Set the initial background color
let backgroundColor = colors[0];

// Set the initial index for the colors array
let colorIndex = 0;

// Set the interval for the background animation (in milliseconds)
const interval = 1000;

// Start the background animation
setInterval(function() {
  // Set the background color to the next color in the array
  backgroundColor = colors[colorIndex];
  
  // Increment the color index
  colorIndex++;
  
  // If we've reached the end of the colors array, reset the index to 0
  if (colorIndex >= colors.length) {
    colorIndex = 0;
  }
  
  // Update the background color
  background.style.backgroundColor = backgroundColor;
}, interval);

// Get the login form element
const loginForm = document.querySelector('form');

// Add an event listener to the login form's submit button
loginForm.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values of the username and password fields
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validate the username and password (this is just an example, you would need to implement your own validation)
  if (username === 'admin' && password === 'password') {
    // If the username and password are valid, redirect the user to the homepage
    window.location.href = 'homepage.html';
  } else {
    // If the username and password are not valid, display an error message
    alert('Invalid username or password');
  }
});