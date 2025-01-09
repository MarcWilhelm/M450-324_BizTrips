// src/tests/component/addToWishlist.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import TripList from '../../components/TripList';


describe('CT-01: Add to Wishlist Button', () => {
    test("button should be rendered correctly", () => {
        const mockAddToWishlist = jest.fn();
        render(<TripList addToWishlist={mockAddToWishlist} />);

        const addToWishlistButtons = screen.getAllByText('Add to Wishlist');
        expect(addToWishlistButtons[0]).toBeInTheDocument();

        expect(addToWishlistButtons[0]).toBeEnabled();

        expect(addToWishlistButtons[0]).toHaveClass('btn', 'btn-link', 'btn-outline');
    });

    test("button should be clickable and trigger wishlist update", () => {
        const mockAddToWishlist = jest.fn();
        render(<TripList addToWishlist={mockAddToWishlist} />);

        const addToWishlistButtons = screen.getAllByText('Add to Wishlist');

        fireEvent.click(addToWishlistButtons[0]);
        expect(mockAddToWishlist).toHaveBeenCalledTimes(1);

        expect(mockAddToWishlist).toHaveBeenCalledWith(
            expect.objectContaining({
                id: 1,
                title: "BT01",
                description: expect.stringContaining("San Francisco World Trade Center")
            })
        );
    });
});