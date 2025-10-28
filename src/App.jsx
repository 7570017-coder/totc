import { Routes, Route } from "react-router";
import Landing from "./Page/Landing";
import LayoutAuth from "./Layout/Auth";
import LayoutCommon from "./Layout/Common";
import Login from "./Page/Login";
import Register from "./Page/Register";
import ForgotPassword from "./Page/ForgotPassword";
import Blog from "./Page/Blog";
import Course from "./Page/Course";
import MemberShip from "./Page/MemberShip";
import Checkout from "./Page/Checkout";
import BlogDetail from "./Page/BlogDetail";
import CourseDetail from "./Page/CourseDetail";
import CourseCalendar1 from "./Page/CourseCalendar1";
import CalendarsPage from "./Page/CalendarsPage";
import CourseCalendar from "./Page/CourseCalendar";
import CourseCalendar2 from "./Page/CourseCalendar2";
import CourseFullView from "./Page/CourseFullView";
import Meeting from "./Page/Meeting";
import Search from "./Page/Search";
import LiteratureCourse from "./Page/LiteratureCourse";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<LayoutCommon />}>
          <Route path="/" element={<Landing />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/CourseDetail" element={<CourseDetail />} />
          <Route path="/MemberShip" element={<MemberShip />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/BlogDetail" element={<BlogDetail />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/CalendarsPage" element={<CalendarsPage />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/LiteratureCourse" element={<LiteratureCourse />} />
        </Route>
        {/* Authentication routes - outside LayoutCommon */}
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />{" "}
        {/* Add this line */}
        {/* Other routes */}
        <Route path="/CourseCalendar" element={<CourseCalendar />} />
        <Route path="/CourseCalendar1" element={<CourseCalendar1 />} />
        <Route path="/CourseCalendar2" element={<CourseCalendar2 />} />
        <Route path="/CourseFullView" element={<CourseFullView />} />
        <Route path="/Meeting" element={<Meeting />} />
      </Routes>
    </AuthProvider>
  );
};
export default App;
