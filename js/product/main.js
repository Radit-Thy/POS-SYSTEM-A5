let productItem = [
  //   {
  //     name: "RCR",
  //     category: "",
  //     price: "12",
  //     quantity: "5",
  //     sellStaus: "2",
  //   },
];
let allCategory = [];
// form
const pName = document.getElementById("product-name");
const pCategory = document.getElementById("product-category");
const pPrice = document.getElementById("product-price");
const pQuantity = document.getElementById("product-quantity");
const tableBody = document.getElementById("p-management-table");
const form = document.querySelector(".form");
const addBtn = document.getElementById("add");
const addFuntion = document.querySelector(".btn-add .add");
const filterCategory = document.getElementById("filter-category");
let id = 0;
function saveToLocal() {
  localStorage.setItem("productItems", JSON.stringify(productItem));
}
// saveToLocal();
function loadData() {
  let loadedData = JSON.parse(localStorage.getItem("productItems"));
  if (productItem === undefined) {
    saveToLocal();
  } else {
    productItem = loadedData;
  }
}
function loadCategory() {
  let loadedData = JSON.parse(localStorage.getItem("allCategory"));
  if (productItem === undefined) {
    saveToLocal();
  } else {
    allCategory = loadedData;
  }
}
function addCategory(data) {
  const opt = document.createElement("option");
  opt.setAttribute("value", data.name);
  opt.textContent = data.name;
  filterCategory.appendChild(opt);
}
function addCategory1(data) {
  const opt = document.createElement("option");
  opt.setAttribute("value", data.name);
  opt.textContent = data.name;
  pCategory.appendChild(opt);
}
loadCategory();
loadData();
for (let category of allCategory) {
  addCategory(category);
  addCategory1(category);
}
function showform() {
  form.classList.toggle("show-form");
}
addFuntion.addEventListener("click", showform);
function getData(e) {
  e.preventDefault();
  let item = {};
  item.name = pName.value;
  item.catgery = pCategory.value;
  item.price = pQuantity.value;
  item.quantity = pQuantity.value;
  item.sellStatus = "";
  productItem.push(item);
  showform();
  saveToLocal();
}
function createTableRow(data, id) {
  const tableRow = document.createElement("tr");
  const tdId = document.createElement("td");
  const tdName = document.createElement("td");
  const tdCategory = document.createElement("td");
  const tdPrice = document.createElement("td");
  const tdQuantity = document.createElement("td");
  const spanQuantity = document.createElement("span");
  const tdAction = document.createElement("td");
  const tdAction1 = document.createElement("td");
  const editBtn = document.createElement("button");
  const removeBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit");
  editBtn.id = id;
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("table-remove");
  removeBtn.id = id;
  tdId.textContent = id;
  tdName.textContent = data.name;
  tdCategory.textContent = data.category;
  tdPrice.textContent = data.price;
  spanQuantity.textContent = data.quantity;
  tdQuantity.appendChild(spanQuantity);
  tdAction.appendChild(editBtn);
  tdAction1.appendChild(removeBtn);
  tableRow.appendChild(tdId);
  tableRow.appendChild(tdName);
  tableRow.appendChild(tdCategory);
  tableRow.appendChild(tdPrice);
  tableRow.appendChild(tdQuantity);
  tableRow.appendChild(tdAction);
  tableRow.appendChild(tdAction1);
  tableBody.appendChild(tableRow);
  id++;
}
addBtn.addEventListener("click", getData);
loadData();
console.log(productItem);
for (let i = 0; i < productItem.length; i++) {
  createTableRow(productItem[i], i);
}
function showAll() {
  for (let tr of tableBody.children) {
    tr.style.display = "table-row";
  }
}
function categoryFilter(e) {
  e.preventDefault();
  for (let tr of tableBody.children) {
    if (tr.children[2].textContent === filterCategory.value) {
      tr.style.display = "table-row";
    } else if (filterCategory.value === "All") {
      showAll();
    } else {
      tr.style.display = "none";
    }
  }
}
const removeBtn = document.querySelectorAll("td .table-remove");
const editBtn = document.querySelectorAll("td .edit");
filterCategory.addEventListener("change", categoryFilter);
console.log(editBtn);
for (let btn of removeBtn) {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.remove();
    productItem.splice(btn.id, 1);
    saveToLocal();
  });
}
function getData(e) {
  e.preventDefault();
  let item = {};
  item.name = pName.value;
  item.category = pCategory.value;
  item.quantity = pQuantity.value;
  item.price = pPrice.value;
  item.sellStatus = "";
  productItem.push(item);
  saveToLocal();
  showform();
}
for (let btn of editBtn) {
  btn.addEventListener("click", () => {
    showform();
    pName.value = productItem[btn.id].name;
    pCategory.value = productItem[btn.id].category;
    pPrice.value = productItem[btn.id].price;
    pQuantity.value = productItem[btn.id].quantity;
    productItem.splice(btn.id, 1);
  });
}
