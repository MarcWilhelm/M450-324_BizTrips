export function deleteItemWishlist(id, wishlist){
   console.log(wishlist)
   console.log(id)
   console.log(wishlist.filter((t) => t.id === id));
   return  wishlist.filter((t) => t.id !== id);
}