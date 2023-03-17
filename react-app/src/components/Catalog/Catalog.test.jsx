import React from 'react';
import { render } from 'react-test-renderer';
import { Catalog } from './Catalog';

describe('Catalog', () => {
    it('renders correctly', () => {
        const component = render(<Catalog />);
        expect(component).toMatchSnapshot();
    });
});
import React from 'react';
import { render } from 'react-test-renderer';
import { Catalog } from './Catalog';

describe('Catalog', () => {
    const userDataArray = [
        {
            firstName: 'John',
            lastName: 'Doe',
            available: true,
            phone: '1234567890',
            email: 'john.doe@example.com',
            image: 'https://example.com/image.jpg',
            location: 'New York, USA',
        },
        {
            firstName: 'Jane',
            lastName: 'Doe',
            available: false,
            phone: '1234567890',
            email: 'jane.doe@example.com',
            image: 'https://example.com/image.jpg',
            location: 'Los Angeles, USA',
        },
    ];

    it('filters the data correctly', () => {
        const component = render(<Catalog props="john" userDataArray={userDataArray} />);
        expect(component.toJSON().children).toHaveLength(1);
    });
});