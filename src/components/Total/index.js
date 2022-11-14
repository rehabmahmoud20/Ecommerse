import { useSelector } from "react-redux/es";

const Total = () => {
  const globalIncreseCount = useSelector((state) => state.counter.count)
    return (
        <section className="component-height d-flex justify-content-center align-items-center">
        <p className="text-uppercase fs-1 light text-center ">Total supports : {globalIncreseCount} $</p>

        </section>
    );
  };
  export default Total;
