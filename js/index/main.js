//
let products;
let cartItems;
let allCategory;
const pName = document.getElementById("product-name");
const pCategory = document.getElementById("product-category");
const pPrice = document.getElementById("product-price");
const pQuantity = document.getElementById("product-quantity");
const tableBody = document.getElementById("p-management-table");
const form = document.querySelector(".form");
const addBtn = document.getElementById("add");
// Save Product to Local
function loadtoCart(cartItems) {
  localStorage.setItem("productItems", JSON.stringify(cartItems));
}
function getData() {
  let loadedData = localStorage.getItem("productItems");
  if (loadedData === null) {
    products = [];
  } else {
    products = JSON.parse(loadedData);
  }
  localStorage.setItem("productItems", JSON.stringify(products));
}
function getDataforCart() {
  let loadedData = localStorage.getItem("cartItems");
  if (loadedData === null) {
    cartItems = [];
  } else {
    cartItems = JSON.parse(loadedData);
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}
function loadCategory() {
  let loadedData = localStorage.getItem("allCategory");
  if (loadedData === null) {
    allCategory = [];
  } else {
    allCategory = JSON.parse(loadedData);
  }
  localStorage.setItem("productItems", JSON.stringify(products));
}
getData();
getDataforCart();
loadCategory();
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

function show() {
  form.classList.toggle("show-form");
}
function update(index) {
  let loadedData = localStorage.getItem("productItems");
  if (loadedData === null) {
    cartItems = [];
  } else {
    productItem = JSON.parse(loadedData);
  }
  let cart = {};
  pName.value = products[index].name;
  pCategory.value = products[index].category;
  pPrice.value = products[index].price;
  pQuantity.value = products[index].quantity;
  addBtn.addEventListener("click", () => {
    cart.name = pName.value;
    cart.category = pCategory.value;
    cart.price = pPrice.value;
    cart.quantity = pQuantity.value;
    cartItems.push(cart);
    products[index].quantity = pQuantity.value - products[index].quantity;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("productItems", JSON.stringify(products));
  });
}
// addFuntion1.addEventListener("click", updateTable);
for (let btn of addToCartBtn) {
  btn.addEventListener("click", () => {
    show();
    update(btn.id);
  });
}
//Display category
const most_sell = document.querySelector(".most-sell");
function creatBtn(data) {
  let btn_Category = document.createElement("button");
  btn_Category.textContent = data;

  most_sell.appendChild(btn_Category);
  console.log(btn_Category);
}
for (let category of allCategory) {
  creatBtn(category.name);
}
​​​