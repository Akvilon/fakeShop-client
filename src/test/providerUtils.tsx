import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import type { RootState } from '../redux/store'
import { store } from '../redux/store'
import productsSlice from '../redux/features/products/productsSlice'
import authSlice from '../redux/features/auth/authSlice'

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
    preloadedState?: PreloadedState<RootState>
    store?: typeof store
}

export function renderWithProviders(
    ui: React.ReactElement,
    {
        preloadedState,
        store = configureStore({
            reducer: {
                products: productsSlice,
                auth: authSlice
            }, preloadedState }),
        ...renderOptions
    }: ExtendedRenderOptions = {}
) {
    function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
        return <Provider store={store}>{children}</Provider>
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}