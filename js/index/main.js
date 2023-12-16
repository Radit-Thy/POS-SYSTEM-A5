//
let products = [];
let itemCategory = [];
// Save Product to Local
function loadtoCart(cartItems) {
  localStorage.setItem("productItems", JSON.stringify(cartItems));
}
function getData() {
  products = JSON.parse(localStorage.getItem("productItems"));
}
getData();
for (let product of products) {
  itemCategory.push(product.category);
}
// all variable
const cardContainer = document.querySelector(".card-container");
// display product
let i = 0;
function Display_Card(data) {
  let card = document.createElement("div");
  card.className = "card";
  let card_title = document.createElement("div");
  card_title.className = "card-title";
  let h4_card_title = document.createElement("h4");
  h4_card_title.textContent = "Name: ";
  let span_h4 = document.createElement("span");
  span_h4.textContent = data.name;
  let p_card_title = document.createElement("p");
  p_card_title.textContent = "Available in stock:";
  let span_p_card_title = document.createElement("span");
  span_p_card_title.textContent = data.quantity;
  let btn_card = document.createElement("div");
  btn_card.className = "btn-card";
  let button = document.createElement("button");
  button.className = "btn add-to-cart";
  button.setAttribute("id", i);
  button.textContent = "Add to card";
  let pPrice = document.createElement("p");
  pPrice.textContent = "$";
  let span_btn_card = document.createElement("span");
  span_btn_card.textContent = data.price;
  card.appendChild(card_title);
  card_title.appendChild(h4_card_title);
  h4_card_title.appendChild(span_h4);
  card_title.appendChild(p_card_title);
  p_card_title.appendChild(span_p_card_title);
  card.appendChild(btn_card);
  btn_card.appendChild(button);
  btn_card.appendChild(pPrice);
  pPrice.appendChild(span_btn_card);
  cardContainer.appendChild(card);
  i++;
}
for (let item of products) {
  Display_Card(item);
}
const addToCartBtn = document.querySelectorAll(".btn-card .add-to-cart");
for (let btn of addToCartBtn) {
  btn.addEventListener("click", () => {
    if (products[btn.id].quantity > 0) {
      products[btn.id].quantity = products[btn.id].quantity - 1;
    } else {
      products.splice(btn.id, 1);
      alert("Out of stock");
    }
    loadtoCart(products);
  });
}
// display category
