import { Login } from './Login'
import { renderWithProviders } from '../../../test/providerUtils'
import { act, fireEvent, getByTestId, getByText, queryByTestId } from '@testing-library/react'

describe('Login', () => {
    let container: HTMLElement;

    beforeEach(() => {
        const renderedLogin = renderWithProviders(<Login />)
        container = renderedLogin.container
    })
    it('renders login form with inputs', () => {
        expect(getByTestId(container, 'login_form')).toBeInTheDocument()
        expect(getByTestId(container, 'login_email_input')).toBeInTheDocument();
        expect(getByTestId(container, 'login_password_input')).toBeInTheDocument();
    });

    it('checks email validation',async () => {
        const emailInput = getByTestId(container, 'login_email_input')
        const submitBtn = getByText(container, 'Log in')

        expect(queryByTestId(container, 'email_error_message')).not.toBeInTheDocument()

        await act(async () => {
            fireEvent.change(emailInput, {
                target: {value: 'test123'}
            })

            fireEvent.click(submitBtn)
        })

        expect(emailInput).toHaveDisplayValue('test123')

        expect(getByTestId(container, 'email_error_message')).toBeInTheDocument()
    });
})