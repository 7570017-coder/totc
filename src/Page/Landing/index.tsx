import About from "../../Components/Pages/Landing/About";
import Features from "../../Components/Pages/Landing/Features";
import HeroSection from "../../Components/Pages/Landing/HeroSection";
import CloudSoftware from "../../Components/Pages/Landing/CloudSoftware";
import TOTC from "../../Components/Pages/Landing/TOTC";
import TOTC2 from "../../Components/Pages/Landing/TOTC2";
import Course from "../../Components/Pages/Landing/Course";
import Testimonial from "../../Components/Pages/Landing/Testimonial";
import News from "../../Components/Pages/Landing/News";

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <CloudSoftware />
      <TOTC />
      <TOTC2 />
      <Features />
      <Course />
      <Testimonial />
      <News />
    </div>
  );
};

export default Landing;
