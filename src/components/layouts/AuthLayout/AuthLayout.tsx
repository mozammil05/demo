import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../../common/Header/Header";
import LoaderComponent from "../../common/LoaderComponent/LoaderComponent";
import Sidebar from "../../common/Sidebar/Sidebar";
import "./AuthLayout.scss";

const AuthLayout = () => {
  const [unLockSidebar, setUnLockSidebar] = useState(false);
  const [lockSidebar, setLockSidebar] = useState(true);

  const [active, setActive] = useState(false);
  const handleSidebar = () => setActive(!active);
  const handleLockSidebar = () => {
    setLockSidebar(!lockSidebar);
    setUnLockSidebar(!unLockSidebar);
  };
  return (
    <>
      <div
        className={`auth_layout ${lockSidebar ? "unlock_sidebar" : ""} ${
          active ? "sidebar_active" : ""
        }`}
      >
        <Sidebar
          active={active}
          handleSidebar={handleSidebar}
          lockSidebar={lockSidebar}
          handleLockSidebar={handleLockSidebar}
        />
        <div className="auth_layout_inner">
          <Container fluid>
            <Header active={active} handleSidebar={handleSidebar} />
            <Outlet />
          </Container>
        </div>
        <LoaderComponent />
      </div>
    </>
  );
};

export default AuthLayout;
