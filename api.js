
const QUERY_ELECTRONICS = 'category/electronics'
const QUERY_JEWELERY = 'category/jewelery'
const QUERY_MENS_CLOTHING = 'category/men\'s%20clothing'
const QUERY_WOMENS_CLOTHING = 'category/women\'s%20clothing'

const API_URL = 'https://fakestoreapi.com/products/'


/*

Hämta produkter genoim att kalla på rätt metod och skicka in eventuellt id eller kategori som parameter
Kategorierna som funkar finns i konstanterna ovanför

 */

const getAllProducts = async () => {
    const res = await fetch(API_URL)
    return await res.json()
}

const getProductById = async (id) => {
    const res = await fetch(`${API_URL}${id}`)
    return await res.json()
}

const getProductByCategory = async (category) => {
    const res = await fetch(`${API_URL}${category}`)
    return await res.json()
}

