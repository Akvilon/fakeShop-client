import React, {FC} from 'react'
import { Box } from '@chakra-ui/react'

type AuthLogoWrapperProps = {
    children: React.ReactNode
}

export const AuthLogoWrapper: FC<AuthLogoWrapperProps> = ({children}) => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            background="#319795"
            borderTopLeftRadius="4px"
            borderTopRightRadius="4px"
            padding="5px 0"
        >
            {children}
        </Box>
    )
}