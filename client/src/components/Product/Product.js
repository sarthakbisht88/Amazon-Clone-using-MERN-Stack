import "./Product.css";
import {Link} from "react-router-dom"; 

function Product({id,title, price, image}) {
    return (
        <Link to={`/product/${id}`}>
        <div className="Product">
            <img src={image} alt={title} />
            <div className="ProductInfo"> 
                <p> {title} </p>
                <p className="Price"> ₹{price} </p>
            </div>
            <button> Add to Cart </button>
        </div>
        </Link>
    );
}

export default Product;