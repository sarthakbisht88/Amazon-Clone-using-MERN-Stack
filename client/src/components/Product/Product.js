import "./Product.css";

function Product({title, price, image}) {
    return (
        <div className="Product">
            <img src={image} alt={title} />
            <div className="ProductInfo"> 
                <p> {title} </p>
                <p className="Price"> ₹{price} </p>
            </div>
            <button> Add to Cart </button>
        </div>
    );
}

export default Product;