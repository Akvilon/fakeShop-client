
export type User = {
    email: string,
    password: string
}

export type AuthState = {
    user: User | null,
    token: string | null,
    isLoading: boolean,
    message: string | null
    isLogin: boolean
}