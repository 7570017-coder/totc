import React from "react";
import {
  Container,
  Header,
  Title,
  SeeAll,
  Grid,
  Card,
  Image,
  Name,
  Description,
} from "./Styled";

const creators = [
  { id: 1, img: "Pic26.png", name: "Jane Cooper" },
  { id: 2, img: "Pic27.png", name: "Adam" },
  { id: 3, img: "Pic28.png", name: "Tamara" },
  { id: 4, img: "Pic26.png", name: "Jane Cooper" },
  { id: 5, img: "Pic26.png", name: "Jane Cooper" },
  { id: 6, img: "Pic26.png", name: "Jane Cooper" },
];

const CreatorsSection: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Classes tought by real creators</Title>
        <SeeAll href="#">See all</SeeAll>
      </Header>

      <Grid>
        {creators.map((creator) => (
          <Card key={creator.id}>
            <Image src={creator.img} alt={creator.name} />
            <Name>{creator.name}</Name>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </Description>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default CreatorsSection;
