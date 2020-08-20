import React from 'react'
import { useStateValue} from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import CurrencyFormat from "react-currency-format";

function Checkout() {

    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
        <div className="checkoutLeft">
        <img className="checkoutAd" src ="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/AMZN_OutletDeals_Template_March_1500x200_wh_EN.jpg"alt="" />
        
        {basket?.length === 0 ? (
            <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>You have no Items in your basket. To buy one choose from the Products 
            and press the "Add to Basket" next to the item</p>
            </div>
        ) : (
        <div>
            <h2 className="checkoutTitle">Your Shopping Basket</h2>
            {/* List all the checkout products*/}
            {basket.map(item => (
                <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
            ))}
        </div>

        )}
        </div>
        {basket.length > 0 && (
            <div>

         
            <Subtotal />

            </div>


        )}
            
        </div>
    )
}

export default Checkout
