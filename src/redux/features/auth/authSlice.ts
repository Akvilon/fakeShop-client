import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AuthState, User } from './types'
import { ApiService } from '../../../services'
import { setLocalStorage } from '../../../utils/storage'
import {
    getMeReturnedType,
    LoginUserReturnedType,
    RegisterUserReturnedType,
    ServerError,
} from '../../../services/types'
import { redirect } from 'react-router-dom'


export const initialState: AuthState = {
    user: null,
    token: null,
    isLoading: false,
    message: null,
    isLogin: true
};

export const registerUser = createAsyncThunk<
    RegisterUserReturnedType,
    User,
    {
        rejectValue: ServerError
    }
    >('auth/register',
    async ({email, password}: User, {rejectWithValue}) => {
        const data = await ApiService.registerUser(email, password)
        if('token' in data) {
            setLocalStorage('TOKEN', data.token)
            window.location.href = "/"
            return data
        }
        return rejectWithValue(data)
    }
)

export const loginUser = createAsyncThunk<
    LoginUserReturnedType,
    User,
    {rejectValue: ServerError}
    >('auth/login',
    async ({email, password}: User, {rejectWithValue}) => {
        const data = await ApiService.loginUser(email, password)
        if('token' in data) {
            setLocalStorage('TOKEN', data.token)
            window.location.href = "/"
            return data
        }
        return rejectWithValue(data)
    }
)

export const getMe = createAsyncThunk<
    getMeReturnedType,
    void,
    {rejectValue: ServerError}
    >('auth/getMe',
    async (_, {rejectWithValue}) => {
        const data = await ApiService.getMe()
        if('token' in data) {
            return data
        }
        return rejectWithValue(data)
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsLogin: (state, action) => {
            state.isLogin = action.payload
        },
        logout: (state) => {
            state.user = null
            state.token = null
            state.isLoading = false
            state.message = null
        }
    },
    extraReducers: (builder) => {
        builder
            // Register
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.message = payload.message
                state.user = payload.newUser
                state.token = payload.token
                redirect('/')
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false
                if(action.payload) {
                    state.message = action.payload.message
                }

            })
            // Login
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.message = payload.message
                state.user = payload.user
                state.token = payload.token
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false
                if(action.payload) {
                    state.message = action.payload.message
                }
            })
            // Auth check
            .addCase(getMe.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getMe.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.message = null
                state.user = payload?.user
                state.token = payload?.token
            })
            .addCase(getMe.rejected, (state, action) => {
                state.isLoading = false
                if(action.payload) {
                    state.message = action.payload.message
                }
            })
    }
})

export const {setIsLogin, logout} = authSlice.actions
export default authSlice.reducer