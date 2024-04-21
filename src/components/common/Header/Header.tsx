import React, { memo, useState, useEffect } from "react";
import CommonBtn from "../CommonBtn/CommonBtn";
import "./Header.scss";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { Headers } from "../../interfaces/commonLayouts";
const Header: React.FC<Headers> = (props) => {
  const { handleSidebar, active } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [settingModal, setSettingModal] = useState(false);
  const [disconnectModal, setDisconnectModal] = useState(false);


  return (
    <header className="header">
      <div className="header_inner">
        <div className="header_logo d-lg-none"></div>
        <div className="header_inner_links"></div>
      </div>
      <h1>Header</h1>
    </header>
  );
};

export default Header;
