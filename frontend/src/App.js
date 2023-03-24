import logo from './logo.svg';
import './App.css';
import { fetchAllProducts } from './lib/sanity/productServices';
import {useEffect, useState} from 'react'
import Frontpage from './pages/Frontpage';
import { Route, Routes } from 'react-router-dom';

function App() {

  // let PROJECT_ID = 'k8oeagab';
  // let DATASET ='production';
  // let QUERY = encodeURIComponent('*[_type == "products"]')
  // // let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
  // let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

  // fetch(URL)
  // .then((results) => results.json()
  // .then(({result})=>{console.log(result)}))

  const [prods, setProds] = useState(null)

  const getProducts = async () => {
    const data = await fetchAllProducts()
    setProds(data)
  }

  useEffect(() =>{
    getProducts()
  }, [])

  console.log(prods)
  return (
    <Routes>
      <Route index element = {<Frontpage products={prods} />} />
    </Routes>
  );
}

export default App;
