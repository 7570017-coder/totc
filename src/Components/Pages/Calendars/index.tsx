import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FaCalendarAlt,
  FaListAlt,
  FaRegCalendarCheck,
  FaChalkboardTeacher,
  FaUsers,
  FaSearch,
  FaBook,
} from "react-icons/fa";

const Wrapper = styled.div`
  padding: 80px 180px 80px 180px;

  @media (max-width: 1200px) {
    padding: 60px 100px 60px 100px;
  }

  @media (max-width: 768px) {
    padding: 40px 50px 40px 50px;
  }

  @media (max-width: 480px) {
    padding: 30px 20px 30px 20px;
  }
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: 60px;

  h1 {
    font-size: 36px;
    font-family: "avenir next lt pro bold", sans-serif;
    color: #2f327d;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    font-family: "avenir next lt pro bold", sans-serif;
    color: #696984;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
`;

const Card = styled(Link)`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  padding: 30px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  height: fit-content;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  }

  h3 {
    font-size: 20px;
    font-family: "avenir next lt pro bold", sans-serif;
    color: #2f327d;
    margin: 15px 0 10px;
  }

  p {
    font-size: 14px;
    font-family: "avenir next lt pro bold", sans-serif;
    color: #696984;
    line-height: 1.4;
  }

  svg {
    font-size: 40px;
    color: #49bbbd;
  }
`;

const Calendars: React.FC = () => {
  return (
    <Wrapper>
      <Hero>
        <h1>Course Calendars</h1>
        <p>
          Manage and explore different calendar views to keep track of your
          lessons, quizzes, and course schedules. Choose a calendar type below
          to get started.
        </p>
      </Hero>

      <CardGrid>
        <Card to="/CourseCalendar">
          <FaCalendarAlt />
          <h3>Course Calendar</h3>
          <p>View the overall schedule and milestones of your course.</p>
        </Card>

        <Card to="/CourseCalendar1">
          <FaListAlt />
          <h3>Course Calendar 1</h3>
          <p>Track lessons and assignments in a structured list view.</p>
        </Card>

        <Card to="/CourseCalendar2">
          <FaRegCalendarCheck />
          <h3>Course Calendar 2</h3>
          <p>Check deadlines, submissions, and exam schedules with ease.</p>
        </Card>

        <Card to="/CourseFullView">
          <FaChalkboardTeacher />
          <h3>Course Full View</h3>
          <p>Explore a complete detailed breakdown of the course content.</p>
        </Card>

        <Card to="/Meeting">
          <FaUsers />
          <h3>Meeting</h3>
          <p>Schedule and manage your team meetings and collaborations.</p>
        </Card>

        <Card to="/Search">
          <FaSearch />
          <h3>Search</h3>
          <p>
            Quickly find courses, lessons, and resources across your calendar.
          </p>
        </Card>

        <Card to="/LiteratureCourse">
          <FaBook />
          <h3>Literature Course</h3>
          <p>Access literature course materials, readings, and schedules.</p>
        </Card>
      </CardGrid>
    </Wrapper>
  );
};

export default Calendars;
