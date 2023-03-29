// variables ---------------------------------------------------
let allProducts = [];
const filters = {
  searchItems: "",
};
const searchInput = document.querySelector("#search");

// DOM CONTENT LOADED ----------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  axios.get("http://localhost:3000/items").then((res) => {
    renderProducts(res.data, filters);
    allProducts = res.data;

    console.log(res.data);
  });
});

// functions ------------------------------------------------------
function renderProducts(_product, _filters) {
  const filterdProducts = _product.filter((p) => {
    return p.title?.toLowerCase().includes(_filters.searchItems?.toLowerCase());
  });
  console.log(filterdProducts);
}

// EVENTs ----------------------------------------------------------------------
searchInput.addEventListener("input", (e) => {
  filters.searchItems = e.target.value;
  renderProducts(allProducts, filters);
  console.log(e.target.value);
});
``;
