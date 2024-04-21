import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/imgs/logo/logo-light.svg";
import {
  SidebarTradeIcon,
  SidebarPortFolioIcon,
  SidebarEarnIcon,
  SidebarGovernance,
  SidebarAnalytics,
  SidebarEducation,
  SidebarSupport,
  LockOpenIcon,
  LockIcon,
  BulbIcon,
  OffBulbIcon,
} from "../../../assets/imgs/svgImgs/svgImgs";
import "./Sidebar.scss";

interface Props {
  handleLockSidebar: () => void;
  active: boolean;
  lockSidebar: boolean;
  handleSidebar: () => void;
}

const Sidebar: React.FC<Props> = ({
  handleLockSidebar,
  active,
  lockSidebar,
  handleSidebar,
}) => {
  const [userTheme, setUserTheme] = useState("theme-light");

  const sidebarlinks = [
    {
      id: 1,
      icon: <SidebarTradeIcon />,
      heading: "Trade",
      to: "/auth/",
    },
    {
      id: 2,
      icon: <SidebarPortFolioIcon />,
      heading: "Portfolio",
      to: "/auth/portfolio",
    },
    {
      id: 3,
      icon: <SidebarEarnIcon />,
      heading: "Earn",
      to: "/auth/earn",
    },
    {
      id: 4,
      icon: <SidebarGovernance />,
      heading: "Governance",
      to: "/auth/governance",
    },
    {
      id: 5,
      icon: <SidebarAnalytics />,
      heading: "Analytics",
      to: "/auth/analytics",
    },
    {
      id: 6,
      icon: <SidebarEducation />,
      heading: "Education",
      to: "/auth/education",
    },
    {
      id: 7,
      icon: <SidebarSupport />,
      heading: "Support",
      to: "/auth/support",
    },
  ];

  const changeTheme = () => {
    setUserTheme((prevTheme) =>
      prevTheme === "theme-light" ? "theme-dark" : "theme-light"
    );
  };

  useEffect(() => {
    document.documentElement.className = userTheme;
  }, [userTheme]);

  return (
    <>
      <div
        className={`sidebar_backdrop d-lg-none ${active ? "active" : ""}`}
        onClick={handleSidebar}
      ></div>
      <aside className={`sidebar ${lockSidebar ? "locked" : ""}`}>
        <div className="sidebar_inner">
          <div className="sidebar_inner_header">
            <div className="sidebar_logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="sidebar_inner_body">
            <ul>
              {sidebarlinks.map((item) => (
                <li key={item.id}>
                  <NavLink
                    onClick={handleSidebar}
                    to={item.to}
                    className="nav_link"
                  >
                    <span className="nav_link_icon">{item.icon}</span>
                    <span className="nav_link_text">{item.heading}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="sidebar_inner_footer">
            <div>
              <button
                title="Lock Sidebar"
                className="d-lg-block d-none"
                onClick={handleLockSidebar}
              >
                {lockSidebar ? <LockIcon /> : <LockOpenIcon />}
              </button>
              <button title="Theme Change" onClick={changeTheme}>
                {userTheme === "theme-light" ? <BulbIcon /> : <OffBulbIcon />}
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
