export function deleteItemWishlist(id, wishlist){
   return  wishlist.filter((t) => t.id !== id);
}