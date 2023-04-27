import React, {useEffect, useState} from 'react'
import {Card, CardBody, Text} from "@chakra-ui/react";
import { useAppSelector } from '../../../redux/hooks'

export type NotificationProps = {
    online: boolean
    isShow: boolean
}

export const Notification: React.FC<NotificationProps> = ({ online , isShow}) => {

    const [showNotification, setShowNotification] = useState<boolean>(isShow)
    const [statusNotification, setStatusNotification] = useState<string>('')

    const statusMessage = useAppSelector(state => state.auth.message)

    useEffect(() => {
        if(!isShow) return

        setShowNotification(true)

        const timer = setTimeout(() => {
            setShowNotification(false)
        }, 3000)

        return () => {
            clearTimeout(timer)
        }
    }, [online, isShow]);

    useEffect(() => {
        if(!statusMessage) return

        setStatusNotification(statusMessage)

        const timer = setTimeout(() => {
            setStatusNotification('')
        }, 3000)

        return () => {
            clearTimeout(timer)
        }
    }, [statusMessage])

    const renderMessage = () => {
        const message = online ? 'Application is ONLINE' : 'Application is OFFLINE'
        return (
            <Card position="fixed" bottom="0" left="45%">
                <CardBody>
                    <Text>{message}</Text>
                </CardBody>
            </Card>
        )
    }

    const renderStatusMessage = (serverMessage: string) => {
        return (
            <Card position="fixed" bottom="0">
                <CardBody>
                    <Text>{serverMessage}</Text>
                </CardBody>
            </Card>
        )
    }

    return (
        <>
            {
                showNotification ? renderMessage() : null
            }
            {
                statusNotification.length ? renderStatusMessage(statusNotification) : null
            }
        </>
    )
}