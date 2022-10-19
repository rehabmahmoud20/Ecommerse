import { useSelector, useDispatch } from "react-redux";
import BtnActions from "../BtnActions";
import { incrementCount, decrementCount ,reset} from "../../Redux/Counterslice";
import "./supportUs.css";
const SupportUs = () => {
  const dispatch = useDispatch();

  const globalIncreseCount = useSelector((state) => state.counter.count);
  const increase = () => {
    dispatch(incrementCount(5));
  };
  const decrease = () => {
    dispatch(decrementCount(5));
  };
  const resetCounter = () => {
    dispatch(reset());
  };
  return (
    <>
      <section className="content">
        <p className="text-uppercase fs-1 light text-center mb-5">please support us</p>
        <div className="number text-center text-white">{globalIncreseCount}</div>
        <BtnActions
          increase={increase}
          decrease={decrease}
          reset={resetCounter}
        ></BtnActions>
      </section>
    </>
  );
};
export default SupportUs;
