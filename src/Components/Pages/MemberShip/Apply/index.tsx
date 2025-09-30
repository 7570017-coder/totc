import React from "react";
import {
  Section,
  Container,
  Card,
  Image,
  Content,
  Title,
  Description,
  Button,
} from "./Styled";
import { ButtonRow } from "./Styled";

import Pic from "/Pic13.3.png";

const Apply: React.FC = () => {
  return (
    <Section>
      <Container>
        <Card>
          <Image src={Pic} alt="Teacher" />
          <Content>
            <Title>Become a Teacher</Title>
            <Description>
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively…
            </Description>
            <ButtonRow>
              <Button href="#">Apply a Teacher</Button>
            </ButtonRow>
          </Content>
        </Card>

        <Card>
          <Image src={Pic} alt="Coursector" />
          <Content>
            <Title>Become a Coursector</Title>
            <Description>
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively…
            </Description>
            <ButtonRow>
              <Button href="#">Apply a Coursector</Button>
            </ButtonRow>
          </Content>
        </Card>
      </Container>
    </Section>
  );
};

export default Apply;
