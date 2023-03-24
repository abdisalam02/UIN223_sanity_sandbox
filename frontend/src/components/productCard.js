import { Link } from "react-router-dom";

export default function ProductCard ({productinfo}){
return(
    <article>
        <h2>{productinfo.product_title}</h2>
        <p>Pris:{productinfo.product_price}</p>
        <Link to = {productinfo?.slug?.current}>Les mer</Link>
        {/* <img>{productinfo.Product_image}</img> */}
    </article>
)
}