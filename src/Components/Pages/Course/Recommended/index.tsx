import React from "react";
import { useNavigate } from "react-router";
import {
  MarketingWrapper,
  MarketingHeader,
  SeeAll,
  Pagination,
  PageButton,
} from "./Styled";
import SameSame from "../SameSame";
const Recommended = () => {
  const navigate = useNavigate();
  const handleCheckout = () => navigate("/CourseDetail");
  return (
    <div>
      <MarketingWrapper>
        <MarketingHeader>
          <h2>Recommended for you</h2>
          <SeeAll onClick={handleCheckout}>See all</SeeAll>
        </MarketingHeader>
        <SameSame />
        <Pagination>
          <PageButton>{"<"}</PageButton>
          <PageButton>{">"}</PageButton>
        </Pagination>
      </MarketingWrapper>
    </div>
  );
};

export default Recommended;
