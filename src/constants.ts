
export enum PRODUCTS_CATEGORY_ID {
    CLOTHES = 1,
    ELECTRONICS = 2,
    FURNITURE = 3,
    SHOES = 4,
    OTHERS = 5
}
export enum PRODUCTS_CATEGORY_NAME {
    CLOTHES = 'Clothes',
    ELECTRONICS = 'Electronics',
    FURNITURE = 'Furniture',
    SHOES = 'Shoes',
    OTHERS = 'Others'
}

export const tabs = [
    {
        title: PRODUCTS_CATEGORY_NAME.CLOTHES,
        contentId: PRODUCTS_CATEGORY_ID.CLOTHES
    },
    {
        title: PRODUCTS_CATEGORY_NAME.ELECTRONICS,
        contentId: PRODUCTS_CATEGORY_ID.ELECTRONICS
    },
    {
        title: PRODUCTS_CATEGORY_NAME.FURNITURE,
        contentId: PRODUCTS_CATEGORY_ID.FURNITURE
    },
    {
        title: PRODUCTS_CATEGORY_NAME.SHOES,
        contentId: PRODUCTS_CATEGORY_ID.SHOES
    },
    {
        title: PRODUCTS_CATEGORY_NAME.OTHERS,
        contentId: PRODUCTS_CATEGORY_ID.OTHERS
    }
]