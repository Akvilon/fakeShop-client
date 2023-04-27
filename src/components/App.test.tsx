import App from './App'
import { renderWithProviders } from '../test/providerUtils'
import { getByTestId, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { getMe } from '../redux/features/auth/authSlice'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

describe('App', () => {
    test('dispatches getMe action on mount', () => {
        const { unmount } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            </Provider>
        );
        expect(store.dispatch).toHaveBeenCalledWith(getMe());
        unmount();
    });
});