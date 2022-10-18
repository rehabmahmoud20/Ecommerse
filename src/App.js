import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import NavContainer from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Productcomponent from "./components/Productcomponent";
import Notfound from "./components/Notfound/Notfound";
import { useState } from "react";




function App() {
  const [quantity,setQuantity] = useState(0);
const increaseCount=()=>{
  setQuantity(quantity + 1)
  console.log(quantity)
} 
  return (
    <>     
      <BrowserRouter>
      <NavContainer  amount={quantity}/>
        <Routes>
          <Route path="" element={<Home increaseAction={increaseCount}/>} />
           
          <Route path="Productcomponent" element={<Productcomponent />}>
           <Route path=":id" element={<Productcomponent />}/>
          </Route>

          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
