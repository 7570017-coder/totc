import CourseSearch from "../../Components/Pages/Search/SearchBar";
import Subject from "../../Components/Pages/Search/Subject";
import Platform from "../../Components/Pages/Search/Platform";
import Recommended from "../../Components/Pages/Course/Recommended";
import CreatorsSection from "../../Components/Pages/Search/Creators";
import TestimonialSection from "../../Components/Pages/Search/Testimonials";
import Deals from "../../Components/Pages/Checkout/Deals";
const Search = () => {
  return (
    <div>
      <CourseSearch />
      <Subject />
      <Platform />
      <Recommended />
      <CreatorsSection />
      <TestimonialSection />
      <Deals />
    </div>
  );
};

export default Search;
