import React from "react";
import {
  Container,
  Wrapper,
  Left,
  MainImage,
  Right,
  Avatars,
  Avatar,
  Content,
  Name,
  Email,
  Text,
  Socials,
  SocialIcon,
  Title,
} from "./Styled";

import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const TestimonialSection: React.FC = () => {
  return (
    <Container>
      <Title>What our students have to say</Title>

      <Wrapper>
        {/* Left Image */}
        <Left>
          <MainImage src="Pic25.png" alt="Student" />
        </Left>

        {/* Middle Content */}
        <Content>
          <Name>Savannah Nguyen</Name>
          <Email>tanya.hill@example.com</Email>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </Text>

          <Socials>
            <SocialIcon href="#">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="#">
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon href="#">
              <FaInstagram />
            </SocialIcon>
          </Socials>
        </Content>

        {/* Right Avatars */}
        <Right>
          <Avatars>
            <Avatar src="Pic26.2.png" alt="Avatar" />
            <Avatar src="Pic27.2.png" alt="Avatar" />
            <Avatar src="Pic28.2.png" alt="Avatar" />
            <Avatar src="Pic30.png" alt="Avatar" />
          </Avatars>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default TestimonialSection;
