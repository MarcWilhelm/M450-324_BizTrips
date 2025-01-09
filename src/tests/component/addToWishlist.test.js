import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import TripList from '../../components/TripList';


describe('CT-01: Add to Wishlist Button', () => {
    test("button should be rendered correctly", () => {
        const mockAddTripToWishlist = jest.fn();
        render(<TripList addTripToWishlist={mockAddTripToWishlist} />);

        const addToWishlistButtons = screen.getAllByText('Add to Wishlist');
        expect(addToWishlistButtons[0]).toBeInTheDocument();

        expect(addToWishlistButtons[0]).toBeEnabled();

        expect(addToWishlistButtons[0]).toHaveClass('btn', 'btn-link', 'btn-outline');
    });

    test("button should be clickable and trigger wishlist update", () => {
        const mockAddTripToWishlist = jest.fn();
        render(<TripList addTripToWishlist={mockAddTripToWishlist} />);

        const addToWishlistButtons = screen.getAllByText('Add to Wishlist');

        fireEvent.click(addToWishlistButtons[0]);
        expect(mockAddTripToWishlist).toHaveBeenCalledTimes(1);

        expect(mockAddTripToWishlist).toHaveBeenCalledWith(
            expect.objectContaining({
                id: 1,
                title: "BT01",
                description: expect.stringContaining("San Francisco World Trade Center")
            })
        );
    });
});