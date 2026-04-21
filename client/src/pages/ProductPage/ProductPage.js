import "./ProductPage.css";
import Products from "../../data/Products.js";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  const product = Products.find((p) => p.id === id);
  return (
    <div className="product_page">
      <div className="product_left">
        <img src={product.image} alt="" />
      </div>

      <div className="product_right">
        <h2>{product.title}</h2>

        <p className="product_price">₹{product.price}</p>
        <p className="product_desc">
        Product description will be displayed here. This is a placeholder text for the product description. The actual description will be fetched from the database and displayed here. The description will provide details about the product, its features, specifications, and other relevant information that can help the customer make an informed decision about purchasing the product.
        </p>
        <button className="add_to_cart">
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductPage;