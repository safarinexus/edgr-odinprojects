import '../styles/Header.css';
import logo from '../assets/logo.svg';
import cartIcon from '../assets/cart.svg';
import HoverCart from './HoverCart';
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";

function Header({ cartComplex, editCart, cartCount }) {
    const [ isCartVisible, setIsCartVisible ] = useState(false);

    const makeCartVisible = () => {
        setIsCartVisible(true);
    }

    const makeCartInvisible = () => {
        setIsCartVisible(false);
    }

    return (
        <header> 
            <Link to='/' className='logo-container'>
                <img src={logo} alt="logo" className="logo"></img>
                <h1>Odin Shop</h1> 
            </Link>
            <nav>
                <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
                <NavLink to='/shop' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Shop</NavLink>
            </nav>
            <div
                className="cart-container"
                onMouseEnter={makeCartVisible}
                onMouseLeave={makeCartInvisible}
            >
                <img src={cartIcon} alt="cart logo" className="cart-logo"/>
                {cartCount > 0 ? (<div className="cart-quantity">{cartCount}</div>) : ('') }
                <HoverCart 
                    cartComplex={cartComplex}
                    isCartVisible={isCartVisible}
                    editCart={editCart}
                    onMouseEnter={makeCartVisible}
                    onMouseLeave={makeCartInvisible}
                />
            </div>
        </header>
    )
}

export default Header;