import React, {FC} from 'react'
import { Box } from '@chakra-ui/react'

type AuthWrapperProps = {
    children: React.ReactNode
}

export const AuthWrapper: FC<AuthWrapperProps> = ({children}) => {
    return (
        <Box
            width="340px"
            boxShadow="0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);"
            borderRadius="4px"
        >
            {children}
        </Box>
    )
}