import "./CommonTable.scss";
import { Table } from "react-bootstrap";
import { CommonTables } from "../../interfaces/commonLayouts";
import { NoRecordFound, UpArrow } from "../../../assets/imgs/svgImgs/svgImgs";
import { useState } from "react";

const CommonTable :React.FC<CommonTables> = (props) => {
  const { children, fields, setAscDscIndex, ascDscIndex, headerTransparent } =
    props;
  const [temp, setTemp] = useState<any>(true);

  return (
    <div
      className={`common_table ${
        headerTransparent ? "header_transparent" : ""
      }`}
    >
      <Table responsive>
        <thead>
          <tr>
            {fields?.map((item, index) => (
              <th key={index}>
                <div
                  className={`d-flex align-items-center justify-content-${item?.align}`}
                >
                  <p>{item?.label}</p>
                  {item?.label == "ACTIONS" ||
                  item?.label == "POOL" ||
                  item?.label == "Type" ||
                  item?.label == "S.no." ? null : (
                    <div
                      className="arrows"
                      onClick={() => {
                        if (temp == true) {
                          setTemp(false);
                        } else {
                          setTemp(true);
                        }
                        setAscDscIndex({
                          item: item?.label,
                          key: temp == true ? "up" : "down",
                        });
                      }}
                    >
                      <span
                        className={`down_arrow ${
                          ascDscIndex?.item == item?.label &&
                          ascDscIndex?.key == "down"
                            ? "active"
                            : ""
                        }`}
                      >
                        <UpArrow />
                      </span>
                      <span
                        className={`up_arrow ${
                          ascDscIndex?.item == item?.label &&
                          ascDscIndex?.key == "up"
                            ? "active"
                            : ""
                        }`}
                      >
                        <UpArrow />
                      </span>
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {children ? (
            children
          ) : (
            <tr className="no_record">
              <td colSpan={fields?.length}>
                <div>
                  <NoRecordFound />
                  <h4>No Record Found</h4>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default CommonTable;
