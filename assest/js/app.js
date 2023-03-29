// variables ---------------------------------------------------
let allProducts = [];
const filters = {
  searchItems: "",
};
const searchInput = document.querySelector("#search");
const productCenter = document.querySelector(".products-center");
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
  //
  productCenter.innerHTML = "";
  filterdProducts.forEach((el, index) => {
    // create
    const div = document.createElement("div");
    div.classList.add("product");
    // content
    div.innerHTML = `
    <div class="img-container">
            <img class="product-img" src="assest/${el.image}" "alt="p-${index}" />
          </div>
          <div class="product-desc">
            <p class="product-price">${el.price} $</p>
            <p class="product-title">${el.title}</p>
          </div>
    `;
    // append
    productCenter.appendChild(div);
  });
}

// EVENTs ----------------------------------------------------------------------
searchInput.addEventListener("input", (e) => {
  filters.searchItems = e.target.value;
  renderProducts(allProducts, filters);
  console.log(e.target.value);
});
``;
