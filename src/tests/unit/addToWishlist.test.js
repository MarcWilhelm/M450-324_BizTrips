const {addToWishlist} = require("../../App")
const { render,screen} = require("@testing-library/react");
const TripList = require("../../components/TripList");

test("add Item to Wishlist", () => {
    render(<TripList/>)
    const trip = {
        id: 1,
        title: "Zürich",
        description: "Biz Trip",
        startTrip: [2021, 2, 13, 0, 0],
        endTrip: [2021, 2, 15, 16, 56],};
    addToWishlist(trip);
    const tripTitle = screen.getByText(/Zürich/);
    expect(tripTitle).toHaveTextContent(/Zürich/);





});