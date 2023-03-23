const API_URL = 'https://fakestoreapi.com/products/'


export const getAllProducts = async () => {
    const res = await fetch(API_URL)
    return await res.json()
}

export const getProductById = async (id) => {
    const res = await fetch(`${API_URL}${id}`)
    return await res.json()
}

export const getProductByCategory = async (category) => {
    const res = await fetch(`${API_URL}${category}`)
    return await res.json()
}

export const getLimitedProducts = async (limit) => {
    const res = await fetch(`${API_URL}?limit=${limit}`)
    return await res.json()
}
