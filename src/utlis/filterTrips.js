export function filterTripsByMonth(month, trips) {
    if (month === "") {
        return trips
    } else {
        return trips.filter((t) => t.startTrip[1] === parseInt(month))
    }
}