import { useSelector } from "react-redux";

const Cart = () => {
  const globalProducts = useSelector((state) => state.cartAmount.products);

  return (
    <>
      {globalProducts.map((e) => {
        return (
          <article className="row light" key={e.id}>
      <div className="col-md-6 mb-5">
        <div className="img-content ">
        <img src={e.image} className="w-75  rounded" alt="product" />
        </div>
      </div>
      <div className="col-md-6 ">
        <div className="discription">
       <p className="fw-bold mb-4 fs-1">{e.title}</p>

       <p className=" mb-5">{e.description}</p>
       <p className=" mb-5 fs-5 text-muted">Rate : {e.rating.rate} ⭐⭐⭐</p>

       <p className="fst-italic fw-bolder text-white fs-2 bg-info rounded p-1">{e.price} EGP</p>
       <p className=" mb-5 fs-3">{e.category}</p>

        </div>
      </div>

    </article>
        );
      })}
    </>
  );
};
<Cart />;
export default Cart;
