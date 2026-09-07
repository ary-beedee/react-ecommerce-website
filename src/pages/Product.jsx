import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function Product() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products?limit=194`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="product-page">

      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <div>

        <h1>{product.title}</h1>

        <p>{product.description}</p>

        <h2>${product.price}</h2>

        <p>⭐ {product.rating}</p>

        <button
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>

      </div>

    </div>
  );
}

export default Product;