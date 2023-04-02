import {getAllProducts, getLimitedProducts, getProductByCategory, getProductById} from './api.js';


const productsList = document.querySelector('#products-list');
const featuredList = document.querySelector('#featured-list');
const filterSelect = document.querySelector('#filter-select');

const QUERY_ELECTRONICS = 'category/electronics';
const QUERY_JEWELERY = 'category/jewelery';
const QUERY_MENS_CLOTHING = 'category/men\'s%20clothing';
const QUERY_WOMENS_CLOTHING = 'category/women\'s%20clothing';


/*

Hämta produkter genoim att kalla på rätt metod och skicka in eventuellt id eller kategori som parameter
Kategorierna som funkar finns i konstanterna ovanför

 */


const renderProducts = (products, target) => {
    target.innerHTML = products.map(product => {
        return `
            <li class="product-item" data-id="${product.id}">
                    <img class="product-image" src="${product.image}" alt="${product.title}">
                    <div class="product-info">
                        <h3>${product.title}</h3>
                        <p>${product.description}</p>
                    </div>
                    <button class="js-buy-button">Buy</button>
            </li>
        `
    }).join("");
}

const renderFeaturedProducts = (products, target) => {
    renderProducts(products, target);
}

const selectHandler = async (e) => {
    const value = e.target.value;

    switch (value) {
        case 'electronics':
            const electronicsProducts = await getProductByCategory(QUERY_ELECTRONICS);
            renderProducts(electronicsProducts, productsList);
            break;
        case 'jewelery':
            const jeweleryProducts = await getProductByCategory(QUERY_JEWELERY);
            renderProducts(jeweleryProducts, productsList);
            break;
        case 'mens-clothing':
            const mensProducts = await getProductByCategory(QUERY_MENS_CLOTHING);
            renderProducts(mensProducts, productsList);
            break;
        case 'womens-clothing':
            const womensProducts = await getProductByCategory(QUERY_WOMENS_CLOTHING);
            renderProducts(womensProducts, productsList);
            break;
        default:
            const allProducts = await getAllProducts();
            renderProducts(allProducts, productsList);
            break;

    }

}


const initPage = async () => {
    const featuredProducts = await getLimitedProducts(3);
    const allProducts = await getAllProducts();

    renderFeaturedProducts(featuredProducts, featuredList)
    renderProducts(allProducts, productsList);
    document.querySelectorAll('.js-buy-button').forEach(button => {
        button.addEventListener('click', buyButtonHandler);
    })
    filterSelect.addEventListener('change', selectHandler);

}

function redirectToValidation() {
    window.location.href = "validation.html";
    
}

function buyButtonHandler(e) {
    const productId = e.target.parentElement.dataset.id;
    localStorage.setItem('productId', productId);
    redirectToValidation();
}
  


initPage();

export {}

