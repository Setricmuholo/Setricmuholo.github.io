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

function selectCake() {
  var selectedIngredients = getSelectedIngredients();
  
  // Check the selected ingredients to determine the cake type
  if (
    selectedIngredients.includes("All-purpose flour") &&
    selectedIngredients.includes("Granulated sugar") &&
    selectedIngredients.includes("Unsalted butter") &&
    selectedIngredients.includes("Eggs") &&
    selectedIngredients.includes("Milk") &&
    selectedIngredients.includes("Vanilla extract") &&
    selectedIngredients.includes("Baking powder") &&
    selectedIngredients.includes("Salt")
  ) {
    // Redirect to Vanilla Cake page
    window.location.href = "vanilla-cake.html";
  } else if (
    // Check other ingredient combinations and redirect accordingly
    selectedIngredients.includes("All-purpose flour") &&
    selectedIngredients.includes("Granulated sugar") &&
    selectedIngredients.includes("Unsalted butter") &&
    selectedIngredients.includes("Eggs") &&
    selectedIngredients.includes("Milk") &&
    selectedIngredients.includes("Vanilla extract") &&
    selectedIngredients.includes("Baking powder") &&
    selectedIngredients.includes("Salt") &&
    selectedIngredients.includes("Unsweetened cocoa powder")
  ) {
    // Redirect to Chocolate Cake page
    window.location.href = "chocolate-cake.html";
  } else if (
    // Check other ingredient combinations and redirect accordingly
    selectedIngredients.includes("All-purpose flour") &&
    selectedIngredients.includes("Granulated sugar") &&
    selectedIngredients.includes("Unsalted butter") &&
    selectedIngredients.includes("Eggs") &&
    selectedIngredients.includes("Buttermilk") &&
    selectedIngredients.includes("Vanilla extract") &&
    selectedIngredients.includes("Baking powder") &&
    selectedIngredients.includes("Salt") &&
    selectedIngredients.includes("Cocoa powder") &&
    selectedIngredients.includes("Red food coloring") &&
    selectedIngredients.includes("White vinegar")
  ) {
    // Redirect to Red Velvet Cake page
    window.location.href = "red_velvet-cake.html";
  } else if (
    // Check other ingredient combinations and redirect accordingly
    selectedIngredients.includes("All-purpose flour") &&
    selectedIngredients.includes("Granulated sugar") &&
    selectedIngredients.includes("Eggs") &&
    selectedIngredients.includes("Vegetable oil") &&
    selectedIngredients.includes("Vanilla extract") &&
    selectedIngredients.includes("Baking powder") &&
    selectedIngredients.includes("Salt") &&
    selectedIngredients.includes("Ground cinnamon") &&
    selectedIngredients.includes("Grated carrots")
  ) {
    // Redirect to Carrot Cake page
    window.location.href = "carrot-cake.html";
  } else if (
    // Check other ingredient combinations and redirect accordingly
    selectedIngredients.includes("All-purpose flour") &&
    selectedIngredients.includes("Granulated sugar") &&
    selectedIngredients.includes("Unsalted butter") &&
    selectedIngredients.includes("Eggs") &&
    selectedIngredients.includes("Buttermilk") &&
    selectedIngredients.includes("Vanilla extract") &&
    selectedIngredients.includes("Baking powder") &&
    selectedIngredients.includes("Salt") &&
    selectedIngredients.includes("Lemon zest") &&
    selectedIngredients.includes("Lemon juice")
  ) {
    // Redirect to Lemon Cake page
    window.location.href = "lemon-cake.html";
  } else if (
    // Check other ingredient combinations and redirect accordingly
    selectedIngredients.includes("All-purpose flour") &&
    selectedIngredients.includes("Granulated sugar") &&
    selectedIngredients.includes("Unsalted butter") &&
    selectedIngredients.includes("Eggs") &&
    selectedIngredients.includes("Milk") &&
    selectedIngredients.includes("Vanilla extract") &&
    selectedIngredients.includes("Baking powder") &&
    selectedIngredients.includes("Salt") &&
    selectedIngredients.includes("Fresh strawberries")
  ) {
    // Redirect to Strawberry Cake page
    window.location.href = "strawberry-cake.html";
  } else {
    // Redirect to All Cakes page (displaying all cake options)
    window.location.href = "all-cakes.html";
  }
}

function getSelectedIngredients() {
  var ingredientList = document.querySelectorAll("#ingredients li");
  var selectedIngredients = [];
  for (var i = 0; i < ingredientList.length; i++) {
    if (ingredientList[i].classList.contains("selected")) {
      selectedIngredients.push(ingredientList[i].innerText);
    }
  }
  return selectedIngredients;
}

var ingredientItems = document.querySelectorAll("#ingredients li");
for (var i = 0; i < ingredientItems.length; i++) {
  ingredientItems[i].addEventListener("click", function() {
    this.classList.toggle("selected");
  });
}

const carouselItems = document.querySelectorAll('.carousel-item');
const carouselContainer = document.getElementById('carousel-container');

const images = ['Home.png', 'Products.png']; // Replace with your image file names

// Set background images for carousel items
carouselItems.forEach((item, index) => {
  item.style.backgroundImage = `url(${images[index]})`;
});

// Adjust carousel width based on the number of images
carouselContainer.style.width = `${images.length * 100}%`;
