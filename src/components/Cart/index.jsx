import emptyCart from "../../assets/emptyCart.png";
import { useSelector, useDispatch } from "react-redux";
import {
  updateCartCount,
  decreaseCartCount,
  updateCartArray,
} from "../../Redux/shoppingslice";

const Cart = () => {
  const dispatch = useDispatch();
  const globalProducts = useSelector((state) => state.cartAmount.products);
  const amount = useSelector((state) => state.cartAmount.totalItemQuant);

  // increase the total cart amout value and the item quantity

  const increaseQantity = (prod) => {
    dispatch(updateCartCount(1));
    dispatch(updateCartArray(prod));
  };
  // decrease the total cart amout value and the item quantity
  const decreaseVal = (e) => {
    dispatch(decreaseCartCount(e));
  };

  return (
    <>
      {globalProducts.length ? (
        <>
          {globalProducts.map((e) => {
            return (
              <article className="row light" key={e.id}>
                <div className="col-md-6 mb-5">
                  <div className="img-content ">
                    <img
                      src={e.image}
                      className="w-75  rounded"
                      alt="product"
                    />
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="discription">
                    <p className="fw-bold mb-4 fs-1">{e.title}</p>

                    <p className=" mb-5">{e.description}</p>
                    <p className=" mb-5 fs-5 text-muted">
                      Rate : {e.rating.rate} ⭐⭐⭐
                    </p>

                    <p className="fst-italic fw-bolder text-white fs-2 bg-info rounded p-1">
                      {e.price} EGP
                    </p>
                    <p className=" mb-5 fs-3">{e.category}</p>
                    <div className="actions d-flex">
                      <button
                        className="rounded-circle"
                        onClick={() => decreaseVal(e)}
                      >
                        -
                      </button>
                      <div>{e.quantity}</div>
                      <button
                        className="rounded-circle"
                        onClick={() => increaseQantity(e)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </>
      ) : (
        <div className="row justify-content-center">
          <p className="fs-1 text-light text-center">Cart is empty 😥</p>
          <div className="col-md-6">
            <img src={emptyCart} alt=" empty cart" />
          </div>
        </div>
      )}
    </>
  );
};
<Cart />;
export default Cart;
