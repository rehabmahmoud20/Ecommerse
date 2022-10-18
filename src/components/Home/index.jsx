import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Product";

const Home = () => {
  const [count, setCount] = useState(0);
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
  const increaseQuantity = ()=>{
    setCount(count + 1)
  }
  return (
    <div className="container">
      <div className="row g-5">
        {products.map((e) => <Product product={e} key={e.id} action="increaseQuantity" count="count" />)}
      </div>
    </div>
  );
};
export default Home;
