import "./CommonBtn.scss";
import { CommonButton } from "../../interfaces/commonLayouts";

const CommonBtn : React.FC<CommonButton> = (props) => {
  const {
    className,
    icon,
    disabled,
    rightIcon,
    type,
    heading,
    fluid,
    variant,
    onClick,
    ...rest
  } = props;
  return (
    <button
      disabled={disabled}
      type={type || "button"}
      onClick={onClick}
      className={`common_btn ${className} ${fluid ? "w-100" : ""} ${variant}`}
      {...rest}
    >
      {icon && <span className="common_btn_icon">{icon}</span>}
      {heading}
      {rightIcon && <span className="btn_right_icon">{rightIcon}</span>}
    </button>
  );
};

export default CommonBtn;
