import React, {FC} from 'react'
import { Box, Button } from '@chakra-ui/react'
import { useAppDispatch } from '../../../redux/hooks'
import { setIsLogin } from '../../../redux/features/auth/authSlice'

export const GoToLoginForm: FC = () => {
    const dispatch = useAppDispatch()
    const handleClick = () => {
        dispatch(setIsLogin(true))
    }

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginTop="16px">
            <Button
                width="auto"
                padding="0"
                background="transparent"
                color="#319795"
                onClick={handleClick}
                _hover={{ bg: 'none', color: '#319795' }}
            >
                Back to login
            </Button>
        </Box>
    )
}