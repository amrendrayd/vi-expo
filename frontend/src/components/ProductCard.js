import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/ProductCard.css'; 

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product._id}`);
  };
  
  return (
    <div className="product-card" onClick={handleClick}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}</p>  
    </div>
  );
};

export default ProductCard;

