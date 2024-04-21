import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LoaderComponent as Types } from "../../interfaces/commonLayouts";
import "./LoaderComponent.scss";

const LoaderComponent :React.FC<Types> = ({ className }) => {
  const loader: any = useSelector((state: any) => state?.user?.showLoader);

  return (
    <>
      {loader ? (
        <div className={`loader_component ${className}`}>
          <Spinner animation="border" />
        </div>
      ) : null}
    </>
  );
};

export default LoaderComponent;
