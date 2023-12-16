const categoryContainer = document.querySelector(".category-Container");
const productCategory = document.getElementById("product-category");
const productDescription = document.getElementById("product-description");
const addCategoryBtn = document.querySelector(".add");
let id = 0;
let allCategory = [];
function saveCategory(data) {
  localStorage.setItem("allCategory", JSON.stringify(data));
}
// load databack
function loadCategory() {
  let loadedCategory = JSON.parse(localStorage.getItem("allCategory"));
  if (allCategory === undefined) {
    saveCategory(allCategory);
  } else {
    allCategory = loadedCategory;
  }
}
function getCategory(e) {
  e.preventDefault();
  const categoryItem = {};
  categoryItem.name = productCategory.value;
  categoryItem.description = productDescription.value;
  allCategory.push(categoryItem);
  saveCategory(allCategory);
}
function createCategory(data, id) {
  const tableRow = document.createElement("tr");
  const tdId = document.createElement("td");
  const category = document.createElement("td");
  const cDescription = document.createElement("td");
  const cAction = document.createElement("td");
  const cAction1 = document.createElement("td");
  const cEditBtn = document.createElement("button");
  const cDeleteBtn = document.createElement("button");
  cEditBtn.textContent = "Edit";
  cEditBtn.classList.add("edit");
  cDeleteBtn.textContent = "Remove";
  cDeleteBtn.classList.add("remove");
  tdId.textContent = id;
  category.textContent = data.name;
  cDescription.textContent = data.description;
  cAction.appendChild(cEditBtn);
  cAction1.appendChild(cDeleteBtn);
  tableRow.appendChild(tdId);
  tableRow.appendChild(category);
  tableRow.appendChild(cDescription);
  tableRow.appendChild(cAction);
  tableRow.appendChild(cAction1);
  categoryContainer.appendChild(tableRow);
}
addCategoryBtn.addEventListener("click", getCategory);
loadCategory();
for (let i = 0; i < allCategory.length; i++) {
  createCategory(allCategory[i], i);
}
const removeBtn = document.querySelectorAll(".remove");
console.log(removeBtn);
