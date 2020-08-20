import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from "./StateProvider";
import {auth} from "./Firebase";

function Header() {
    const [{ basket,user },dispatch] = useStateValue();

    const login = () => {
        if(user){
            auth.signOut();
        }

    }

    return (
      
    <nav className="header">
    
    {/*Amazon Logo*/}
    <Link to="/">
        <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"  alt="" />
    </Link>
    
    {/*Search Bar*/}
    <div className="header_Search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
    </div>

    {/* 3 Links */}

        <div className="header_Nav">

        {/* 1st Link */}
        <Link to={!user && "/login"} className="header_Link">
        <div onClick={login} className="header_Option">
        <span className="header_OptionLineOne">Hello {user?.email}</span>
        <span className="header_OptionLineTwo">{user ?  'Sign Out' : 'Sign In'}</span>

        </div>

        </Link>
    
        {/* 2nd Link */}
        <Link to="/login" className="header_Link">
        <div className="header_Option">
        <span className="header_OptionLineOne">Returns</span>
        <span className="header_OptionLineTwo">& Orders</span>

        </div>

        </Link>

        {/* 3rd Link */}
        <Link to="/login" className="header_Link">
        <div className="header_Option">
        <span className="header_OptionLineOne">Your </span>
        <span className="header_OptionLineTwo">Prime</span>

        </div>

        </Link>

        {/* 4rd Link */}
        <Link to="/Checkout" className="header_Link">
        <div className="header_checkoutOption">
        <ShoppingBasketIcon />
        <span className="header_OptionLineTwo header_basketCount" >{basket?.length}</span>

        </div>

        </Link>
        </div>

    </nav>
    )
}

export default Header;
