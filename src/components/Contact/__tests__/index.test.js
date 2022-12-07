// __tests__/Contact.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component renders', () => {
    //Does it render?
    it('renders', () => {
        render(<Contact />);
    });
//Create a snapshot to compare
    it ('renders', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot()
    })
// Use data-testid attribute for h1 in ContactForm to match text content "contact me"
    it ('renders', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
    })
// use data-testid to locate <button> to match text "submit"
it ('renders', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('button')).toHaveTextContent('Submit')
})








})
