import React, {FC} from 'react'
import { Box, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const GoHomePageLink: FC = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            padding="0px 40px 40px 40px"
        >
            <Link to='/'>
                <Text color="#319795" fontWeight="bold">Go to home page</Text>
            </Link>
        </Box>
    )
}