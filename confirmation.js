import { getProductById } from "./api.js";
const productConfirmation = document.querySelector("#product-confirmation");
const orderDetails = document.querySelector("#order-details");



const renderOrderConfirmation = (product) => {

    productConfirmation.innerHTML = `
        <div id="order-item">
            <img class="product-image" src="${product.image}" alt="product image">
            <div class="product-info">
                <h3>${product.title}</h3>
                <p>Total: $${product.price}</p>
            </div>
        </div>
    `;

    const confirmationData = JSON.parse(localStorage.getItem("confirmationData"));

    orderDetails.innerHTML = `
        <h3>Order details</h3>
        <p>Name: ${confirmationData.name}</p>
        <p>Email: ${confirmationData.email}</p>
        <p>Phone: ${confirmationData.phone}</p>
        <p>Address: ${confirmationData.address}</p>
        <p>Postal code: ${confirmationData.postalCode}</p>  
        <p>City: ${confirmationData.city}</p>
        <p>Date: ${new Date().toLocaleDateString()}</p>
    `;


}

const productId = localStorage.getItem('productId');
const product = await getProductById(productId);
renderOrderConfirmation(product);
localStorage.removeItem('productId');
localStorage.removeItem('confirmationData');
export {};
