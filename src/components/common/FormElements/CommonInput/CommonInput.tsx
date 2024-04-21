import "./CommonInput.scss";
import { memo } from "react";
import { Form } from "react-bootstrap";
import ErrorMsg from "../ErrorMsg/ErrorMsg";
import { CommonInputs } from "../../../interfaces/commonLayouts";
const disabledLetters = ["e", "E","+", "-"];

const CommonInput :React.FC<CommonInputs> = (props) => {
  const {
    type,
    label,
    leftIcon,
    error,
    rightIcon,
    disabled,
    placeholder,
    className,
    value,
    onChange,
    maxLength,
    onKeyDown,
    isEmail
  } = props;

  return (
    <Form.Group className={`${className ? className : ""} common_input`}>
      {label && <Form.Label>{label}</Form.Label>}
      <div
        className={`common_input_inner ${leftIcon ? "leftIconInput" : ""} ${
          rightIcon ? "rightIconInput" : ""
        }`}
      >
        {leftIcon && <span className="leftIcon">{leftIcon}</span>}
        <input
          type={type}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          maxLength={maxLength}
        
          onKeyDown={!isEmail?(evt) => {
            evt.code === "ArrowDown" && evt.preventDefault();
            evt.code === "ArrowUp" && evt.preventDefault();
            disabledLetters.includes(evt.key) && evt.preventDefault();
          }:null}
          onWheel={(e: any) => e.target.blur()}
        />
        {rightIcon && <span className="rightIcon">{rightIcon}</span>}
      </div>
      {error && <ErrorMsg msg={error} />}
    </Form.Group>
  );
};

export default CommonInput;
