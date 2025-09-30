import React from "react";
import {
  Container,
  TopImage,
  GridWrapper,
  LeftColumn,
  RightColumn,
  PriceBox,
  Price,
  OldPrice,
  Discount,
  Timer,
  BuyButton,
  Features,
  Feature,
  Tabs,
  Tab,
  Reviews,
  RatingBox,
  RatingScore,
  Stars,
  RatingText,
  ProgressBars,
  ProgressRow,
  ProgressBar,
  ReviewCard,
  Avatar,
  ReviewContent,
  ReviewFooter,
  Socials,
  SocialIcon,
  SectionTitle,
  TrainingText,
  ShareWrapper,
  RightColumnWrapper,
} from "./Styled";

import {
  FaStar,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaCamera,
  FaFileAlt,
  FaChartBar,
} from "react-icons/fa";

import { FiClock } from "react-icons/fi";
import { TiStarburst } from "react-icons/ti";

const CourseDetail: React.FC = () => {
  return (
    <Container>
      {/* Top Full Width Image */}
      <TopImage src="Pic21.png" alt="Course Banner" />

      {/* Grid Section */}
      <GridWrapper>
        {/* Left Column */}
        <LeftColumn>
          <Tabs>
            <Tab>Overview</Tab>
            <Tab>Overview</Tab>
            <Tab>Overview</Tab>
            <Tab active>Overview</Tab>
          </Tabs>

          <Reviews>
            <RatingBox>
              <RatingScore>4 out of 5</RatingScore>
              <Stars>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} color="orange" />
                ))}
              </Stars>
              <RatingText>Top Rating</RatingText>
            </RatingBox>

            <ProgressBars>
              {[5, 4, 3, 2, 1].map((num, i) => (
                <ProgressRow key={i}>
                  <span>{num} Stars</span>
                  <ProgressBar width={`${100 - i * 20}%`} />
                </ProgressRow>
              ))}
            </ProgressBars>
          </Reviews>

          <ReviewCard>
            <Avatar src="Pic20.png" alt="User" />
            <ReviewContent>
              <h4>Lina</h4>
              <ReviewFooter>
                <FiClock /> 3 Months
              </ReviewFooter>
              <Stars>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} color="orange" />
                ))}
              </Stars>{" "}
              <p>
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively…
              </p>
            </ReviewContent>
          </ReviewCard>

          <ReviewCard>
            <Avatar src="Pic20.png" alt="User" />
            <ReviewContent>
              <h4>Lina</h4>{" "}
              <ReviewFooter>
                <FiClock /> 3 Months
              </ReviewFooter>
              <p>
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively…
              </p>
            </ReviewContent>
          </ReviewCard>
          <ReviewCard>
            <Avatar src="Pic20.png" alt="User" />
            <ReviewContent>
              <h4>Lina</h4>{" "}
              <ReviewFooter>
                <FiClock /> 3 Months
              </ReviewFooter>
              <p>
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively…
              </p>
            </ReviewContent>
          </ReviewCard>
          <ReviewCard>
            <Avatar src="Pic20.png" alt="User" />
            <ReviewContent>
              <h4>Lina</h4>{" "}
              <ReviewFooter>
                <FiClock /> 3 Months
              </ReviewFooter>
              <p>
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively…
              </p>
            </ReviewContent>
          </ReviewCard>
          <ReviewCard>
            <Avatar src="Pic20.png" alt="User" />
            <ReviewContent>
              <h4>Lina</h4>{" "}
              <ReviewFooter>
                <FiClock /> 3 Months
              </ReviewFooter>
              <p>
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively…
              </p>
            </ReviewContent>
          </ReviewCard>
        </LeftColumn>

        <RightColumnWrapper>
          <RightColumn>
            <img src="Pic21.3.png" alt="Course Thumbnail" />
            <PriceBox>
              <Price>$49.65</Price>
              <OldPrice>$99.99</OldPrice>
              <Discount>50% Off</Discount>
            </PriceBox>
            <Timer>11 hour left at this price</Timer>
            <BuyButton>Buy Now</BuyButton>

            <SectionTitle>This Course included</SectionTitle>
            <Features>
              <Feature>
                <TiStarburst color="#49BBBD" /> Money Back Guarantee
              </Feature>
              <Feature>
                <FaCamera color="#49BBBD" /> Access on all devices
              </Feature>
              <Feature>
                <FaFileAlt color="#49BBBD" /> Certification of completion
              </Feature>
              <Feature>
                <FaChartBar color="#49BBBD" /> 32 Modules
              </Feature>
            </Features>

            <SectionTitle>Training 5 or more people</SectionTitle>
            <TrainingText>
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively…
            </TrainingText>

            <SectionTitle>Share this course</SectionTitle>
            <ShareWrapper>
              <Socials>
                <SocialIcon>
                  <FaFacebookF />
                </SocialIcon>
                <SocialIcon>
                  <FaTwitter />
                </SocialIcon>
                <SocialIcon>
                  <FaYoutube />
                </SocialIcon>
                <SocialIcon>
                  <FaInstagram />
                </SocialIcon>
                <SocialIcon>
                  <FaTelegram />
                </SocialIcon>
                <SocialIcon>
                  <FaWhatsapp />
                </SocialIcon>
              </Socials>
            </ShareWrapper>
          </RightColumn>
        </RightColumnWrapper>
      </GridWrapper>
    </Container>
  );
};

export default CourseDetail;
