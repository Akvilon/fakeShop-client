import React, {FC} from 'react'
import { Box } from '@chakra-ui/react'

type AuthFormWrapperProps = {
    children: React.ReactNode
}

export const AuthFormWrapper: FC<AuthFormWrapperProps> = ({children}) => {
    return (
        <Box
            padding="30px 40px 0px 40px"
        >
            {children}
        </Box>
    )
}