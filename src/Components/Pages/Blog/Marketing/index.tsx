import React from "react";
import { useNavigate } from "react-router";
import { MarketingWrapper, MarketingHeader, SeeAll } from "./Styled";
import SameSame from "../../Course/SameSame";
const Studentview = () => {
  const navigate = useNavigate();
  const handleCheckout = () => navigate("/CourseDetail");
  return (
    <div>
      <MarketingWrapper>
        <MarketingHeader>
          <h2>Marketing Articles</h2>
          <SeeAll onClick={handleCheckout}>See all</SeeAll>
        </MarketingHeader>
        <SameSame />
      </MarketingWrapper>
    </div>
  );
};

export default Studentview;
