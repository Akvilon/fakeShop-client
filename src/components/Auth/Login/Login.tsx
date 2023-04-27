import React, { FC, useMemo } from 'react'
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { LoginBtn } from './LoginBtn/LoginBtn'
import { AuthFormValues } from '../types'
import { loginUser } from '../../../redux/features/auth/authSlice'
import { useAppDispatch } from '../../../redux/hooks'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { authValidationSchema } from '../Utils/AuthValidationSchema'
import { GoToRegisterForm } from '../GoToRegisterForm'

type LoginProps = {

}

export const Login: FC<LoginProps> = ({}) => {
    const dispatch = useAppDispatch()

    const validationSchema = useMemo(() => {
        return authValidationSchema()
    }, [])

    const {
        formState: {errors, isSubmitting},
        handleSubmit,
        reset,
        register
    } = useForm<AuthFormValues>({
        resolver: yupResolver(validationSchema)
    })

    const onLoginFormSubmit = ({email, password}: AuthFormValues) => {
        dispatch(loginUser({email, password}))
        reset()
    }
    return (
        <>
            <form onSubmit={handleSubmit(onLoginFormSubmit)} data-testid="login_form">
                <FormControl
                    data-testid="login_email_control"
                    isInvalid={!!errors.email}
                    marginTop="10px"
                >
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Input
                        id="email"
                        data-testid="login_email_input"
                        autoComplete="on"
                        {...register('email')}
                    />
                    <FormErrorMessage data-testid="email_error_message" height="16px">
                        {errors.email && errors.email.message}
                    </FormErrorMessage>
                </FormControl>

                <FormControl
                    data-testid="login_password_control"
                    isInvalid={!!errors.password}
                    marginTop="16px"
                >
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input
                        id="password"
                        data-testid="login_password_input"
                        type="password"
                        autoComplete="on"
                        {...register('password')}
                    />
                    <FormErrorMessage>
                        {errors.password && errors.password.message}
                    </FormErrorMessage>
                </FormControl>

                <LoginBtn isSubmitting={isSubmitting} data-testid="login_submit_btn"/>
            </form>

            <GoToRegisterForm />
        </>
    )
}