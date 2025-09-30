import React from "react";
import {
  Wrapper,
  Header,
  Title,
  SeeAll,
  Cards,
  Card,
  ImageWrapper,
  DiscountTag,
  CardText,
  CardTitle,
  CardDesc,
} from "./Styled";

import Pic13_6 from "/Pic13.6.png";
import Pic14_2 from "/Pic14.2.png";
import Pic16_2 from "/Pic16.2.png";

const Deals: React.FC = () => {
  const offers = [
    {
      img: Pic13_6,
      discount: "50%",
      title: "Lorem ipsum dolor",
      desc: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    },
    {
      img: Pic14_2,
      discount: "10%",
      title: "Lorem ipsum dolor",
      desc: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    },
    {
      img: Pic16_2,
      discount: "50%",
      title: "Lorem ipsum dolor",
      desc: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    },
  ];

  return (
    <Wrapper>
      <Header>
        <Title>Top Education offers and deals are listed here</Title>
        <SeeAll>See all</SeeAll>
      </Header>
      <Cards>
        {offers.map((offer, i) => (
          <Card key={i}>
            <ImageWrapper>
              <img src={offer.img} alt={offer.title} />
              <DiscountTag>{offer.discount}</DiscountTag>
              <CardText>
                <CardTitle>{offer.title}</CardTitle>
                <CardDesc>{offer.desc}</CardDesc>
              </CardText>
            </ImageWrapper>
          </Card>
        ))}
      </Cards>
    </Wrapper>
  );
};

export default Deals;
