import "./CommonHeading.scss";
import { memo } from "react";
import { CommonHeadings } from "../../interfaces/commonLayouts";

const CommonHeading :React.FC<CommonHeadings> = (props) => {
  const { className, headingText } = props;
  return (
    <div className={`common_heading ${className}`}>
      <h2>{headingText}</h2>
    </div>
  );
};

export default CommonHeading;
