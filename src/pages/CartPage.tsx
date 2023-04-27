import React from 'react';
import {Page} from "./Page";
import {Cart} from "../components/Cart";


export const CartPage = () => {
    return (
        <Page title="FakeShop | CART" withHeader={true}>
            <Cart></Cart>
        </Page>
    )
}