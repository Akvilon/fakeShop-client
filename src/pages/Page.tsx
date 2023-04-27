import React from 'react'
import Helmet from "react-helmet";
import {Header} from "../components/Header";
import {Box} from "@chakra-ui/react";

type PageProps = {
    title: string
    withHeader?: boolean
    children: React.ReactNode
}

export const Page: React.FC<PageProps> = ({title, withHeader, children}) => {
    return (
        <Box h="100%" display="flex" flexDirection="column">
            <Helmet>
                <title>{title}</title>
            </Helmet>
            {withHeader && <Header/>}
            {children}
        </Box>
    )

}