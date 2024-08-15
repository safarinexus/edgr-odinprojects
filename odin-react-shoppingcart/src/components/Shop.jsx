import { useState, useEffect } from "react";
import '../styles/Shop.css';

export default function Shop({ items, editCart }) {
    const cards = []
    const [ quantities, setQuantities ] = useState({});

    useEffect(() => {
        items.forEach((item) => {
            setQuantities((prevQuantity) => ({ ...prevQuantity, [item.id]: "0" }));
        })
    }, [items])


    items.forEach(item => {
        const handleChange = (e) =>  {
                if (e.target.value === "" || /^-/.test(e.target.value)) { 
                    setQuantities({...quantities, [item.id]: 0});
                } else {
                    setQuantities({...quantities, [item.id]: Number(e.target.value)});
                }
        }

        const handleIncrement = () => {
            setQuantities({...quantities, [item.id]: (Number(quantities[item.id]) + 1)});
        }

        const handleDecrement = () => {
            if (quantities[item.id] > 0) { 
                setQuantities({...quantities, [item.id]: (Number(quantities[item.id]) - 1)});
            }            
        }

        const handleAdd = () => { 
            editCart(item.id, quantities[item.id]);
        }

        cards.push(
            <div className='item' id={item.id} key={item.id}> 
                <img src={item.image} alt="product image" className='item-img'/>
                <div className='item-text'>
                    <h5 className='item-name'>{item.title}</h5>
                    <h6 className='item-cat'>{item.category}</h6>
                </div>
                <h6 className='item-price'>${item.price}</h6>
                <div className='item-buttons'>
                    <button className='decrement' onClick={handleDecrement}>-</button>
                    <input type="number" className='item-quantity' onChange={handleChange} value={quantities[item.id]} />
                    <button className='increment' onClick={handleIncrement}>+</button>
                    <button className='addtocart' onClick={handleAdd}></button>
                </div>
            </div>
        )
    })

    return (
        <div className="items-container">
            {cards}
        </div>
    )
}