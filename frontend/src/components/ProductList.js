
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard'; 
import '../style/ProductList.css'; 

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:6500/api/products');
        setProducts(response.data); 
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to fetch products. Please try again later.');
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>; 
  if (error) return <div>{error}</div>; 

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products">
        {products.map(product => (
          <ProductCard key={product._id} product={product} /> 
        ))}
      </div>
    </div>
  );
};

export default ProductList;

