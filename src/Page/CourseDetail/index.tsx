import React from "react";
import Overview from "../../Components/Pages/CourseDetail/Overview";
import Marketing from "../../Components/Pages/CourseDetail/Marketing";
import TOTC2 from "../../Components/Pages/CourseDetail/TOTC2";
import Offers from "../../Components/Pages/CourseDetail/Offers";

const CourseDetail = () => {
  return (
    <div>
      <Overview />
      <Marketing />
      <TOTC2 />
      <Offers />
    </div>
  );
};

export default CourseDetail;
