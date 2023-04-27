import React, { FC, useMemo } from 'react'
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { authValidationSchema } from '../Utils/AuthValidationSchema'
import { useForm } from 'react-hook-form'
import { AuthFormValues } from '../types'
import { yupResolver } from '@hookform/resolvers/yup'


export const PasswordFormControl: FC = () => {

    const validationSchema = useMemo(() => {
        return authValidationSchema()
    }, [])

    const {
        formState: {errors},
        register
    } = useForm<AuthFormValues>({
        resolver: yupResolver(validationSchema)
    })
    console.log(errors)

    return (
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
    )
}