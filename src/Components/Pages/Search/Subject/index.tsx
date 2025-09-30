import React from "react";
import { useNavigate } from "react-router";
import { MarketingWrapper } from "./Styled";
import SameSame from "../../Course/SameSame";
const Subject = () => {
  return (
    <div>
      <MarketingWrapper>
        <SameSame />
      </MarketingWrapper>
      <MarketingWrapper>
        <SameSame />
      </MarketingWrapper>
    </div>
  );
};

export default Subject;
