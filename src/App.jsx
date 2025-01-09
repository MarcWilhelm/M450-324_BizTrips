import React, {useState} from "react";
import "./App.css";

import Footer from "./Footer";
import Header from "./Header";
import TripList from "./components/TripList";
import Wishlist from "./components/Wishlist";
import {addToWishlist} from "./utlis/addToWishlist";
import {deleteItemWishlist} from "./utlis/deleteItemWishlist";


export default function App() {
    const [wishlist, setWishlist] = useState([]); // [1,2,3,4,5];


    // wishlist functions
    function addTripToWishlist(trip) {
        setWishlist(addToWishlist(trip, wishlist));
    }


    function removeFromWishlist(id) {
        setWishlist(deleteItemWishlist(id,wishlist));
    }


    function clearWishlist() {
        setWishlist([]);
    }


// if month selected then filter the trips from month === month

// if error then throw the error

// shorthand for react fragment
    return (
        <>
            <div>
                <Header/>
                <main>
                    <h1>Welcome to biztrips Happy new Year-react - 2024</h1>

                    <Wishlist wishlist={wishlist} removeFromWishlist={ removeFromWishlist}
                              clearWishlist={() => clearWishlist()}/>
                    {/*   <WishList />*/}
                    <TripList addTripToWishlist={addTripToWishlist}/>

                </main>
            </div>
            <Footer/>
        </>
    );
}
