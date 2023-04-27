import { ProductItem } from './ProductItem'
import { render, screen } from '@testing-library/react'

describe('ProductItem component', () => {
    const product = {
        _id: 1,
        title: 'title',
        price: 10,
        description: 'description',
        images: ['','',''],
        category: {
            id: 1,
            name: 'category name',
            image: 'image'
        }
    };

    it('should match snapshot', () => {
        const { asFragment } = render(<ProductItem product={product} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render the "Buy now" button with the correct text', () => {
        render(<ProductItem product={product} />);
        const buyButton = screen.getByText(/buy now/i);
        expect(buyButton).toBeInTheDocument();
    });

    it('should render the "Add to cart" button with the correct text', () => {
        render(<ProductItem product={product} />);
        const addButton = screen.getByText(/add to cart/i);
        expect(addButton).toBeInTheDocument();
    });
});