import React, { useState, useEffect } from "react";
import "./styles.css";
import Axios from "axios";

function List() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await Axios.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    const products = data;
    setProducts(products);
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
}

export default List;



class Drink extends Component {
  state = { 
      item:{}
   }

  componentDidMount(){
  fetch('http://localhost:8000/api/firstapis')
  .then((response)=>{
      return response.json() })
  .then((result)=>{this.setState({item : result})})}



render() { 
 
      return ( 
          <div>

      </div>
       );
  }
}

export default Drink ;