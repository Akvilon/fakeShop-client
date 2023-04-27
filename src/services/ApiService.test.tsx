import { ApiService } from './ApiService'
import axios from 'axios';
import { ServerError } from './types'
import serverApi from '../utils/axios'

jest.mock('axios');

describe('ApiService', () => {
    describe('getProducts', () => {
        it('should return list of products', async () => {
            const mockProducts = [
                {
                    id: 4,
                    title: 'Electronic Steel Gloves',
                    price: 87,
                    description: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
                    images: [
                        "https://api.lorem.space/image?w=640&h=480&r=3983",
                        "https://api.lorem.space/image?w=640&h=480&r=159",
                        "https://api.lorem.space/image?w=640&h=480&r=416",
                    ],
                    category: {
                        id: 5,
                        name:"Others",
                        image: "https://api.lorem.space/image?w=640&h=480&r=7723"
                    }
                },
                {
                    id: 5,
                    title: 'Awesome Bronze Mouse',
                    price: 345,
                    description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
                    images: [
                        "https://api.lorem.space/image/fashion?w=640&h=480&r=1543",
                        "https://api.lorem.space/image/fashion?w=640&h=480&r=5428",
                        "https://api.lorem.space/image/fashion?w=640&h=480&r=2273",
                    ],
                    category: {
                        id: 1,
                        name: "Clothes",
                        image: "https://api.lorem.space/image/fashion?w=640&h=480&r=5286",
                    }
                }
            ];

            (axios as jest.Mocked<typeof axios>).get.mockResolvedValueOnce({ data: mockProducts });

            const products = await ApiService.getProducts();

            expect(products).toEqual(mockProducts);
        });
        it('should return a server error', async () => {
            const mockError = { message: 'server error' };

            (axios as jest.Mocked<typeof axios>).get.mockRejectedValueOnce({
                response: {
                    data: mockError,
                },
            });

            const result = await ApiService.getProducts();

            expect(result).toEqual(mockError);
        });
    })
    describe('register', () => {
        it('should return the data when Register is successful', async () => {
            const expectedResponse = {
                newUser: { email: 'test@test.com', password: '12345678' },
                token: '12354rfe65gfg55677abc',
                message: 'Your account has been successfully created',
            };
            const email = 'test@test.com';
            const password = '12345678';

            jest.spyOn(ApiService, 'registerUser').mockResolvedValue(expectedResponse);

            const result = await ApiService.registerUser(email, password);

            expect(ApiService.registerUser).toHaveBeenCalledWith(email, password);
            expect(result).toEqual(expectedResponse);

            jest.restoreAllMocks();
        });

        it('should return server error when user already exists', async () => {
            const email = '13@mail.com';
            const password = 'test@password1';
            const expectedError: ServerError = { message: 'User already exists' };
            const error = {
                response: { data: expectedError, status: 401 },
            };
            jest.spyOn(serverApi, 'post').mockRejectedValueOnce(error);

            const result = await ApiService.registerUser(email, password);

            expect(result).toEqual(expectedError);
        });

        it("should return { message: 'something went wrong' } on unexpected error", async () => {
            const email = 'test@test.com';
            const password = '12345678';

            const error = new Error("Unexpected error occurred.");
            jest.spyOn(serverApi, "post").mockRejectedValueOnce(error);

            const result = await ApiService.registerUser(email, password);

            expect(result).toEqual({ message: "something went wrong" });
            expect(serverApi.post).toHaveBeenCalledWith("/auth/register", { email, password });
        });
    })
    describe('login', () => {
        it('should return the data when Login is successful', async () => {
            const expectedResponse = {
                user: { email: 'test@test.com', password: '12345678' },
                token: '12354rfe65gfg55677abc',
                message: 'Welcome on FakeShop!',
            };
            const email = 'test@test.com';
            const password = '12345678';

            jest.spyOn(ApiService, 'loginUser').mockResolvedValue(expectedResponse);

            const result = await ApiService.loginUser(email, password);

            expect(ApiService.loginUser).toHaveBeenCalledWith(email, password);
            expect(result).toEqual(expectedResponse);

            jest.restoreAllMocks();
        });
    })
})