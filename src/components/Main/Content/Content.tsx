import React, { useEffect } from 'react'
import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import {tabs} from "../../../constants";
import { ProductsList } from './ProductsList'
import { fetchProducts } from '../../../redux/features/products/productsSlice'

export const Content: React.FC = () => {
    const dispatch = useAppDispatch()
    const products = useAppSelector(state => state.products.productsList)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    return (
        <Tabs variant='unstyled' width="100%">
            <TabList boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)">
                {
                    tabs.map(tab => (
                        <Tab
                            key={tab.title}
                            padding="10px 30px"
                            _selected={{color: "#319795", padding:"10px 30px"}}
                        >
                            {tab.title}
                        </Tab>
                    ))
                }
            </TabList>
            <TabPanels>
                {
                    tabs.map(tab => {
                        return (
                            <TabPanel key={tab.contentId} padding="10px 0">
                                <ProductsList id={tab.contentId} products={products}/>
                            </TabPanel>
                        )
                    })
                }
            </TabPanels>
        </Tabs>
    )
}