import React, { useCallback } from 'react'
import { Box, Button, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { removeLocalStorage } from '../../utils/storage'
import { logout } from '../../redux/features/auth/authSlice'
import { useNavigate } from 'react-router-dom'


export const Profile = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const userEmail = useAppSelector(state => state.auth.user?.email)

    const logoutHandler = () => {
        dispatch(logout())
        removeLocalStorage('TOKEN')
        navigate('/')
    }
    return (
        <Box display='flex' height="100%">
            <Tabs orientation="vertical" width="100%">
                <TabList width="300px">
                    <Tab>Profile info</Tab>
                    <Button onClick={logoutHandler}>Logout</Button>
                </TabList>

                <TabPanels flexGrow="1">
                    <TabPanel>
                        <p>Welcome!</p>
                        <p>{userEmail}</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}