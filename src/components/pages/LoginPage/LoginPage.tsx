import React, { memo, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import lightLogo from "../../../assets/imgs/logo/logo-light.svg";
import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <div className="login_page">
      <Container fluid>
        <Row>
          <Col lg className="d-lg-block d-none">
            <div className="login_page_details">
              <div className="login_logo">
                <img src={lightLogo} alt="" />
              </div>
              <div className="login_details_inner">
                <div className="login_main_heading">
                  <h2>Liberated From Custody</h2>
                  <h2>Free to Make Your Own Destiny</h2>
                </div>
                <div className="login_main_content">
                  <p>
                    Liberty Finance brings you the most advanced trading and
                    investment interface available in the decentralized finance
                    ecosystem. Welcome to the future of financial freedom.
                  </p>
                  <a
                    href="https://libfi.io/"
                    target="_blank"
                    className="bordered common_btn d-inline-block"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={"auto"}>{/* <ConnectWalletBox /> */}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
