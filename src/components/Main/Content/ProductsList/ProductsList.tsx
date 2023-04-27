import React from 'react'
import { Product } from '../../../../redux/features/products/types'
import {useAppSelector} from "../../../../redux/hooks";
import {Box, Flex, Spinner} from "@chakra-ui/react";
import { PRODUCTS_CATEGORY_ID } from '../../../../constants'
import { ProductItem } from './ProductItem'

type ProductsListPropsType = {
    id: PRODUCTS_CATEGORY_ID
    products: Array<Product>
}

export const ProductsList: React.FC<ProductsListPropsType> = ({id, products}) => {
    const loading = useAppSelector(state => state.products.loading)
    const categoryProductsList = products.filter(p => p.category.id === id)

    if(loading) {
        return <Box w="100%" h="100%" display="flex" alignItems="center" justifyContent="center"><Spinner size="xl"/></Box>
    }

    return (
        <Flex wrap="wrap">
            {
                categoryProductsList.map(p => <ProductItem key={p._id} product={p}/>)
            }
        </Flex>
    )
}