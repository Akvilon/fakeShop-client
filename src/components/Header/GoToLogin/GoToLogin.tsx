import React, { useCallback } from 'react'
import { Box, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const GoToLogin = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/auth', {replace: true}), [navigate]);

    return (
        <Box
            position="absolute"
            bottom="-65px"
            left="-45px"
            background="#fff"
            padding="10px 20px"
            borderRadius="4px"
            boxShadow="0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);"
        >
            <Button
                background="#319795"
                color="#fff"
                onClick={handleOnClick}
            >
                Sign in
            </Button>
        </Box>
    )
}