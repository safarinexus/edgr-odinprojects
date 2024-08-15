import '../styles/HoverCart.css';
import { Link } from "react-router-dom";

export default function HoverCart({ cartComplex, isCartVisible, editCart }) { 
    const cartItems = []

    if (cartComplex !== undefined) {
        cartComplex.forEach(item => {

            const handleChange = (e) =>  {
                if (e.target.value === "" || /^-/.test(e.target.value)) { 
                    editCart(item[0].id, 0);
                } else {
                    editCart(item[0].id, Number(e.target.value));
                }
            }   

            const handleRemove = () => { 
                editCart(item[0].id, 0);
            }
    
            const handleIncrement = () => {
                editCart(item[0].id, item[1] + 1);
            }
    
            const handleDecrement = () => {
                if (item[1] > 1) { 
                    editCart(item[0].id, item[1] - 1);
                }            
            }

            if (item[1] !== 0) {
                cartItems.push(
                    <div key={item[0].id} className='cart-item'>
                        <img src={item[0].image} alt="item image" className='cart-item-image'/>
                        <h5 className='cart-item-name'>{item[0].title}</h5>
                        <h6 className='cart-item-desc'>{item[0].category}</h6>
                        <div className='cart-item-buttons'>
                            <button className='decrement' onClick={handleDecrement}>-</button>
                            <input type="number" className='item-quantity' value={item[1]} onChange={handleChange}/>
                            <button className='increment' onClick={handleIncrement}>+</button>
                            <button className='removefromcart' onClick={handleRemove}></button>
                        </div>
                    </div>
                )
            }
        })
    }
    

    

    return (
        <div className={`cart-sidebar${isCartVisible ? "" : '-invisible'}`}>
            <h1>Cart</h1>
            <div className='actual-cart'>
                {cartItems}
            </div>
            <Link to='/cart' className='checkout-button'>Checkout</Link>
        </div>
    )
}