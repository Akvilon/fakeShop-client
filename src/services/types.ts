import { User } from '../redux/features/auth/types'

export type ServerError = {
    message: string
}

export type RegisterUserReturnedType = {
    newUser: User,
    token: string,
    message: string
}

export type LoginUserReturnedType = {
    user: User,
    token: string,
    message: string
}

export type getMeReturnedType = {
    token: string,
    user: User
}