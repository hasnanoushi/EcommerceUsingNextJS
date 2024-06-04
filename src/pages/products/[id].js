import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import commerce from '../../lib/commerce';
import Layout from '../../components/Layout';
import Image from 'next/image';
import styles from '../../components/Styling.module.css';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const product = await commerce.products.retrieve(id);
        setProduct(product);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
   
      <div>
       
        <img className={styles.img}
                
                src={product.image?.url}
                alt={product.name}
              /> <h1>{product.name}</h1>
        <p>${product.price.formatted}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
   
  );

  function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
  }
};

export default ProductDetail;
