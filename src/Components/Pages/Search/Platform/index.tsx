import React from "react";
import {
  Container,
  Content,
  Left,
  Title,
  List,
  ListItem,
  Button,
  Right,
  Image,
} from "./Styled";

import { GoDotFill } from "react-icons/go";

const Platform: React.FC = () => {
  return (
    <Container>
      <Content>
        {/* Left Side */}
        <Left>
          <Title>Know about learning learning platform</Title>
          <List>
            <ListItem>
              <GoDotFill /> Free E-book, video & consolation
            </ListItem>
            <ListItem>
              <GoDotFill /> Top instructors from around world
            </ListItem>
            <ListItem>
              <GoDotFill /> Top courses from your team
            </ListItem>
          </List>
          <Button>Start learning now</Button>
        </Left>

        {/* Right Side */}
        <Right>
          <Image src="Pic24.png" alt="Learning Platform" />
        </Right>
      </Content>
    </Container>
  );
};

export default Platform;
