// __tests__/Modal.test.js
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '../'

const mockToggleModal = jest.fn();

const currentPhoto = {
    name: 'Park Bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

afterEach(cleanup)

describe('Modal component', () => {
    it('renders', () => {
        //baseline render component test
        render(<Modal
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
        />);
    })
it('matches snapshot DOM node structure', () => {
    //Arrange the snapshot - declare variables
    const { asFragment } = render(<Modal
        onClose={mockToggleModal}
        currentPhoto={currentPhoto} 
        />);
    expect(asFragment()).toMatchSnapshot()
    //Assert the match
});
})

describe('Click Event', () => {
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
            />);
        //Act: Simulate click event
        fireEvent.click(getByText('Close this modal'));
        //Assert: expected matcher
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
})