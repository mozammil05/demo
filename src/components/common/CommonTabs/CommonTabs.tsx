import "./CommonTabs.scss";
import { memo } from "react";
import { Nav, Tab } from "react-bootstrap";
import { CommonTab } from "../../interfaces/commonLayouts";
import { useSelector } from "react-redux";

const CommonTabs :React.FC<CommonTab> = (props) => {
  const { defaultKey, tabs, handleOderTabs, type } = props;
  const oderCardTab: any = useSelector(
    (state: any) => state?.user?.oderCardTab
  );

  return (
    <div className="common_tabs">
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey={type == 1 ? defaultKey : oderCardTab || tabs[0].eventKey}
      >
        <Nav>
          {tabs?.map((item) => (
            <Nav.Item key={item.eventKey} onClick={() => handleOderTabs(item)}>
              <Nav.Link eventKey={item.eventKey}>{item.title}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
        <Tab.Content>
          {tabs?.map((item) => (
            <Tab.Pane key={item.eventKey} eventKey={item.eventKey}>
              {item.content}
            </Tab.Pane>
          ))}
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default CommonTabs;
