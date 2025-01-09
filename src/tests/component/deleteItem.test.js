// deleteItem.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Wishlist from "../../components/Wishlist";

describe('Wishlist Component', () => {
    const mockWishlist = [
        {
            id: 1,
            title: "BT01",
            description: "San Francisco Trip",
            startTrip: [2021, 2, 13, 0, 0],
            endTrip: [2021, 2, 15, 16, 56]
        },
        {
            id: 2,
            title: "BT02",
            description: "Santa Clara Trip",
            startTrip: [2021, 6, 23, 9, 0],
            endTrip: [2021, 6, 27, 16, 56]
        }
    ];

    test("delete one item from Wishlist", () => {
        const removeFromWishlist = jest.fn();
        const clearWishlist = jest.fn();

        const { container } = render(
            <Wishlist
                wishlist={mockWishlist}
                removeFromWishlist={removeFromWishlist}
                clearWishlist={clearWishlist}
            />
        );

        const deleteButtons = screen.getAllByText('Delete Item');
        fireEvent.click(deleteButtons[0]);

        expect(removeFromWishlist).toHaveBeenCalled();
    });

    test("delete all items from Wishlist", () => {
        const removeFromWishlist = jest.fn();
        const clearWishlist = jest.fn();

        const { container } = render(
            <Wishlist
                wishlist={mockWishlist}
                removeFromWishlist={removeFromWishlist}
                clearWishlist={clearWishlist}
            />
        );

        const emptyButton = screen.getByText('empty wishlist');
        fireEvent.click(emptyButton);

        expect(clearWishlist).toHaveBeenCalledTimes(1);
    });
});
