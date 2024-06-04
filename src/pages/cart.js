
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import styles from '../components/Styling.module.css';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <Layout>
      <div >
     
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : ( 
          <div className={styles.prod}>
            {cart.map((item, index) => (
              <div className={styles.card} key={index}>
                <div><img className={styles.img}  src={item.image?.url}
                alt={item.name}
              /> </div>
                <div>{item.name} </div>
                 <div>${item.price.formatted}{' '}</div>
                <button onClick={() => removeFromCart(index)}>Remove From Cart</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;

