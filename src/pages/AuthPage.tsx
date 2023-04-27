import { Page } from './Page'
import React from 'react'
import { Auth } from '../components/Auth'


export const AuthPage = () => {
    return (
        <Page title="FakeShop | AUTH" withHeader={false}>
            <Auth />
        </Page>
    )
}