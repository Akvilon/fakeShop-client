import React, { useState } from 'react'
import { Logo } from '../Header/Logo'
import { AuthLayout } from './AuthLayout'
import { AuthWrapper } from './AuthWrapper'
import { AuthLogoWrapper } from './AuthLogoWrapper'
import { AuthFormWrapper } from './AuthFormWrapper'
import { GoHomePageLink } from './GoHomePageLink/GoHomePageLink'
import { Login } from './Login'
import { Register } from './Register'
import { useAppSelector } from '../../redux/hooks'

export const Auth: React.FC = () => {
    const isLogin = useAppSelector(state => state.auth.isLogin)

    return (
        <AuthLayout>
            <AuthWrapper>
                <AuthLogoWrapper>
                    <Logo />
                </AuthLogoWrapper>
                <AuthFormWrapper>
                    {
                        isLogin
                            ? <Login />
                            : <Register />
                    }
                </AuthFormWrapper>

                <GoHomePageLink />
            </AuthWrapper>
        </AuthLayout>
    )
}