import React from "react";
import { useNavigate } from "react-router";
import { MarketingWrapper, MarketingHeader, SeeAll } from "./Styled";
import SameSame from "../SameSame";
const Personal = () => {
  const navigate = useNavigate();
  const handleCheckout = () => navigate("/CourseDetail");
  return (
    <div>
      <MarketingWrapper>
        <MarketingHeader>
          <h2>The course in personal development</h2>
          <SeeAll onClick={handleCheckout}>See all</SeeAll>
        </MarketingHeader>
        <SameSame />
      </MarketingWrapper>
    </div>
  );
};

export default Personal;
