import {addToWishlist} from "../../utlis/addToWishlist";

describe("App Component Wishlist Functionality", () => {
    it("should add a trip to the wishlist when 'addToWishlist' is called", () => {
             // Define a specific trip object
        const trip = {
            id: 1,
            title: "Trip to Paris",
            description: "Enjoy the city of lights",
            startTrip: [2021, 2, 13, 0, 0],
            endTrip: [2021, 2, 15, 16, 56],
        };
        // Verify that the trip was added to the wishlist
        expect(   addToWishlist(trip,[])).toStrictEqual([trip])
    });
});
