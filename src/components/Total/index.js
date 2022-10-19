import { useSelector } from "react-redux/es";

const Total = () => {
  const globalIncreseCount = useSelector((state) => state.counter.count)
    return (
        <>
        <p className="text-uppercase fs-1 light text-center mb-5">Total supports : {globalIncreseCount}</p>

        </>
    );
  };
  export default Total;
//   if(!state.count){state.count -= action.payload}else {return 0;};
