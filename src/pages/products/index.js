import { useState, useEffect } from 'react';
import { fetchProducts } from '../../lib/commerce';
import Layout from '../../components/Layout';
import Link from 'next/link';
import styles from '../../components/Styling.module.css';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
    };

    getProducts();
  }, []);

  const handleSearch = (query) => {
    const results = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  const displayProducts = searchResults.length > 0 ? searchResults : products;

  return (
    <Layout onSearch={handleSearch}>
      <div>
        <h1>Products</h1>
        <div className={styles.prod}>
          {displayProducts.map((product) => (
            <div key={product.id} className={styles.card}>
              <Link className={styles.text}href={`/products/${product.id}`}>
                
                <img className={styles.img}
                
                src={product.image?.url}
                alt={product.name}
              />
                  <h2 className={styles.text}>{product.name}</h2>
                  <p className={styles.text}>${product.price.formatted}</p>
                
              </Link>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );

  function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
  }
};

export default ProductsPage;
