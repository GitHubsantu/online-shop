import App from "../App"
import './Product.css'
function ProductList(props) {
    
    return(
        <div className="product-item">
            <div className="product-title"><h2>{props.title}</h2></div>
            <div className="product-item_price">{props.price}</div>
            <div className="product-item_description">{props.desc}</div>
        </div>
    );
}
export default ProductList