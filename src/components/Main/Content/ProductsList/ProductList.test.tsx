import { ProductsList } from './ProductsList'
import { store } from '../../../../redux/store'
import { Provider } from 'react-redux'
import { render, waitFor } from '@testing-library/react'


describe('Products List', () => {
    it('should render the list of products by category', async () => {
        const products = [
            {
                _id: 1,
                title: 'Product 1',
                price: 10,
                description: 'description',
                images: ['1','2','3'],
                category: {
                    id: 1,
                    name: 'Category 1',
                    image: '1'
                },
            },
            {
                _id: 2,
                title: 'Product 2',
                price: 10,
                description: 'description',
                images: ['1','2','3'],
                category: {
                    id: 2,
                    name: 'Category 2',
                    image: '1'
                },
            },
            {
                _id: 3,
                title: 'Product 3',
                price: 10,
                description: 'description',
                images: ['1','2','3'],
                category: {
                    id: 1,
                    name: 'Category 1',
                    image: '1'
                },
            },
        ];

        const { getAllByTestId } = render(
            <Provider store={store}>
                <ProductsList id={1} products={products} />
            </Provider>
        );
        await waitFor(() => {
            const productItems = getAllByTestId('product-item');
            expect(productItems.length).toBe(2);
        })
    });
})