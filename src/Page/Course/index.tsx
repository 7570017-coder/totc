import ContinueLearning from "../../Components/Pages/Course/ContinueLearning";
import FavoriteCourse from "../../Components/Pages/Course/FavouriteCourse";
import Choice from "../../Components/Pages/Course/Choice";
import OnlineLesson from "../../Components/Pages/Course/OnlineLesson";
import Personal from "../../Components/Pages/Course/Personal";
import Recommended from "../../Components/Pages/Course/Recommended";
import Studentview from "../../Components/Pages/Course/Studentview";

const Course = () => {
  return (
    <div>
      <ContinueLearning />
      <FavoriteCourse />
      <Recommended />
      <Choice />
      <OnlineLesson />
      <Personal />
      <Studentview />
    </div>
  );
};

export default Course;
