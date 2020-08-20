import React from 'react'
import './Product.css';
import { useStateValue} from "./StateProvider";

function Product({id,title,image,price,rating}) {
    const [{ basket },dispatch] = useStateValue();
    
    const addToBasket = () => {
        //Add Item to Basket
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            }
        })

    };
    
    return (
        <div className="Product">
        <div className="productInfo">
            <p>{title}</p>
            <p className="productPrice"> 
            <small>$</small>
            <strong>{price}</strong>
            </p>
            <div className="productRating">
            {Array(rating)
            .fill()
            .map((_) => (
                <p>⭐</p>
            ))
            }
            </div>
        </div>
            <img  className="productImg" src={image} alt="" />
            <button className="productButton" onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
