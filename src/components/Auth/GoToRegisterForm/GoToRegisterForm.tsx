import React, {FC} from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import { useAppDispatch } from '../../../redux/hooks'
import { setIsLogin } from '../../../redux/features/auth/authSlice'

export const GoToRegisterForm: FC = () => {
    const dispatch = useAppDispatch()
    const handleClick = () => {
        dispatch(setIsLogin(false))
    }
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginTop="16px"
        >
            <Text fontSize="12px">Didn't register yet?</Text>
            <Button
                width="auto"
                padding="0"
                background="transparent"
                color="#319795"
                onClick={handleClick}
                _hover={{ bg: 'none', color: '#319795' }}
                marginLeft="16px"
            >
                Register
            </Button>
        </Box>
    )
}