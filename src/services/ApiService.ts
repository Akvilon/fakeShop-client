
import { Product } from '../redux/features/products/types'
import serverApi from '../utils/axios'
import axios, { AxiosError } from 'axios'
import { getMeReturnedType, LoginUserReturnedType, RegisterUserReturnedType, ServerError } from './types'
import { getLocalStorage } from '../utils/storage'

export class ApiService {
    public static getProducts = async (): Promise<Array<Product> | ServerError> => {
        try {
            const response = await serverApi.get<Array<Product>>('/products')
            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const serverError = error as AxiosError<ServerError>;
                if (serverError && serverError.response) {
                    console.log(serverError.response.data)
                    return serverError.response.data;
                }
            }
            return { message: "something went wrong" };
        }
    }

    public static registerUser = async (email: string, password: string): Promise<RegisterUserReturnedType | ServerError> => {
        try {
            const { data } = await serverApi.post<RegisterUserReturnedType>('/auth/register', {email, password})
            return data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const serverError = error as AxiosError<ServerError>;
                if (serverError && serverError.response) {
                    console.log(serverError.response.data)
                    return serverError.response.data;
                }
            }
            return { message: "something went wrong" };
        }
    }

    public static loginUser = async (email: string, password: string): Promise<LoginUserReturnedType | ServerError> => {
        try {
            const { data } = await serverApi.post<LoginUserReturnedType>('/auth/login', {email, password})
            return data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const serverError = error as AxiosError<ServerError>;
                if (serverError && serverError.response) {
                    console.log(serverError.response.data)
                    return serverError.response.data;
                }
            }
            return { message: "something went wrong" };
        }
    }

    public static getMe = async (): Promise<getMeReturnedType | ServerError> => {
        try {
            const token = getLocalStorage('TOKEN')
            const { data } = await serverApi.get<getMeReturnedType>('/auth/me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const serverError = error as AxiosError<ServerError>;
                if (serverError && serverError.response) {
                    console.log(serverError.response.data)
                    return serverError.response.data;
                }
            }
            return { message: "something went wrong" };
        }
    }
}