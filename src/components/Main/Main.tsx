import React from 'react'
import {Box} from "@chakra-ui/react";
import {Sidebar} from "./Sidebar";
import {Content} from "./Content";

export const Main: React.FC = () => {
    return (
        <Box display="flex" width="100%" flexGrow="1">
            <Sidebar />
            <Content />
        </Box>
    )
}