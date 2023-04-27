import {Page} from "./Page";
import React from "react";
import {Profile} from "../components/Profile";


export const ProfilePage = () => {
    return (
        <Page title="FakeShop | Profile" withHeader={true}>
            <Profile></Profile>
        </Page>
    )
}