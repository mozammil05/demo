import React from "react";
import "./ComingSoon.scss";
import { ComingSoon as ComingSoonIcon } from "../../../../assets/imgs/svgImgs/svgImgs";
import { comingSoon } from "../../../interfaces/commonLayouts";

const ComingSoon :React.FC<comingSoon> = (props) => {
  const { className, middle, icon } = props;
  return (
    <div className="order_limit">
      <div
        className={`coming__soon ${className} ${middle
          ? "position-xl-absolute top-50 start-50 translate-xl-middle"
          : ""
          }`}
      >
        {icon || <ComingSoonIcon />}
        <h4>Coming Soon</h4>
      </div>
    </div>
  );
};

export default ComingSoon;
