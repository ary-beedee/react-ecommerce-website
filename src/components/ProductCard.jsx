import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">

      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <div className="card-buttons">

        <Link to={`/product/${product.id}`}>
          <button>View Details</button>
        </Link>

        <button
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;