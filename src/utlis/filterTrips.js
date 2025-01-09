export function filterTripsByMonth(month, trips){
 return   trips.filter((t) => t.startTrip[1] === parseInt(month))
}