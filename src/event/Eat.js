import React, { useState, useEffect } from "react";

import Axios from "axios";

function Eat() {
    const [products, setProducts] = useState([]);
  
    const fetchProducts = async () => {
      const { data } = await Axios.get(
        "http://localhost:8000/api/eaats/"
      );
      const products = data['hydra:member'];
      setProducts(products);
      console.log(products);
    };

  
    useEffect(() => {
      fetchProducts();
    }, []);
  
    return (
      <div className="hello">
       {products.map((product) => (
        <p key={product.id}><div class="col-sm" >
        <div class="card"style={{height: "400px",width:"350px"}}>
        <div class="card-body">
        <img src={product.image}style={{height: "280px",width:"280px",}}></img>
        <div class="card-title" style={{fontSize:'30px'}}>{product.name}</div>
        <button type="button" class="btn btn-outline-danger" style={{backgroundColor:''}}>add to cart</button>
       
        </div>
        </div>
        </div></p>
      ))}
      </div>
    );
  }
  
  export default Eat;
  
  