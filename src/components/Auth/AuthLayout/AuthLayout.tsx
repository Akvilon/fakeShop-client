import React, {FC} from 'react'
import { Box } from '@chakra-ui/react'

type AuthLayoutProps = {
    children: React.ReactNode
}

export const AuthLayout: FC<AuthLayoutProps> = ({children}) => {
    return (
        <Box
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            {children}
        </Box>
    )
}