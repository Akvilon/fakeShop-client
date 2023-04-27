import React, {FC} from 'react'
import { Button } from '@chakra-ui/react'

type LoginBtnProps = {
    isSubmitting: boolean
}

export const LoginBtn: FC<LoginBtnProps> = ({isSubmitting}) => {
    return (
        <Button
            isLoading={isSubmitting}
            type="submit"
            marginTop="30px"
            width="100%"
            background="#319795"
            color="#fff"
        >
            Log in
        </Button>
    )
}