import {filterTripsByMonth} from "../../utlis/filterTrips";
describe("App Component Wishlist Functionality",() => {
    it("filterByMonthWhereItDoesNotExist", () => {
    const trips = [{
        id: 1,
        title: "Trip to Paris",
        description: "Enjoy the city of lights",
        startTrip: [2021, 2, 13, 0, 0],
        endTrip: [2021, 2, 15, 16, 56],
    }];
    expect(    filterTripsByMonth("1",trips)).toStrictEqual([])
});

    it("filterByMonthWhereItDoesExist", () => {
        const trips = [{
            id: 1,
            title: "BT01",
            description: "San Francisco World Trade Center on new Server/IOT/Client002",
            startTrip: [2021, 2, 13, 0, 0],
            endTrip: [2021, 2, 15, 16, 56],
        }];
        expect(    filterTripsByMonth("2",trips)).toStrictEqual(trips)
    });
})