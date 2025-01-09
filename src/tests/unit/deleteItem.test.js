import {deleteItemWishlist} from "../../utlis/deleteItemWishlist";
import {addToWishlist} from "../../utlis/addToWishlist";

test("delete one item from Wishlist", () => {
    const wishlist = [{
        id: 1,
        title: "Trip to Paris",
        description: "Enjoy the city of lights",
        startTrip: [2021, 2, 13, 0, 0],
        endTrip: [2021, 2, 15, 16, 56],
    }];
    expect(deleteItemWishlist(1, wishlist)).toStrictEqual([])
});
