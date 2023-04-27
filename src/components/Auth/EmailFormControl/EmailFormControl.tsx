import React, { FC, useMemo } from 'react'
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { authValidationSchema } from '../Utils/AuthValidationSchema'
import { useForm } from 'react-hook-form'
import { AuthFormValues } from '../types'
import { yupResolver } from '@hookform/resolvers/yup'


export const EmailFormControl: FC = () => {

    const validationSchema = useMemo(() => {
        return authValidationSchema()
    }, [])

    const {
        formState: {errors},
        register
    } = useForm<AuthFormValues>({
        resolver: yupResolver(validationSchema)
    })

    return (
        <FormControl
            data-testid="login_email_control"
            isInvalid={!!errors.email}
            marginTop="10px"
        >
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input
                id="email"
                placeholder="enter email"
                data-testid="login_email_input"
                autoComplete="on"
                {...register('email')}
            />
            <FormErrorMessage data-testid="email_error_message" height="16px">
                {errors.email && errors.email.message}
            </FormErrorMessage>
        </FormControl>
    )
}