import {addToWishlist} from "../../utlis/addToWishlist";

describe("App Component Wishlist Functionality", () => {
    it("should add a trip to the wishlist when 'addToWishlist' is called", () => {
             // Define a specific trip object
        const trip = {
            id: 1,
            title: "Trip to Paris",
            description: "Enjoy the city of lights",
            startTrip: "2024-05-01",
            endTrip: "2024-05-10",
        };
        // Verify that the trip was added to the wishlist
        expect(   addToWishlist(trip,[])).toStrictEqual([trip])
    });
});
