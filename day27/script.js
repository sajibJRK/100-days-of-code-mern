const cart = [
  { name: "Shirt", price: 1200 },
  { name: "Jeans", price: 2200 },
  { name: "Shoes", price: 3000 }
];

const cartList = document.getElementById("cart-list");
const totalPrice = document.getElementById("total-price");

// Display cart items
cart.forEach(item => {
  const li = document.createElement("li");
  li.textContent = `${item.name} -${item.price} tk`;
  cartList.appendChild(li);
});

// Calculate total using reduce
const total = cart.reduce((sum, item) => sum + item.price, 0);
totalPrice.textContent = `${total} tk`;

// Check if item is in cart
function checkItem() {
  const input = document.getElementById("check-item").value.trim();
  const itemNames = cart.map(item => item.name.toLowerCase());
  const result = document.getElementById("check-result");

  if (input === "") {
    result.textContent = "Please enter an item name.";
    result.style.color = "orange";
    return;
  }

  if (itemNames.includes(input.toLowerCase())) {
    const index = itemNames.indexOf(input.toLowerCase());
    result.textContent = `✅ ${cart[index].name} is in the cart.`;
    result.style.color = "green";
  } else {
    result.textContent = `❌ ${input} not found in cart.`;
    result.style.color = "red";
  }
}
