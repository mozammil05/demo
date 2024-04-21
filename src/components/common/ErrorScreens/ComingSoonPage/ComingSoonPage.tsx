import React from "react";
import { ComingSoon } from "../../../../assets/imgs/svgImgs/svgImgs";
import "./ComingSoonPage.scss";

const ComingSoonPage = () => {
  return (
    <div className="coming_soon_page">
      <span className="coming_soon_page_inner">
        <ComingSoon />
      </span>
      <h2>Coming Soon</h2>
    </div>
  );
};

export default ComingSoonPage;
