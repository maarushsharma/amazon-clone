import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import {useStateValue} from "./StateProvider";
import{auth} from "./firebase";
import {signOut } from "firebase/auth";

function Header() {
    const [{basket,user}, dispatch] = useStateValue();

    const handleAuthentication = () =>{
        if(user){
            signOut(auth);
        }
    }
    return (
        <div className="header">
            <Link to="/Home"> 
            <img className="header__logo" alt="amazon logo" 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png">
            </img>
            </Link> 
            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcons"/>
            </div>

            <div className="header__nav">
                <Link to={!user && "/Login"}>
                <div onClick={handleAuthentication}
                 className="header__option">
                    <span className="header__optionLine1">Hello {!user ? 'Guest' : user.Email}</span>
                    <span className="header__optionLine2">{user?'Sign Out':'Sign In'}</span>
                </div>
                </Link>
                <div className="header__option">
                <span className="header__optionLine1">Return</span>
                    <span className="header__optionLine2">& order</span>
                </div>
                <div className="header__option">
                <span className="header__optionLine1">Your</span>
                    <span className="header__optionLine2">prime</span>
                </div>
                <Link to="/Checkout">
                <div className="ShoppingBasketIcon">
                    <ShoppingBasketIcon/>
                    <span className="header__basketcount">{basket?.length}</span>
                </div>
                </Link>
            </div>

        </div>
    )
}

export default Header
