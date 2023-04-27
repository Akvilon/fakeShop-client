import React from 'react';
import {Page} from "./Page";
import {Favorite} from "../components/Favorite";

export const FavoritePage = () => {
    return (
        <Page title="FakeShop | FAVORITE" withHeader={true}>
            <Favorite></Favorite>
        </Page>
    )
}