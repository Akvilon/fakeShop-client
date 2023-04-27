import React from 'react';
import {Page} from "./Page";
import {Main} from "../components/Main";


export const HomePage = () => {
    return (
        <Page title="FakeShop | HOME" withHeader={true}>
            <Main />
        </Page>
    )
}