import React, {FC} from 'react'
import { Button } from '@chakra-ui/react'

type RegisterBtnProps = {
    isSubmitting: boolean
}

export const RegisterBtn: FC<RegisterBtnProps> = ({isSubmitting}) => {
    return (
        <Button
            isLoading={isSubmitting}
            type="submit"
            marginTop="30px"
            width="100%"
            background="#319795"
            color="#fff"
        >
            Register
        </Button>
    )
}