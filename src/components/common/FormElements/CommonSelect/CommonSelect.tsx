import "./CommonSelect.scss";
import { Dropdown, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CommonSelected } from "../../../interfaces/commonLayouts";
import { DropdownIcon } from "../../../../assets/imgs/svgImgs/svgImgs";

const CommonSelect :React.FC<CommonSelected> = (props) => {
  let {
    options,
    className,
    id,
    defaultValue,
    dropIcon,
    selectedField,
    label,
    lastItem,
    SelectTokens,
  } = props;

  const userExpiryTime: any = useSelector(
    (state: any) => state?.user?.orderExpiredDays
  );

  return (
    <div className={`customDropdown ${className}`}>
      {label && <Form.Label>{label}</Form.Label>}
      <Dropdown>
        <Dropdown.Toggle id={id}>
          <div className="toggle_inner">
            {selectedField == "timeField"
              ? userExpiryTime?.label
              : defaultValue?.label}
          </div>
          {dropIcon && (
            <span className="dropdown_icon">
              <DropdownIcon />
            </span>
          )}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <div className="dropdown_menu_inner">
            {options?.map((item) => (
              <Dropdown.Item
                onClick={() =>
                  !item?.isSelected ? SelectTokens(item, selectedField) : null
                }
                // className={
                //   selectedOption?.symbol === item?.symbol ? "active" : ""
                // }
                key={item?.id}
                disabled={item?.isSelected == true}
                className={item?.isSelected == true ? "active" : ""}
              >
                {item?.label}
              </Dropdown.Item>
            ))}
          </div>
          {lastItem && (
            <div className="menu_last_item">
              <Dropdown.Item>{lastItem}</Dropdown.Item>
            </div>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default CommonSelect;
