import React, { MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PageNotFound.scss";

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleGo = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="page-not-found">
      <div className="error_page">
        <div className="error_page_icon">
          <svg
            fill="rgb(255, 255 ,255, 0.6)"
            width="800px"
            height="800px"
            viewBox="0 0 36 36"
            version="1.1"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>sad-face-line</title>
            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z"></path>
            <circle cx="25.16" cy="14.28" r="1.8"></circle>
            <circle cx="11.41" cy="14.28" r="1.8"></circle>
            <path d="M18.16,20a9,9,0,0,0-7.33,3.78,1,1,0,1,0,1.63,1.16,7,7,0,0,1,11.31-.13,1,1,0,0,0,1.6-1.2A9,9,0,0,0,18.16,20Z"></path>
            <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
          </svg>
        </div>
        <h2>404</h2>
        <h3>The page you are looking for can’t be found</h3>
        <p>Check the web address and try again.</p>
        <Link to="/" onClick={handleGo}>
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
