import React, { memo, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CommonHeading from "../../common/CommonHeading/CommonHeading";
import NewsCard from "../../common/NewsCard/NewsCard";

import "./Dashboard.scss";

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="dashboard_page">
        <CommonHeading headingText="Trading Desk" />

        <Row>
          <Col xxl={3} md={5}></Col>
          <Col xxl={6} md={7}></Col>
          <Col xxl={3}>
            <NewsCard />
          </Col>
          <Col xs={12}></Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
