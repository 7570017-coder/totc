import React from "react";
import {
  Container,
  HeaderWrapper,
  BackgroundImage,
  HeaderContent,
  Avatar,
  Info,
  Name,
  Title,
  Description,
  Stats,
  StatItem,
  EnrollButton,
  Socials,
  SocialIcon,
} from "./Styled";

import {
  FaRegStar,
  FaRegEye,
  FaRegPlayCircle,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const InstructorHeader: React.FC = () => {
  return (
    <Container>
      <HeaderWrapper>
        <BackgroundImage src="Pic31.png" alt="Background" />

        <HeaderContent>
          <Avatar src="Pic28.3.png" alt="Instructor" />

          <Info>
            <Name>
              John Anderson <EnrollButton>Enroll Now</EnrollButton>
            </Name>
            <Title>Assistant Professor at McMaster University</Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud
            </Description>
            <Stats>
              <StatItem>
                <FaRegStar /> 4.9 Instructor Rating
              </StatItem>
              <StatItem>
                <FaRegEye /> 1,592 Students
              </StatItem>
              <StatItem>
                <FaRegPlayCircle /> 8 Courses
              </StatItem>
              <Socials>
                <SocialIcon href="#">
                  <FaTwitter />
                </SocialIcon>
                <SocialIcon href="#">
                  <FaYoutube />
                </SocialIcon>
                <SocialIcon href="#">
                  <FaInstagram />
                </SocialIcon>
              </Socials>
            </Stats>
          </Info>
        </HeaderContent>
      </HeaderWrapper>
    </Container>
  );
};

export default InstructorHeader;
