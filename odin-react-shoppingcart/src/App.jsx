import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';

export default function App() {
  const { where } = useParams();
  const [ loading, setLoading ] = useState(true); 
  const [ error, setError ] = useState(null);
  const [ items, setItems ] = useState(null); 
  const [ cart, setCart ] = useState({});

  useEffect(() => {
    console.log(cart);
  }, [cart])

  useEffect(() => {

    const fetchData = async () => {
      try { 
        //backup api: https://api.escuelajs.co/api/v1/products
        const res = await fetch('https://fakestoreapi.com/products', { mode: 'cors' });
        if (!res.ok) { 
          throw new Error("response error");
        }
        const data = await res.json();  
        setItems(data);
      } catch (error) { 
        setError(error); 
      } finally { 
        setLoading(false);
      }
    } 

    fetchData();
  }, [])

  if (loading) {return (
    <>
      <Header />
      <h1>Loading..</h1>
    </> 
  )} 

  if (error) {return (
    <>
      <Header />
      <h1>Error: {error.message}</h1>
    </> 
  )} 
  
  console.log(items);

  const editCart = (key, value) => {
    setCart({...cart, [key]: value});
  }

  const cartCount = (() => {
    let res = 0;
    for (const [key, value] of Object.entries(cart)) {
      res += value;
    }
    return res;
  })(); 


  const cartComplex = (() => {
    let complexCart = [];
    for (const [key, value] of Object.entries(cart)) {
        complexCart.push([items[key - 1], value]);
    }
    return complexCart;
  })();

  return (
    <>
      <Header cartComplex={cartComplex} editCart={editCart} cartCount={cartCount} />
      {where === "cart" ? (
        <Cart />
      ) : where === "shop" ?  ( 
        <Shop items={items} editCart={editCart} /> 
      ) : (
        <Home />
      )}
    </>
  )
}