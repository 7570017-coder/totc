import React from "react";
import {
  Section,
  Content,
  Button,
  MediaWrapper,
  Image,
  Card,
  TestimonialFooter,
  UserName,
  RatingContainer,
  StarsRow,
  ReviewsText,
} from "./Styled";
import Pic12 from "/Pic12.png";

const Testimonial: React.FC = () => {
  return (
    <Section>
      <Content>
        <small>TESTIMONIAL</small>
        <h2>What They Say?</h2>
        <p>
          TOTC has got more than 100k positive ratings from our users around the
          world.
        </p>
        <p>
          Some of the students and teachers were greatly helped by the Skilline.
        </p>
        <p>Are you too? Please give your assessment</p>
        <Button>Write your assessment →</Button>
      </Content>

      <MediaWrapper>
        <Image src={Pic12} alt="User" />
        <Card>
          <p>
            "Thank you so much for your help. It's exactly what I've been
            looking for. You won't regret it. It really saves me time and
            effort. TOTC is exactly what our business has been lacking."
          </p>

          <TestimonialFooter>
            <UserName>Gloria Rose</UserName>
            <RatingContainer>
              <StarsRow>★★★★★</StarsRow>
              <ReviewsText>12 reviews at Yelp</ReviewsText>
            </RatingContainer>
          </TestimonialFooter>
        </Card>
      </MediaWrapper>
    </Section>
  );
};

export default Testimonial;
