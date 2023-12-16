let cartItems = [];
function loadCategory() {
  let loadedData = JSON.parse(localStorage.getItem("cartItem"));
  if (productItem === undefined) {
    saveToLocal();
  } else {
    cartItems = loadedData;
  }
}
loadCategory();
