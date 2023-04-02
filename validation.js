import {getProductById} from "./api.js";

const form = document.getElementById("order-form");
const orderItem = document.getElementById("order-item");
const section = document.getElementById("order-section");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Validate name field
    const nameInput = form.elements["name"];
    const nameValue = nameInput.value.trim();
    if (nameValue.length < 2 || nameValue.length > 50) {
        alert("Name must be between 2 and 50 characters.");
        return;
    }

    // Validate email field
    const emailInput = form.elements["email"];
    const emailValue = emailInput.value.trim();
    if (!emailValue.includes("@") || emailValue.length > 50) {
        alert("Email must contain @ and be less than 50 characters.");
        return;
    }

    // Validate phone field
    const phoneInput = form.elements["phone"];
    const phoneValue = phoneInput.value.trim();
    if (phoneValue.length < 10 || phoneValue.length > 50) {
        alert("Phone number must be between 10 and 50 characters.");
        return;
    }

    // Validate address field
    const addressInput = form.elements["address"];
    const addressValue = addressInput.value.trim();
    if (addressValue.length < 4 || addressValue.length > 50) {
        alert("Address must be between 4 and 50 characters.");
        return;
    }

    // Validate postal code field
    const postalCodeInput = form.elements["postal-code"];
    const postalCodeValue = postalCodeInput.value.trim();
    if (!postalCodeValue.match(/^\d{3}\s\d{2}$/)) {
        alert("Postal code must be in the format NNN NN.");
        return;
    }

    // Validate city field
    const cityInput = form.elements["city"];
    const cityValue = cityInput.value.trim();
    if (cityValue.length < 2 || cityValue.length > 50) {
        alert("City must be between 2 and 50 characters.");
        return;
    }

    // If all fields are valid, submit the form
    alert("Your order has been submitted.");
    form.reset();
    window.location.href = "index.html";
    localStorage.removeItem('productId');
});


async function initProduct() {
    const productId = localStorage.getItem('productId');
    console.log(productId)
    if (!productId) {
        console.log("No product id found in local storage.")
        section.innerHTML = `
            <h2>Product not found</h2>
            <p>Sorry, we couldn't find the product you were looking for.</p>
        `
        return;
    }
    const product = await getProductById(productId);
    console.log(product)
    form.insertAdjacentHTML("afterend",  `
        <div id="order-item">
            <img class="product-image" src="${product.image}" alt="product image">
            <div class="product-info">
                <h3>${product.title}</h3>
                <p>Total: $${product.price}</p>
            </div>
        </div>
       
    `);
}

initProduct();


// makes this file a module
export {};
