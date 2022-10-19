import { Link } from "react-router-dom";
import { useDispatch,useSelector} from "react-redux";
import { updateCartCount } from "../../Redux/shoppingslice";
import "./Produc.css"

const Product = (props) => {
  const dispatch = useDispatch();
  const useselect = useSelector(state=>state.cartAmount.products)
  const increaseCartVal = (prod) => {
    dispatch(updateCartCount(prod));
  };
  const { image, title, price, id } = props.product;
  return (
 
 <div className="col-md-3  text-center ">
      <div className="content p-2 bg-white border border-rounded  rounded">
        <Link to={`/Productcomponent/${id}`}>
          <div className="mb-3" style={{height:"300px"}}>
          <img src={image} alt="product" className=" w-100 h-100 " />
          </div>
        </Link>
        <div className="text-container">
        <div className="text-content mx-auto w-75">
         {title}
          </div>

        </div>
        <span className="mb-2 d-block fst-italic fw-bold">{price} Egp</span>
        <button className="btn btn-info" onClick={()=>increaseCartVal(props.product)}>
          Add to cart
        </button>
      </div>
    </div>
   
  );
};
export default Product;
