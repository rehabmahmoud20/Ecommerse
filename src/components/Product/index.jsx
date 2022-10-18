import { Link } from "react-router-dom";

const Product = (props) => {
  console.log(props);
  const { image, title, price,id} = props.product;
  return (
    <div className="col-md-3 text-center">
      <div className="content h-100">
        <Link to={`/Productcomponent/${id}`}>
          <img src={image} alt="product" className="img-fluid h-50" />
        </Link>
        <p>{title}</p>
        <span className="mb-2 d-block">{price} Egp</span>
        {/* <p>quantity:{props.count}</p>
        <button className="btn btn-success d-block mx-auto" onClick={props.increaseQuantity}>+</button> */}
      </div>
    </div>
  );
};
export default Product;
