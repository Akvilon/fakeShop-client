export type Category = {
    id: number
    name: string
    image: string
}

export type Product = {
    _id: number,
    title: string
    price: number
    description: string
    images: Array<string>
    category: Category
}

export type ProductsState = {
    productsList: Array<Product>
    loading: boolean,
    error: string | undefined
}