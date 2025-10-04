const brownies = [
  { id: 1, name: "Classic Brownie", price: 50 },
  { id: 2, name: "Walnut Brownie", price: 70 },
  { id: 3, name: "Fudge Brownie", price: 80 }
];

const container = document.getElementById("product-list");

brownies.forEach(item => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <h3>${item.name}</h3>
    <p>Price: ₹${item.price}</p>
    <button onclick="addToCart(${item.id})">Add to Cart</button>
  `;
  container.appendChild(div);
});

function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = brownies.find(b => b.id === id);
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${item.name} added to cart!`);
}
