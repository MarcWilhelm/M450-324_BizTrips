export function addToWishlist(trip, wishlist) {
   const {id, title, description, startTrip, endTrip} = trip;
    const tripInWishlist = wishlist.find((t) => t.id === id);
    if (tripInWishlist) {
        return trip;
    } else {
        return [...wishlist, {id, title, description, startTrip, endTrip}];
    }
}