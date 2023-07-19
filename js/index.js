import { checkLoginStatus } from "../firebase/checkLoginStatus.js";

checkLoginStatus();

let productList = [];
let cartList = [];

const addToCartBtn = document.getElementById("add-to-cart");
const cartQuantity = document.getElementById("cart-quantity");
const productListElm = document.getElementById("productList");

const handleAddToCart = (event) => {
  const buttonId = event.target.id;
  const productId = buttonId.split("_")[1];
  const productItem = productList.find((product) => product.id == productId);
  cartList.push(productItem);
  cartQuantity.textContent = cartList.length;
};

const handleGetProducts = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=10");
  const data = await res.json();
  productList = data.products;

  productList.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.setAttribute("class", "product-item");
    productItem.style.backgroundImage = `url(${product.thumbnail})`;

    const productName = document.createElement("h3");
    productName.setAttribute("class", "product-name");
    productName.textContent = product.title;

    const productPrice = document.createElement("span");
    productPrice.setAttribute("class", "product-price");
    productPrice.textContent = product.price;

    const addBtn = document.createElement("button");
    addBtn.textContent = "Add to cart";
    addBtn.setAttribute("id", `product_${product.id}`);
    addBtn.addEventListener("click", handleAddToCart);

    productItem.appendChild(productName);
    productItem.appendChild(productPrice);
    productItem.appendChild(addBtn);

    productListElm.appendChild(productItem);
  });
};

handleGetProducts();
