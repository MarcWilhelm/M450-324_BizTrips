import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import TripList from "../../components/TripList";

describe('TripList Component', () => {
    test("filterByMonth", () => {
        const addToWishlist = jest.fn();

        render(<TripList addToWishlist={addToWishlist} />);

        const monthFilter = screen.getByLabelText('Filter by Month:');

        fireEvent.change(monthFilter, { target: { value: '2' } });

        const februaryTrips = screen.getByText((content, element) => {
            return element.tagName.toLowerCase() === 'h2' &&
                element.textContent.includes('Found') &&
                element.textContent.includes('1') &&
                element.textContent.includes('trips') &&
                element.textContent.includes('Feb');
        });
        expect(februaryTrips).toBeInTheDocument();

        const februaryTripDesc = screen.getByText(/San Francisco World Trade Center/);
        expect(februaryTripDesc).toBeInTheDocument();

        fireEvent.change(monthFilter, { target: { value: '6' } });

        const juneTrips = screen.getByText((content, element) => {
            return element.tagName.toLowerCase() === 'h2' &&
                element.textContent.includes('Found') &&
                element.textContent.includes('1') &&
                element.textContent.includes('trips') &&
                element.textContent.includes('June');
        });
        expect(juneTrips).toBeInTheDocument();

        const juneTripDesc = screen.getByText(/Santa Clara Halley/);
        expect(juneTripDesc).toBeInTheDocument();
    });
});