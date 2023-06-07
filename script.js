/*function createAccount(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Perform account creation logic here
  // You can use JavaScript to handle form validation, make API requests, etc.
  // For simplicity, we'll just display an alert message with the entered data
  alert("Account created successfully!\n\nUsername: " + username + "\nEmail: " + email + "\nPassword: " + password);
}*/

function toggleLogin() {
  var loginSection = document.getElementById("login");
  loginSection.style.display = loginSection.style.display === "none" ? "block" : "none";
}

function showLogin() {
  alert("This feature is not implemented yet.");
}
