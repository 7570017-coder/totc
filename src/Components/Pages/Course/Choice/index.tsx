import React from "react";
import { useNavigate } from "react-router";
import { MarketingWrapper, MarketingHeader, SeeAll } from "./Styled";
import SameSame from "../SameSame";
const Choice = () => {
  const navigate = useNavigate();
  const handleCheckout = () => navigate("/CourseDetail");
  return (
    <div>
      <MarketingWrapper>
        <MarketingHeader>
          <h2>Get choice of your course</h2>
          <SeeAll onClick={handleCheckout}>See all</SeeAll>
        </MarketingHeader>
        <SameSame />
      </MarketingWrapper>
    </div>
  );
};

export default Choice;
