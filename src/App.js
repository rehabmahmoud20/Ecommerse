import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import NavContainer from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Productcomponent from "./components/Productcomponent";
import Notfound from "./components/Notfound/Notfound";
import { useState } from "react";
import SupportUs from "./components/SupportUs"
import Total from "./components/Total";


function App() {
  // const [quantity, setQuantity] = useState(0);
  // // setting the quantity of the cart amount
  // const increaseCount = () => {
  //   setQuantity(quantity + 1);
  // };
  return (
    <>
      <BrowserRouter>
      <NavContainer  />
      <section className="container">
      
        <Routes>
          <Route path="" element={<Home  />} />
          <Route path="Productcomponent" element={<Productcomponent />}>
            <Route path=":id" element={<Productcomponent />} />
          </Route>
          <Route path="Total" element={<Total/>} />
          <Route path="cart" element={<Cart />} />

           <Route path="supportUs" element={<SupportUs />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </section>
      
      </BrowserRouter>
    </>
  );
}

export default App;
