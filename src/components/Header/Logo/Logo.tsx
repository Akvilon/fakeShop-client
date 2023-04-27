import React from 'react'
import {Box, Text, Wrap} from "@chakra-ui/react";

export const Logo: React.FC = () => {
    return (
        <Wrap
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            w="100px">
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="100%"
                h="72px"
                w="72px"
                borderLeft="4px solid black"
                borderTop="4px solid transparent"
                borderRight="4px solid black"
                borderBottom="4px solid transparent"
            >
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="100%"
                    h="60px"
                    w="60px"
                    borderLeft="4px solid transparent"
                    borderTop="4px solid black"
                    borderRight="4px solid transparent"
                    borderBottom="4px solid black"
                >
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius='100%'
                        h="48px"
                        w="48px"
                        borderLeft="4px solid black"
                        borderTop="4px solid transparent"
                        borderRight="4px solid black"
                        borderBottom="4px solid transparent"
                    >
                        <Box
                            borderRadius='100%'
                            h="36px"
                            w="36px"
                            borderLeft="4px solid transparent"
                            borderTop="4px solid black"
                            borderRight="4px solid transparent"
                            borderBottom="4px solid black"
                        >
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Text
                position="absolute"
                top='22%'
                left="0"
                right="0"
                color="white"
                fontSize="xl"
                fontWeight="bold"
                whiteSpace="nowrap"
            >
                FakeShop
            </Text>
        </Wrap>
    )
}