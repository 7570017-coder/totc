import React from "react";
import {
  Section,
  Title,
  Subtitle,
  FeatureRow,
  FeatureImage,
  FeatureContent,
  FeatureTitle,
  FeatureText,
  FeatureList,
  FeatureItem,
  SeeMore,
} from "./Styled";

import AnimatedContent from "../../../UI/AnimatedContent/AnimatedContent";
import Pic4 from "/Pic4.png";
import Pic5 from "/Pic5.png";
import Pic6 from "/Pic6.png";
import Pic7 from "/Pic7.png";
import Pic8 from "/Pic8.png";

import Icon4 from "/Icon4.png";
import Icon5 from "/Icon5.png";
import Icon6 from "/Icon6.png";

const Features = () => {
  return (
    <Section>
      <Title>
        Our <span>Features</span>
      </Title>
      <Subtitle>
        This very extraordinary feature, can make learning activities more
        efficient
      </Subtitle>

      {/* Row 1 */}
      <FeatureRow>
        <FeatureImage src={Pic4} alt="Classroom interface" />
        <FeatureContent>
          <AnimatedContent
            distance={50}
            direction="vertical"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.1}
          >
            <FeatureTitle>
              A <span>user interface</span> designed <br />
              for the classroom
            </FeatureTitle>
            <FeatureList>
              <FeatureItem>
                <img src={Icon4} alt="Icon 4" />
                Teachers don’t get lost in the grid view <br /> and have a
                dedicated Podium space.
              </FeatureItem>
              <FeatureItem>
                <img src={Icon5} alt="Icon 5" />
                TA’s and presenters can be moved to <br /> the front of the
                class.
              </FeatureItem>
              <FeatureItem>
                <img src={Icon6} alt="Icon 6" />
                Teachers can easily see all students <br /> and class data at
                one time.
              </FeatureItem>
            </FeatureList>
          </AnimatedContent>
        </FeatureContent>
      </FeatureRow>

      {/* Row 2 */}
      <FeatureRow reverse>
        <FeatureImage src={Pic5} alt="Tools for teachers" reverse />
        <FeatureContent>
          <AnimatedContent
            distance={50}
            direction="vertical"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.1}
          >
            <FeatureTitle>
              <span>Tools</span> For Teachers <br /> And Learners
            </FeatureTitle>
            <FeatureText>
              Class has a dynamic set of teaching tools built to <br /> be
              deployed and used during class. Teachers can <br /> handout
              assignments in real-time for students to <br /> complete and
              submit.
            </FeatureText>
          </AnimatedContent>
        </FeatureContent>
      </FeatureRow>

      {/* Row 3 */}
      <FeatureRow>
        <FeatureImage src={Pic6} alt="Assessments" />
        <FeatureContent>
          <AnimatedContent
            distance={0}
            direction="horizontal"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <FeatureTitle>
              Assessments, <br /> <span>Quizzes</span>, Tests
            </FeatureTitle>
            <FeatureText>
              Easily launch live assignments, quizzes, and <br /> tests. Student
              results are automatically entered in <br /> the online gradebook.
            </FeatureText>
          </AnimatedContent>
        </FeatureContent>
      </FeatureRow>

      {/* Row 4 */}
      <FeatureRow reverse>
        <FeatureImage src={Pic7} alt="Class management" reverse />
        <FeatureContent>
          <AnimatedContent
            distance={50}
            direction="horizontal"
            reverse={true}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.1}
          >
            <FeatureTitle>
              <span>Class Management</span> <br /> Tools for Educators
            </FeatureTitle>
            <FeatureText>
              Class provides tools to help run and manage the class <br /> such
              as Class Roster, Attendance, and more. With the <br /> Gradebook,
              teachers can review and grade tests and <br /> quizzes in
              real-time.
            </FeatureText>
          </AnimatedContent>
        </FeatureContent>
      </FeatureRow>

      {/* Row 5 */}
      <FeatureRow>
        <FeatureImage src={Pic8} alt="Private Discussion" />
        <FeatureContent>
          <AnimatedContent
            distance={0}
            direction="horizontal"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <FeatureTitle>
              One-on-One <br />
              <span>Discussions</span>
            </FeatureTitle>
            <FeatureText>
              Teachers and teacher assistants can talk with <br /> students
              privately without leaving the Zoom <br /> environment.
            </FeatureText>
          </AnimatedContent>
        </FeatureContent>
      </FeatureRow>

      <SeeMore>See more features</SeeMore>
    </Section>
  );
};

export default Features;
