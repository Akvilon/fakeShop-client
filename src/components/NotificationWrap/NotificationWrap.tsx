import React from 'react'
import {Notification} from "./Notification";
import {useOnlineState} from "../../hooks/useOnlineState";
import { Box } from '@chakra-ui/react'

export const NotificationWrap: React.FC = () => {
    const {online, isShow} = useOnlineState()

    return (
        <Box display="flex" justifyContent="center">
            <Notification online={online} isShow={isShow}/>
        </Box>
    )
}