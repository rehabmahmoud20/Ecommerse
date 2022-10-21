import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Product";

const Home = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setProducts(data);
  };
  if (!products) {
    return (
      <div className="row justify-content-center">
        <div className="col-md-2">
        <div className="spinner-border text-info " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        </div>
       
        ;
      </div>
    );
  }

  return (
    <div className="row  gy-3">
      {products.map((e) => (
        <Product product={e} key={e.id} />
      ))}
    </div>
  );
};
export default Home;
