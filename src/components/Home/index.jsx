import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Product";

const Home = (props) => {
  console.log(props)
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setProducts(data);
  };
  if (!products) {
    return <p>not found</p>;
  }

  return (
    <div className="container">
      <div className="row g-5">
        {products.map((e) => <Product product={e} key={e.id} increaseCartAmount= {props.increaseAction} />)}
      </div>
    </div>
  );
};
export default Home;
