import React, { FC, useMemo } from 'react'
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { AuthFormValues } from '../types'
import { registerUser } from '../../../redux/features/auth/authSlice'
import { useAppDispatch } from '../../../redux/hooks'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { authValidationSchema } from '../Utils/AuthValidationSchema'
import { RegisterBtn } from './RegisterBtn'
import { GoToLoginForm } from '../GoToLoginForm/GoToLoginForm'

type RegisterProps = {

}

export const Register: FC<RegisterProps> = ({}) => {
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

    const onRegisterFormSubmit = ({email, password}: AuthFormValues) => {
        dispatch(registerUser({email, password}))
        reset()
    }
    return (
        <>
            <form onSubmit={handleSubmit(onRegisterFormSubmit)}>
                <FormControl
                    isInvalid={!!errors.email}
                    marginTop="10px"
                >
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Input
                        id="email"
                        autoComplete="on"
                        {...register('email')}
                    />
                    <FormErrorMessage height="16px">
                        {errors.email && errors.email.message}
                    </FormErrorMessage>
                </FormControl>

                <FormControl
                    isInvalid={!!errors.password}
                    marginTop="16px"
                >
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input
                        type="password"
                        autoComplete="on"
                        {...register('password')}
                    />
                    <FormErrorMessage>
                        {errors.password && errors.password.message}
                    </FormErrorMessage>
                </FormControl>

                <RegisterBtn isSubmitting={isSubmitting}/>
            </form>

            <GoToLoginForm />
        </>
    )
}