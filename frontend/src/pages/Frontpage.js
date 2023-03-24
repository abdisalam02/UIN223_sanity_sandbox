import ProductCard from "../components/productCard"

export default function Frontpage ({products}){
    return(
     <>
    <h1>Innhold fra Sanity</h1>
    {products?.map((p, i) => <ProductCard key={i} productinfo={p}/>)}
     </>

    )
}