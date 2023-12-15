let productItem = [
  //   {
  //     name: "RCR",
  //     productImg: "image/Dolls/doll01.jpg",
  //     category: "",
  //     price: "12",
  //     quantity: "5",
  //     sellStaus: "2",
  //   },
];
let reMoves = document.querySelectorAll(".remove");
const menuBtn = Array.from(document.querySelectorAll("aside button"));
const customerRecord = document.querySelector(".customer-record");
const producManagement = document.querySelector(".products-management");
const categoryManagement = document.querySelector(".category-management");
const productName = document.getElementById("product-name");
const productCategory = document.getElementById("product-category");
const productPrice = document.getElementById("product-price");
const productImage = document.getElementById("product-image");
const productQuantity = document.getElementById("product-quantity");
const addProductBtn = document.getElementById("add");
const productTable = document.getElementById("p-management-table");
// set variable

// Save Product to Local
function loadToLocal(data) {
  localStorage.setItem("productItems", JSON.stringify(data));
}
function getData() {
  productItem = JSON.parse(localStorage.getItem("productItems"));
}
// loadToLocal(productItem);
// function readImg(image) {
//   let img = new FileReader();
//   img.readAsDataURL(productImage.files[0]);
//   productImage.addEventListener("onchange", () => {
//     image.setAttribute("src", img.result);
//   });
// }
function getDataFromInput() {
  let data = {};
  if (productName.checkValidity()) {
    data.name = productName.value;
    data.productImg = productImage.files[0];
    data.category = productCategory.value;
    data.price = productPrice.value;
    data.quantity = productQuantity.value;
    productItem.push(data);
    loadToLocal(productItem);
  }
}
let i = 0;
addProductBtn.addEventListener("click", getDataFromInput);

function createTable(data) {
  const tableRow = document.createElement("tr");
  const tdId = document.createElement("td");
  const tdName = document.createElement("td");
  const tdQuantity = document.createElement("td");
  const tdEdit = document.createElement("td");
  const editBtn = document.createElement("button");
  editBtn.className = "edit";
  const tdRemove = document.createElement("td");
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("table-remove");
  tdId.textContent = i;
  tdName.textContent = data.name;
  tdQuantity.textContent = data.quantity + " Unit(s)";
  editBtn.textContent = "Edit";
  removeBtn.textContent = "Remove";
  removeBtn.setAttribute("id", i);
  tdEdit.appendChild(editBtn);
  tdRemove.appendChild(removeBtn);
  tableRow.appendChild(tdId);
  tableRow.appendChild(tdName);
  tableRow.appendChild(tdQuantity);
  tableRow.appendChild(tdEdit);
  tableRow.appendChild(tdRemove);
  productTable.appendChild(tableRow);
  i++;
}

getData();
for (let item of productItem) {
  createTable(item);
}
const removeProductBtn = document.querySelectorAll(".table-remove");
console.log(removeProductBtn);
for (let btn of removeProductBtn) {
  btn.addEventListener("click", () => {
    productItem.splice(btn.id, 1);
    loadToLocal(productItem);
    btn.parentElement.parentElement.remove();
  });
}
